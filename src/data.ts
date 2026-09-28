// Content sourced from the DCS Company Profile 2026. Pages import from here so copy stays in one place.
import stateBank from './assets/images/clients/state-bank-of-pakistan.png';
import rekoDiq from './assets/images/clients/reko-diq.png';
import buitems from './assets/images/clients/buitems.png';
import beaconhouse from './assets/images/clients/beaconhouse.png';
import sbk from './assets/images/clients/sbk-womens-university.png';
import client6 from './assets/images/clients/client-6.png';
import ilm from './assets/images/clients/ilm-foundation.png';
import youthForum from './assets/images/clients/youth-leadership-forum.png';

import teamCertificates from './assets/images/work/team-certificates.jpg';
import trainerSession from './assets/images/work/trainer-session.jpg';
import workshopBoardroom from './assets/images/work/workshop-boardroom.jpg';
import workshop2 from './assets/images/work/workshop-2.jpg';
import workshop3 from './assets/images/work/workshop-3.jpg';

export const stats = [
  { value: '2018', label: 'Delivering training and consulting since' },
  { value: '12', label: 'Specialist trainers in our pool' },
  { value: '600+', label: 'Training sessions delivered by our trainers' },
  { value: '9', label: 'Ready-to-deliver training programmes' },
];

export const values = [
  {
    name: 'Integrity',
    body: "We believe in doing what's right, always. Every partnership is built on transparency, trust and ethical business practice.",
  },
  {
    name: 'Excellence',
    body: 'We hold ourselves to the highest standards and deliver solutions that create real and lasting impact.',
  },
  {
    name: 'Growth',
    body: 'We succeed when our clients and their teams grow together, professionally and sustainably.',
  },
];

export const services = [
  {
    name: 'Training and Development',
    tagline: 'Customised training programmes that turn potential into performance.',
    body: 'Our programmes develop leadership capability, communication, productivity and professional effectiveness at every level of the organisation.',
    items: [
      'Capacity building',
      'Corporate training workshops',
      'Leadership and team-building programmes',
      'Soft skills and behavioural training',
      'Professional development programmes',
      'Customised organisational development modules',
    ],
  },
  {
    name: 'Business Solutions',
    tagline: 'Practical consulting that improves operations and business outcomes.',
    body: 'We help organisations strengthen management systems and processes. Our approach is practical, structured and focused on measurable impact.',
    items: [
      'Business process optimisation',
      'HR and organisational consulting',
      'Strategic planning and execution support',
      'Policy development and compliance frameworks',
      'Organisational performance improvement',
    ],
  },
];

export const programmes = [
  {
    name: 'Business Communication',
    audience: 'Managers and mid-level staff',
    note: 'Useful when emails, reports and presentations regularly go up to senior management or out to clients.',
    topics: ['Corporate writing and email etiquette', 'Presentation skills', 'Managing difficult workplace conversations'],
  },
  {
    name: 'Teamwork',
    audience: 'Mid-level staff',
    note: 'For teams that have grown quickly, merged, or keep getting stuck on the same disagreements.',
    topics: ['Trust-building and emotional intelligence', 'Constructive conflict resolution', 'Accountability frameworks'],
  },
  {
    name: 'Prioritisation and Time Management',
    audience: 'Mid-level staff',
    note: 'For staff who are busy all day but still see important work slip.',
    topics: ['Eisenhower Matrix and smart prioritisation', 'Overcoming procrastination', 'Managing digital distractions'],
  },
  {
    name: 'Workplace Professionalism and Ethics',
    audience: 'Mid-level staff',
    note: 'A good fit alongside a new code of conduct, or after a compliance issue.',
    topics: ['Corporate compliance and ethical dilemmas', 'Professional boundaries', 'Building a respectful culture'],
  },
  {
    name: 'Intermediate Microsoft Office and Outlook',
    audience: 'Mid-level staff',
    note: 'Hands-on, at the computer. Participants work on files similar to the ones they use every day.',
    topics: ['Word, Excel, PowerPoint and Outlook for efficient document, data and presentation work'],
  },
  {
    name: 'Leading High-Performing Teams',
    audience: 'First-line managers',
    note: 'For people recently promoted from within the team they now lead.',
    topics: ['Situational leadership', 'Performance coaching and delegation', 'Continuous feedback'],
  },
  {
    name: 'Practical AI Adoption in the Workplace',
    audience: 'Managers and mid-level staff',
    note: 'Covers what to use AI tools for, what not to, and how to keep company data safe while doing it.',
    topics: [
      'Generative AI for business',
      'Prompting for reporting, drafting and summaries',
      'Workflow automation',
      'Data privacy and ethical AI use',
    ],
  },
  {
    name: 'Workplace SGBV Prevention',
    audience: 'All staff and supervisors',
    note: 'Often requested by organisations working with donors that require safeguarding training.',
    topics: [
      'Understanding sexual and gender-based violence and harassment',
      'Prevention and respectful conduct',
      'Bystander intervention',
    ],
  },
  {
    name: 'Stress Management and Resilience',
    audience: 'All staff and supervisors',
    note: 'Led by a psychology lecturer and counsellor, not a motivational speaker.',
    topics: ['Self-care', 'Social support', 'Identifying triggers'],
  },
];

export const team = [
  {
    name: 'Shah Zaib',
    sessions: '60+',
    bio: "Digital trainer and facilitator with over five years' experience in digital marketing, freelancing, soft skills and time management. Has led workshops for UNDP, UNICEF and the National Incubation Center.",
    leads: 'Time Management, Professionalism and Ethics',
  },
  {
    name: 'Ali Zaidi',
    sessions: '80+',
    bio: 'Peacebuilder, media strategist and CEO of Quetta Book Cafe, experienced in corporate facilitation, conflict resolution and soft skills. Moderator for the Young Leaders Conference; specialises in executive communication and situational leadership.',
    leads: 'Communication, Teamwork, Leading Teams',
  },
  {
    name: 'Zahoor Ahmed',
    sessions: '25+',
    bio: 'Communication expert, content creator and former Marketing Manager. Designs capacity-building programmes for Beaconhouse Group and School of Leadership Foundation, focused on corporate writing, presentations and supervisory skills.',
    leads: 'Communication, Leading Teams',
  },
  {
    name: 'Zamraan Khan',
    sessions: '80+',
    bio: 'Organisational development consultant, executive coach and CEO of Inspiration Lab, with over six years across corporate, academic and development sectors. Has designed experiential learning for IBA Karachi and UNICEF.',
    leads: 'Communication, Teamwork, Leading Teams',
  },
  {
    name: 'Sabeen Malik',
    sessions: '50+',
    bio: "Media Strategist at the Balochistan Board of Investment and Trade, NDI-certified Master Trainer and founder of Digital Concoction. Six years' experience in corporate communications, PR, digital strategy and crisis communication.",
    leads: 'Business Communication',
  },
  {
    name: 'Syed Daniyal Zaidi',
    sessions: '30+',
    bio: 'IT solutions lead, certified trainer and technology consultant specialising in applied AI and office productivity. Runs hands-on workshops on workplace AI adoption, prompting for business reporting and workflow automation.',
    leads: 'Microsoft Office, AI Adoption',
  },
  {
    name: 'Batool Fatima',
    sessions: '50+',
    bio: 'Architect, entrepreneur and experienced trainer who has facilitated youth, corporate and civil society programmes for Lincoln Corner and the Balochistan Youth Affairs Department. Combines Microsoft Office expertise with facilitation in ethics and SGBV prevention.',
    leads: 'Ethics, Microsoft Office, SGBV Prevention',
  },
  {
    name: 'Bilqees Abdul Shakoor',
    sessions: '70+',
    bio: 'Award-winning project manager and certified trainer with experience across GIZ, UNICEF, WFP and government health programmes. Recipient of the I Am The Change Award, with expertise in safeguarding, SGBV prevention and inclusive workplaces.',
    leads: 'SGBV Prevention',
  },
  {
    name: 'Adilia Batool',
    sessions: '40+',
    bio: 'Soft skills trainer and development professional specialising in workplace dynamics, conflict resolution and gender sensitivity. Facilitates interactive workshops on emotional intelligence, teamwork, bystander intervention and safeguarding.',
    leads: 'Teamwork, SGBV Prevention',
  },
  {
    name: 'Badar Ali',
    sessions: '65+',
    bio: 'Corporate soft skills trainer specialising in personal effectiveness, time management and ethical compliance. Delivers practical modules on overcoming procrastination, workplace professionalism and managing digital distractions.',
    leads: 'Time Management, Professionalism and Ethics',
  },
  {
    name: 'Abdul Malik',
    sessions: '35+',
    bio: 'HR governance and ethics specialist with expertise in organisational compliance, corporate ethics and workplace policy. Runs interactive sessions on ethical dilemmas, professional boundaries and building a culture of integrity.',
    leads: 'Professionalism and Ethics',
  },
  {
    name: 'Anqa Gharshin',
    sessions: '50+',
    bio: 'Lecturer in the Psychology Department at BUITEMS for over eight years. Graduate in Psychological Counselling and Guidance from Kocaeli University, Türkiye, and a Basic Consultant in Positive and Transcultural Therapy, experienced in career and one-to-one counselling.',
    leads: 'Stress Management and Resilience',
  },
];

export const clients = [
  { name: 'State Bank of Pakistan', logo: stateBank },
  { name: 'Reko Diq Mining Company', logo: rekoDiq },
  { name: 'BUITEMS', logo: buitems },
  { name: 'Beaconhouse', logo: beaconhouse },
  { name: "Sardar Bahadur Khan Women's University", logo: sbk },
  // TODO: confirm this client's name — the profile shows only the logo ("I am – to learn", since 1978).
  { name: 'School client (since 1978)', logo: client6 },
  { name: 'The ILM Foundation', logo: ilm },
  { name: 'Youth Leadership Forum', logo: youthForum },
];

export const sectors = ['Banking', 'Mining', 'Pharmaceuticals', 'Education', 'Development sector'];

// Organisations our trainers have delivered or designed programmes for (from their individual bios).
export const trainerExperience = [
  'UNICEF',
  'UNDP',
  'GIZ',
  'WFP',
  'IBA Karachi',
  'National Incubation Center',
  'Beaconhouse Group',
  'Lincoln Corner',
];

// Photos from past sessions. To add more: drop the file in src/assets/images/work/, import it above and add an entry.
export const gallery = [
  { image: teamCertificates, alt: 'Participants in high-visibility workwear holding their training certificates' },
  { image: trainerSession, alt: 'A trainer leading a practice dialogue session' },
  { image: workshopBoardroom, alt: 'Participants seated around a boardroom table during a workshop' },
  { image: workshop2, alt: 'A facilitator speaking to a large group at a training event' },
  { image: workshop3, alt: 'A trainer speaking into a microphone during a session' },
];
