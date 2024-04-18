
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Akbar",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Akbar",
  description: "I love to work contractually helping to growing my clients' business🤝",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am working as a Software Engineer as a Full Stack Developer, Designer and a Software Architect. Its been 3 years of dedication that has made me capable of building solutions at scale. I am in Love with building research driven innovative solutions from scratch. Having the urge of giving back to people I teach students in my freetime, and raise funds for the deserving lads. From personally conducting hackathons to mentoring students as a Developer Advocate I have built empowering tech communities benefitting thousands of people across Pakistan.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Full Stack Development",
      description: "Building responsive websites using React-Redux.js | HTML/CSS | TailwindCSS | Bootstrap | Scemantic UI | Theme UI | Material UI | Core UI",
      icons: null,
    },
    {
      title: "UI/UX Design",
      description: "Designing highly attractive user interface for mobile and web applications",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: []
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hussain-akbarsabri@gmail.com.",
  buttons: [
    // {
    //   title: "Email Me",
    //   link: "mailto:hashirshoaeb@gmail.com",
    //   isPrimary: true,
    // },
    // {
    //   title: "Schedule Meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // // 50 - 60 char  
  // title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
  // description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  // image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@hussain-akbarsabri",
  description: "Computer Engineer | Rails | Reactjs Developer",
  cards: [
    // {
    //   title: "My website",
    //   link: "https://hashirshoaeb.com/",
    // },
    // {
    //   title: "QuranTalk App",
    //   link: "https://www.qurantalk.app/",
    // },
    // {
    //   title: "StarBook App",
    //   link: "https://starbook.dev/",
    // },
    // {
    //   title: "My GitHub",
    //   link: "https://github.com/hashirshoaeb/",
    // },
    // {
    //   title: "My LinkedIn",
    //   link: "https://www.linkedin.com/in/hashirshoaeb/",
    // },
  ]
}