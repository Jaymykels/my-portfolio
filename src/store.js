import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatar: "https://avatars3.githubusercontent.com/u/14936299?s=460&v=4",
    fullname: "Michael Ezeokoye",
    DOB: "15th May 1993",
    occupation: "Software Engineer",
    years_experience: "5+",
    mobile: "+234 708 038 7486",
    email: "jaymykels69@gmail.com",
    address: "Mobil Road Off Illaje, Ajah Lagos",
    location: "Lagos",
    nationality: "Nigerian",
    resume:
      "https://www.dropbox.com/s/bfqn530eiu49tqn/Michael%20Ezeokoye.pdf?dl=0",
    contract: ["Foodlocker", "FMG", "Stears"],
    skills: [
      "Requirement Analysis",
      "System Architecture",
      "Project Management",
      "Programming",
      "DevOps",
      "Quality Assurance"
    ],
    professional_experience: [
      {
        period: "DEC 2018 - PRESENT",
        company: "INTERSWITCH",
        position: "Software Engineer",
        responsibilities:
          "Worked on design, implementaion and application development, creating user interfaces that reflect the business requirement and satifies the system requirement specification."
      },
      {
        period: "FEBRUARY 2018 - SEPTEMBER 2018",
        company: "CREDIT CLAN",
        position: "Software Engineer",
        responsibilities:
          "Seeing out a project from conception to final product, by developing and designing web applications and ensuring their responsiveness and ability to scale."
      },
      {
        period: "MAY 2016 - JANUARY 2017",
        company: "GLOBAL INFO SWIFT",
        position: "Software Engineer",
        responsibilities:
          "Seeing out a project from conception to final product, by developing and designing web applications and ensuring their responsiveness and ability to scale."
      }
    ],
    education: [
      {
        period: "JULY 2015 - FEBRUARY 2018",
        institution: "UNIVERSITY OF IBADAN",
        degree: "BACHELORS DEGREE",
        summary:
          "Graduated from the department of Computer Science University of Ibadan."
      },
      {
        period: "MAY 2014 - MAY 2015",
        institution: "EDUCATION ADVANCEMENT CENTER (EAC)",
        degree: "CAMBRIDGE A LEVELS CERTIFICATE",
        summary: "Completed the Cambridge A Level examination."
      },
      {
        period: "SEPTEMBER 2006 - SEPTEMBER 2009",
        institution: "SAINT MARYS COLLEGE",
        degree: "SENIOR SECONDARY SCHOOL CERTIFICATE",
        summary:
          "Completed the West African Senior Secondary School O Level Certificate examination."
      }
    ],
    technical_skills: [
      {
        technology: "Laravel",
        percentage: 95
      },
      {
        technology: "Vue",
        percentage: 95
      },
      {
        technology: "Express",
        percentage: 95
      },
      {
        technology: "Ionic",
        percentage: 75
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
        percentage: 50
      },
      {
        technology: "Flask",
        percentage: 75
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
        percentage: 70
      },
      {
        technology: "SQL Server",
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
        technology: "Gitlab",
        percentage: 70
      }
    ],
    projects: [
      {
        title: "STEARS ELECTION CENTER",
        image: "@/assets/images/projects/stears.png",
        description:
          "A platform that gives insight into the Nigeria Elections conducted by the Independent National Electoral Commission of Nigeria.",
        link: "https://nigeriaelections.stearsng.com"
      },
      {
        title: "FOODLOCKER",
        image: "@/assets/images/projects/foodlocker.png",
        description:
          "AN E-commerce web application with an Inventory management system an POS for a Food Mart.",
        link: "https://www.foodlocker.com.ng"
      },
      {
        title: "DECISSION SUPPORT SYSTEM FOR A SCHOOL (PROTOTYPE)",
        image: "@/assets/images/projects/dsssapa.png",
        description:
          "A decission support system for student academics performace analytics that processes academic result and predicts academic performance.",
        link: "https://dsssapa.herokuapp.com"
      },
      {
        title: "FOLIO MEDIA GROUP (PROTOTYPE)",
        image: "@/assets/images/projects/folio.png",
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
