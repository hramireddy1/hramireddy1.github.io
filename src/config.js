module.exports = {
  siteTitle: 'Hemanth Ramireddy | Data Analyst',
  siteDescription:
    'Hemanth Ramireddy is a Data Analyst at Uber, who loves learning new things and spreading the knowledge.',
  siteKeywords: 'Hemanth Ramireddy, Hemanth, Ramireddy, hramireddy1, Data Analyst',
  siteUrl: 'https://hramireddy1.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Hemanth Ramireddy',
  location: 'Hyderabad, India',
  email: 'hramireddy1@gmail.com',
  github: 'https://github.com/hramireddy1',
  twitterHandle: '@hramireddy1',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hramireddy1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hramireddy1/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hramireddy1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
