import {
  atlassian,
  java,
  c,
  python,
  mongodb,
  postman,
  travizco,
  sngular,
  uminho,
  domDiogo,
  school,
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
  mysql,
  wroclaw
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
    title: 'Full-Stack Developer',
    icon: frontend,
  },
  {
    title: 'Software Design',
    icon: backend,
  },
  {
    title: 'Distributed Systems',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Atlassian Ecosystem',
    icon: atlassian,
  }
];

const experiences = [
  { 
    subtitle: 'High School',
    title: 'Sciences and Technologies',
    company_name: 'Dom Diogo de Sousa',
    icon: domDiogo,
    iconBg: '#333333',
    date: 'Sep 2016 - Jun 2019',
  },
  {
    subtitle: 'Bachelor Degree',
    title: 'Software Engineering',
    company_name: 'University of Minho',
    icon: uminho,
    iconBg: '#333333',
    date: 'Sep 2019 - Jun 2022',
  },
  {
    subtitle: 'Travizco Application Development',
    title: 'Data Collector',
    company_name: 'ImpactZero',
    icon: travizco,
    iconBg: '#333333',
    date: 'Jul 2021 - Sep 2021',
  },
  { 
    subtitle: "Master Degree",
    title: 'Distributed Systems and Language Engineering',
    company_name: 'University of Minho',
    icon: uminho,
    iconBg: '#333333',
    date: 'Sep 2022 - Jun 2024',
  },
  { 
    subtitle: 'Xray by XBlend',
    title: 'Junior Software Engineer',
    company_name: 'SNGULAR',
    icon: sngular,
    iconBg: '#333333',
    date: 'Apr 2023 - Present',
  },
  {
    subtitle: 'Exchange Semester',
    title: 'ARQUS Alliance Program',
    company_name: 'Uniwersytet Wroclawski',
    icon: wroclaw,
    iconBg: '#333333',
    date: 'Oct 2023 - Fev 2024',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
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
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
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
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
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
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
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
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
