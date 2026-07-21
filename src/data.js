import work1 from './assets/img/work1.png'
import work2 from './assets/img/work2.png'
import work3 from './assets/img/work3.png'
import work4 from './assets/img/work4.png'
import work5 from './assets/img/work5.png'
import work6 from './assets/img/work6.png'
import work7 from './assets/img/work7.png'
import work8 from './assets/img/work8.png'
import work9 from './assets/img/work9.png'

export const softwareSkills = [
  [
    { icon: 'bx bxl-visual-studio', name: 'VScode', level: 'Expert' },
    { icon: 'fa-brands fa-html5', name: 'HTML', level: 'Expert' },
    { icon: 'fa-brands fa-css3-alt', name: 'CSS', level: 'Expert' },
  ],
  [
    { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap', level: 'Expert' },
    { icon: 'fa-brands fa-css3', name: 'Tailwind', level: 'Expert' },
    { icon: 'fa-brands fa-js', name: 'JAVASCRIPT', level: 'Expert' },
  ],
]

export const serviceSkills = [
  [
    { icon: 'fa-solid fa-terminal', name: 'Devops', level: 'Expert' },
    { icon: 'fa-solid fa-mobile', name: 'Responsive', level: 'Expert' },
    { icon: 'fa-solid fa-bomb', name: 'Errors', level: 'Expert' },
  ],
  [
    { icon: 'fa-brands fa-github', name: 'Git Hub', level: 'Expert' },
    { icon: 'bx bxl-figma', name: 'Figma', level: 'Expert' },
    { icon: 'fa-brands fa-cpanel', name: 'Cpanel', level: 'Expert' },
  ],
]

const serviceListDefault = [
  'I design the user interface.',
  'Design to WebSite.',
  'I create user friendly interactions.',
  'I position your company brand.',
  'I create website dynamically with all the responsive dimensions.',
]

export const services = [
  {
    title: ['Web', 'Development'],
    modalTitle: 'Web Development',
    items: [
      'I develop the user interface.',
      'develop to WebSite.',
      'I create user friendly interactions.',
      'I position your company brand.',
      'I create website dynamically with all the responsive dimensions.',
    ],
  },
  {
    title: ['Errors', 'Debugging'],
    modalTitle: 'Visual Designer',
    items: serviceListDefault,
  },
  {
    title: ['Responsive', 'Dimentions'],
    modalTitle: 'UIUX Designer',
    items: serviceListDefault,
  },
]

export const works = [
  {
    img: work1,
    title: 'Gaming Dashboard Design',
    category: 'web',
    link: 'https://www.figma.com/file/omSNTUShLFmRxAu19UwyvJ/Gamming-Dashboard?node-id=0%3A1',
  },
  {
    img: work7,
    title: 'E-commerce App Design',
    category: 'mobile',
    link: 'https://www.figma.com/file/ROoXVdOfF6RTEuCLljFTKh/E-commerce-Application?node-id=28%3A9',
  },
  {
    img: work4,
    title: 'Travel Landing Page Design',
    category: 'web',
    link: 'https://www.figma.com/file/hTUtDn6KWFXgDmtmOV9spQ/Landing-Page-Travel?node-id=0%3A1',
  },
  {
    img: work2,
    title: 'Dating App Design',
    category: 'mobile',
    link: 'https://www.figma.com/file/0J6XrW55ooQ4k4N4K31KBo/Dating-app?node-id=607%3A690',
  },
  {
    img: work5,
    title: 'Perfume Web Landing page Design',
    category: 'web',
    link: 'https://www.figma.com/file/B4deatCN9YUPJztFvfmyr6/Perfume-Website-Design?node-id=0%3A1',
  },
  {
    img: work8,
    title: 'Fitness App Design',
    category: 'mobile',
    link: 'https://www.figma.com/file/IB6XqzjFgDikpF2YO3aflD/Fitness-app?node-id=904%3A3049',
  },
  {
    img: work6,
    title: 'Real-Estate Web Landing Page Design',
    category: 'web',
    link: 'https://www.figma.com/file/Jg4bpjVcj3gIh32tORPr6H/Real-Estate-Web-Landing-Page-Design?node-id=0%3A1',
  },
  {
    img: work9,
    title: 'Doctor App Design',
    category: 'mobile',
    link: 'https://www.figma.com/file/XzXAOry0megLTXdjTN4L3M/Doctor-App?node-id=250%3A9',
  },
]

// work3 kept available in assets in case you want to add a 9th project card
export { work3 }
