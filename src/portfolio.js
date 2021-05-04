/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mehdi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohamed Mehdi Gara Portfolio",
    type: "website",
    url: "http://MohamedMehdiGara.com/",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Mehdi Gara",
  logo_name: "MohamedMehdiGara",
  nickname: "Med",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1qgeN3eKOzyDOuTqPNG205S05qtWruPuB/view",
  portfolio_repository: "https://github.com/mohamedmehdigara/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/mohamedmehdigara",
  // linkedin: "https://www.linkedin.com/in/mohamed-mehdi-gara-mmg/",
  
  

  {
    name: "Github",
    link: "https://github.com/mohamedmehdigara",
    
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohamed-mehdi-gara-mmg/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
    
];
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      
      softwareSkills: [
              
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      
      softwareSkills: [
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      
      softwareSkills: [
        
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};
        
      
    
  


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/garamehdi57",
    },
    
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/mehdi50",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Université Centrale",
      subtitle: "B.Economics. in Quantitative Economics",
      duration: "2012 - 2018",   
    },
    {
      title: "Université Centrale",
      subtitle: "Masters of Business Administration",
      duration: "2018 - 2021"
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analysis with Python",
      subtitle: "- Quincy Larson",
      certificate_link:
        "https://www.freecodecamp.org/certification/fccd73e7473-743b-458b-b195-dee0b6982870/data-analysis-with-python-v7",
      alt_name: "FreecodeCamp",
      color_code: "#8C151599",
    },
    
  ],
};

// Experience Page


// Projects Page


// Contact Page

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications
};
