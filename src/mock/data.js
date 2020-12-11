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
  subtitle: '',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'Rian is a Developer based in Edinburgh.' + 'Originally from Northern Ireland, he moved to Scotland to study an MSc in Cognitive Science and Philosophy in the University of Edinburgh.',
  paragraphTwo: 'He has built and delpoyed applications from scratch in various languages, including Javacript, Python, HTML and CSS.' + 
                'Most of his spare time is spent either on walks with his fiancée, Katja and border collie Link, playing chess or listening to obscure podcasts.' ,
  paragraphThree: 'Rian is open to opportunities to join a small focused team tackling difficult and interesting problems.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'facerecognition411',
    info: 'This react app connects to clarifai\'s AI facial \
          recognition API to detect faces in the users \
          submitted pictures. It makes use of front-\
          end and back-end design to deliver various \
          pages to the user. It also connects to a \
          database to store users data and enable \
          sign-in functionality.',
    info2: '',
    url: 'https://facerecognition411.herokuapp.com/',
    repo: 'https://github.com/RianMellotte/facerecognition-Frontend', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
