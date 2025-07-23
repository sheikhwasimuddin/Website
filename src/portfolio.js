/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};



const greeting = {
  username: "Sheikh Wasimuddin",
  title: "Hey there",
  subTitle:("I am Sheikh Wasimuddin.A passionate Full Stack Software Developer, AI And Cloud Enthusiast. Never stop Developing."),

  resumeLink:
    "src/containers/greeting/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sheikhwasimuddin",
  linkedin: "https://www.linkedin.com/in/sheikhwasimuddin",
  gmail: "sheikhwasimuddin786@gmail.com",
  instagram: "https://www.instagram.com/sheikh_wasimuddin",
  twitter: "https://x.com/sk_wasimuddin07",
  gitlab: "https://gitlab.com/sheikhwasimuddin",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Here's what i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and MERN Stack devloper."),
    emoji(
      "⚡ Create data visualizations and dashboards using Power BI for analytics and reporting."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "TailwindCSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName:"C",
      fontAwesomeClassname:"fas fa-code"
    },
    {
      skillName:"Expressjs",
      fontAwesomeClassname:"fas fa-server"
    },
    
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Yeshwantrao Chavan College Of Engineering, Nagpur, Maharashtra",
      logo: require("./assets/images/ycce.png"),
      subHeader: "Bachelor of Technology In Computer Science And Engineering(IoT)",
      duration: "August 2023 - June 2027",
      desc: "Participated in various hackathon Across India",
      descBullets: [
        "Majors In IoT",
        "Minors In Cloud",
        "Co-Head In Design In CTSC"
        
      ],
      website: "https://www.ycce.edu"
    },
    {
      schoolName: "Burgess English Medium School, Bilaspur, Chhattisgarh",
      logo: require("./assets/images/burgess.png"),
      subHeader: "Senior Secondary Education",
      duration: "August 2021 - July 2023",
      desc: "",
      descBullets: [
        "Completed Class 12th(In Mathematics)",
        "CBSE XII:85.6%"
        
      ],
      website:"https://burgessenglish.com/",
    },
    {
      schoolName: "St.Xaviers High School, Bilaspur, Chhattisgarh",
      logo: require("./assets/images/xavier.png"),
      subHeader: "Primary And Secondary Education",
      duration: "April 2008 - June 2021",
      desc: "",
      descBullets: [
        "Completed Class 10th",
        "CBSE X - 86.5%"
      ],
      website:"https://stxaviersbilaspur.com"
    },

  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
   
    {
      role: "Front-End Software Developer Intern",
      company: "Skyscanner",
      companylogo: require("./assets/images/skyscanner.png"),
      date: "March 2025 – April 2025",
      desc: "Front-End Software Developer | Skyscanner (Forage)",
      descBullets: [
        "Developed a Backpack React Web App as part of the program. Worked with React.js, JavaScript, HTML, CSS, and Git",
        "Designed interactive user interfaces and managed component state.",
        " Optimized performance and followed industry best practices. ",
        "Gained hands-on experience in front-end development."
      ]
    },
    {
      role: "Junior Software Developer Intern",
      company: "YuvaIntern ",
      companylogo: require("./assets/images/yuva.png"),
      date: "April 2025 – May 2025",
      desc: "Junior Software Developer Intern At Yuva Intern",
      descBullets: [
        "Implemented interactive UI elements following modern design practices.",
        "Developed front-end components and optimized web application performance.",
        " Strengthened skills in frontend development, code optimization, and cross-browser compatibility. ",
        "Gained hands-on experience in front-end development."
      ]
    },
    {
      role: "Co head In Design",
      company: "CTSC YCCE ",
      companylogo: require("./assets/images/ctsc.jpg"),
      date: "August 2024 – Present",
      desc: "Co-Head of Design in CTSC YCCE",
      descBullets: [
        "As Co-Head of Design at CTSC YCCE, I led the visual design efforts for technical and cultural events, workshops, and seminars organized by the chapter.",
        "  I focused on creating clean, intuitive, and responsive designs that enhanced user engagement and team coordination. ",
        "My responsibilities included designing event posters, social media creatives, banners, and presentations using tools like Figma, Canva, and Adobe Illustrator."
      ]
    },
    {
      role: "Summer Research Intern",
      company: "Maulana Azad National Institute of Technology",
      companylogo: require("./assets/images/manit.png"),
      date: "May 2025 – July 2025",
      desc: "Outreach Summer Internship",
      descBullets: [
  "Worked under the guidance of Dr. N. Jayanth at the Centre of Excellence in Product Design and Smart Manufacturing",
  "Gained hands-on experience in Mechatronics, integrating mechanical systems with electronics and control engineering",
  "Explored Additive Manufacturing (3D Printing) techniques and their applications in rapid prototyping and product development",

]

    },
  ]};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to 
  ]get github key look at readme.md */

  const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
  };

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some big project that helped me to grow",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Cool City",
      projectDesc: ["Developed an interactive web platform to spread awareness about the Urban Heat Island (UHI) effect and promote sustainable urban planning",
        "Integrated dynamic heatmap visualizations using Ventusky weather maps to display real-time urban temperature, wind, and environmental data.",
        "A real-time chatbot assistant further enhances user engagement by answering climate-related queries and guiding navigation"],
        footerLink: [
        {
          name: "Visit Website",
          url: "https://cool-city.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
{
  title: "Big Projects",
  subtitle: "Some big project that helped me to grow",
  projects: [
    {
      image: require("./assets/images/"),
      projectName: "MedIoT",
      projectDesc: ["MedIoT is an innovative Medical Internet of Things (IoT) project designed to provide real-time health monitoring, disease prediction, and emergency alerting using smart devices, machine learning, and cloud integration."],
                    ["It aims to improve remote patient care and ensure early detection of health issues using wearable sensors and AI."],
        footerLink: [
        {
          name: "Visit Website",
          url: "https://medicaliot.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Coursera",
      subtitle:
        "Introduction to Front-End Development,        Foundations of Project Management,       Technical Support Fundamentals.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NEbrJaQkXYZ_1nZHREUk27iDlmj7o5h0/view?usp=sharing"
        },
      ]
    },
    {
      title: "Certifications",
      subtitle:
        " Blockchain, Fintech, and Cyber Security (BFC-25), NIT Raipur",
      image: require("./assets/images/nitrr.png"),
      imageAlt: "NIT Raipur Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1BV9tbbjF5vsSPF9rLwqVK0F0mIloEhqx/view?usp=sharing"
        }
      ]
    },

    {
      title: "NPTEL Certificates",
      subtitle: ["Centre-State Relations in India(Feb-Apr2024), ",
      " Soft Skill Development (Jul–Sep 2024)."],
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/19e7N7uMn9w4UNKHozNEq7FQjl9miKyGS/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest  2019",
      slides_url: "",
      event_url: "/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-XXXXXXXXXX",
  email_address: "sheikhwasimuddin786@gmail.com"
  
};

// Twitter Section

const twitterDetails = {
  userName: "sk_wasimuddin07", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  openSource,
  resumeSection
};
