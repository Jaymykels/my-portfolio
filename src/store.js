import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatar: "/my-portfolio/img/avatar.jpeg",
    fullname: "Chukwuemeka Michael Ezeokoye",
    DOB: "15th May 1993",
    occupation: "Software Engineer",
    years_experience: "5+",
    mobile: "+234 708 038 7486",
    email: "jaymykels69@gmail.com",
    address: "Ajah",
    location: "Lagos",
    nationality: "Nigerian",
    resume: "",
    contract: ["Trace Media", "Folio Media Group", "Stears"],
    skills: ["Java", "PHP", "JavaScript", "Python"],
    professional_experience: [
      {
        period: "2018 - PRESENT",
        company: "INTERSWITCH",
        position: "Software Engineer",
        responsibilities:
          "Design, implementaion and application development. Creating user interfaces that reflect the business requirement and satifies the system requirement specification."
      },
      {
        period: "2017 - 2018",
        company: "CREDIT CLAN",
        position: "Software Engineer",
        responsibilities:
          "Seeing out a project from conception to final product, by developing and designing web applications and ensuring their responsiveness and ability to scale."
      },
      {
        period: "2016 - 2017",
        company: "GLOBAL INFO SWIFT",
        position: "Software Engineer",
        responsibilities:
          "Seeing out a project from conception to final product, by developing and designing web applications and ensuring their responsiveness and ability to scale."
      }
    ],
    education: [
      {
        period: "2015 - 2018",
        institution: "UNIVERSITY OF IBADAN",
        degree: "BACHELORS DEGREE",
        summary:
          "Graduated from the department of Computer Science University of Ibadan."
      }
    ],
    technical_skills: [
      {
        technology: "Laravel",
        percentage: 95
      },
      {
        technology: "Node.js",
        percentage: 95
      },
      {
        technology: "Vue",
        percentage: 95
      },
      {
        technology: "Ionic",
        percentage: 70
      },
      {
        technology: "Angular",
        percentage: 65
      },
      {
        technology: "React",
        percentage: 85
      },
      {
        technology: "Spring Boot",
        percentage: 80
      },
      {
        technology: "Django",
        percentage: 50
      },
      {
        technology: "Docker",
        percentage: 70
      },
      {
        technology: "Kubernetes",
        percentage: 50
      },
      {
        technology: "Jenkins",
        percentage: 65
      },
      {
        technology: "Visual Paradigm",
        percentage: 60
      },
      {
        technology: "AWS",
        percentage: 50
      },
      {
        technology: "Digital Ocean",
        percentage: 70
      },
      {
        technology: "Git",
        percentage: 90
      }
    ],
    projects: [
      {
        title: "STEARS ELECTION CENTER",
        image: "/my-portfolio/img/projects/stears.png",
        description:
          "A platform that gives insight into the Nigeria Elections conducted by the Independent National Electoral Commission of Nigeria.",
        link: "https://nigeriaelections.stearsng.com"
      },
      {
        title: "FOODLOCKER",
        image: "/my-portfolio/img/projects/foodlocker.png",
        description:
          "AN E-commerce web application with an Inventory management system an POS for a Food Mart.",
        link: "https://www.foodlocker.com.ng"
      },
      {
        title: "UNIVERSITY DSS (PROTOTYPE)",
        image: "/my-portfolio/img/projects/dsssapa.png",
        description:
          "A decission support system for student academics performace analytics that processes academic result and predicts academic performance.",
        link: "https://dsssapa.herokuapp.com"
      },
      {
        title: "FOLIO NEWS (PROTOTYPE)",
        image: "/my-portfolio/img/projects/folio.png",
        description:
          "A platform that keeps you updates with the latest news around with video content and advertisement.",
        link: "http://folio.techbrarysolutions.com"
      }
    ],
    work_process: ["IDEA", "PLANNING", "DESIGN", "DEVELOP", "TEST", "LAUNCH"],
    social_media: {
      facebook: "https://web.facebook.com/ThaGuyNextDoor",
      twitter: "https://twitter.com/ThaGuyNextDoor",
      linkedin: "https://www.linkedin.com/in/michael-ezeokoye-05aa1b145/",
      github: "https://github.com/Jaymykels"
    }
  }
});
