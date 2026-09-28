# Deploying distinctcorporatesolutions.com

Same setup as the Illawarra Spray Pave site: GitHub Actions builds the site and rsyncs `dist/` over Tailscale into a Caddy container, which Cloudflare Tunnel exposes to the internet. No ports need to be opened on the host.

```
Browser ──HTTPS──> Cloudflare ──tunnel──> cloudflared ──HTTP──> Caddy ──> /var/www/distinctcorporatesolutions
                                                                   ^
GitHub Actions ──Tailscale + SSH (rsync)───────────────────────────┘
```

## 1. Point the domain at Cloudflare (VentraIP)

Skip this if `distinctcorporatesolutions.com` already appears as **Active** in the Cloudflare dashboard.

1. Cloudflare dashboard → **Add a domain** → `distinctcorporatesolutions.com` → Free plan.
2. Cloudflare shows two nameservers (e.g. `xxx.ns.cloudflare.com`).
3. VentraIP VIP Control Panel → **Domain names** → the domain → **DNS / Nameservers** → choose custom nameservers and enter the two Cloudflare ones. Remove the VentraIP defaults.
4. Wait for Cloudflare to mark the zone **Active** (usually under an hour, can take up to 24h).
5. In Cloudflare DNS, delete any `A`/`AAAA`/`CNAME` records for `@` and `www` left over from VentraIP parking. The tunnel creates its own in step 3. Leave any `MX`/`TXT` records alone.

## 2. Prepare the Caddy container

On the host/container that serves the spray-pave site:

```sh
sudo mkdir -p /var/www/distinctcorporatesolutions
sudo chown deploy:deploy /var/www/distinctcorporatesolutions
```

Add a site block to the Caddyfile (TLS is handled by Cloudflare, so Caddy listens on plain HTTP like the existing site):

```caddy
http://distinctcorporatesolutions.com {
	root * /var/www/distinctcorporatesolutions
	encode zstd gzip
	try_files {path} {path}/ {path}.html
	file_server

	@assets path /_astro/*
	header @assets Cache-Control "public, max-age=31536000, immutable"

	handle_errors {
		rewrite * /404.html
		file_server
	}
}

http://www.distinctcorporatesolutions.com {
	redir https://distinctcorporatesolutions.com{uri} permanent
}
```

Reload Caddy: `caddy reload --config /etc/caddy/Caddyfile` (or `docker exec <caddy-container> caddy reload --config /etc/caddy/Caddyfile`).

## 3. Add the hostnames to the Cloudflare Tunnel

Cloudflare dashboard → **Zero Trust** → **Networks** → **Tunnels** → the tunnel already used for the spray-pave site → **Public hostnames** → **Add a public hostname**:

| Subdomain | Domain | Service |
|---|---|---|
| *(blank)* | distinctcorporatesolutions.com | `HTTP` → same target as the spray-pave hostname (e.g. `caddy:80` or `localhost:80`) |
| `www` | distinctcorporatesolutions.com | same as above |

Cloudflare creates the proxied `CNAME` records automatically. Caddy routes by the `Host` header, so both sites can share one tunnel and one Caddy.

Then in the Cloudflare zone for the new domain: **SSL/TLS → Edge Certificates → Always Use HTTPS: On**.

## 4. GitHub Actions secrets

Repo → **Settings → Secrets and variables → Actions**, add the same four secrets the spray-pave repo uses (GitHub never shows secret values, so copy them from wherever you keep them, or create new ones):

| Secret | Value |
|---|---|
| `TS_OAUTH_CLIENT_ID` | Tailscale OAuth client ID (needs the `tag:ci` tag allowed) |
| `TS_OAUTH_SECRET` | Tailscale OAuth client secret |
| `SSH_PRIVATE_KEY` | Private key whose public half is in `~deploy/.ssh/authorized_keys` on the Caddy host |
| `DEPLOY_HOST` | Tailscale hostname or IP of the Caddy host |

Once they're set, re-run the latest **Build and Deploy** workflow (Actions tab → workflow → **Re-run**), or push any commit to `main`.

## 5. Contact form

1. Go to https://web3forms.com, enter `distinctcorporatesolutions@gmail.com`, and copy the access key they email you.
2. Put it in `WEB3FORMS_ACCESS_KEY` in `src/consts.ts` and push. Until then, the form asks visitors to call or email instead.

## Checklist

- [ ] `dig NS distinctcorporatesolutions.com +short` shows Cloudflare nameservers
- [ ] https://distinctcorporatesolutions.com loads, and `www.` redirects to it
- [ ] `/programmes`, `/team` etc. load directly (not only via links)
- [ ] A test contact-form submission arrives in the Gmail inbox
