import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rian Mellotte | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Rian Mellotte',
  subtitle: ' ',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'Rian is a Developer based in Vilanova i la Geltrú, Spain. Originally from Northern Ireland, he fell in love with programming while studying a MSc in Cognitive Science and Philosophy in Edinburgh.',
  paragraphTwo: 'He has built and delpoyed applications from scratch in various languages, including C#, Typescript, and Python. He currently works as a Full Stack Developer for Edinburgh based start-up, Forrit.' + 
                'Most of his spare time is spent either on walks with his wife, Katja and border collie Link, playing chess or listening to obscure guitar.' ,
  paragraphThree: 'Rian is open to opportunities to join a small focused team tackling difficult and interesting problems.',
  resume: 'https://rianmellotte.github.io/Resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chip.png',
    title: 'facerecognition411',
    info: 'This react app connects to clarifai\'s AI facial recognition API to detect faces in the users submitted pictures.',
    info2: 'It makes use of front-end and back-end design to deliver various pages to the user. It also connects to a database to store users data and enable \
          sign-in functionality.',
    url: 'https://facerecognition411.herokuapp.com/',
    repo: 'https://github.com/RianMellotte/facerecognition-Frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'This react application connects to an API, robohash, in order to deliver uniquely generated images of robots.',
    info2: 'It also showcases a search function to easily return specific robots.',
    url: 'https://riansrobofriends.netlify.app',
    repo: 'https://github.com/RianMellotte/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Background Colour Generator',
    info: 'This simple app allows the user to preview colour selections for websites or other creative projects. I have plans to improvee this further with additional background effects.',
    info2: '',
    url: 'https://background-colour-preview.netlify.app/',
    repo: 'https://github.com/RianMellotte/background-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please email me for all enquiries!',
  btn: 'Email',
  email: 'rianmellotte@hotmail.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://uk.linkedin.com/in/rian-mellotte-ab121b157',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RianMellotte',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
