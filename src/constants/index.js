import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongodb,
  next,
  parampara,
  catalysts,
  bus,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Next Js',
    icon: next,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Freelancer',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2020 - Mar 2023',
  },
  {
    title: 'Software Developer',
    company_name: 'Nexenstial LLP',
    icon: microverse,
    iconBg: '#333333',
    date: 'Dec 2021 - Mar 2023',
  },
  {
    title: 'Core Team Member',
    company_name: 'Google Developer Student Club',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jul 2022 - Apr 2023',
  },
  {
    title: 'Software Developer',
    company_name: 'Packet Finatic LLC',
    icon: dcc,
    iconBg: '#333333',
    date: 'Mar 2023 - Jul 2023',
  },
  {
    title: 'Frontend Lead',
    company_name: 'Catalysts Reachout',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Parampara',
    description: 'Parampara is a e-commerce website for cold pressed oils.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: parampara,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://paramparaoils.in/',
  },
  {
    id: 'project-2',
    name: 'E Lobby',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/AnandD17/avatar-room',
    // demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Revaltronics',
    description: 'Scrape the lyrics from several souce and list at a common place.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://lyrics.revaltronics.com/',
  },
  {
    id: 'project-4',
    name: 'Catalysts Reachout',
    description: `A Community of students where each other learn from each other.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: catalysts,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://www.catalystsreachout.com/',
  },
  {
    id: 'project-5',
    name: 'Live Bus Tracker',
    description:
      'Track every bus around you, with the help of gps.  (under progress)',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bus,
    // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    // demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
