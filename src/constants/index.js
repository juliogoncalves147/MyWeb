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
  wroclaw,
  topology,
  bets,
  gcp,
  paralel,
  javaV2
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
    name: 'Stream Protocol',
    description: 'Development of a real-time streaming protocol for Text, Audio, and Video through an Over-the-top Service.',
    technologies: 'Java, Threads, Common Open Research Emulator',
    image: topology,
    repo: 'https://github.com/juliogoncalves147/Stream-Protocol',
  },
  {
    id: 'project-2',
    name: 'Bets Book',
    description:
      'A real-time program that gives the best odds for each game in the top five European football leagues across various betting websites, empowering users with instant and strategic betting insights.',
    technologies: 'Python, NodeJs, Json, Selenium, Bs4, Fuzzywuzzy',
    image: bets,
    repo: 'https://github.com/juliogoncalves147/BetsBook',
  },
  {
    id: 'project-3',
    name: 'Ansible Playbook',
    description: 'Automation of the Installation, Configuration, Monitoring and Evaluation Process of a \"Ghost.org & MySQL\" Service',
    technologies: 'Ansible Playbook, Docker, Google Cloud Platform, Kubernets',
    image: gcp,
    repo: 'https://github.com/juliogoncalves147/Ansible-Playbook',
  },
  {
    id: 'project-4',
    name: 'Parallel Programming',
    description: `Implementation of different parallel programming techniques in C (OpenMP, MPI) to k-means algorithm and respective performance evaluation.`,
    technologies: 'C, OpenMP, MPI',
    image: paralel,
    repo: 'https://github.com/juliogoncalves147/Parallel-Programing',
  },
  {
    id: 'project-5',
    name: 'Management System',
    description:
      'Query and management system for a classification/recommendation service for for commercial establishments based on user preferences. You can find the same project, developed in C, in the repository parent',
    technologies: 'Java',
    image: javaV2,
    repo: 'https://github.com/juliogoncalves147/TP-JAVA-Gestao-Consulta-de-Dados',
  },
];

export { services, technologies, experiences, projects };
