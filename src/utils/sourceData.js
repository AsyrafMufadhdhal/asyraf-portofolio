export const bioData = {
  name: "Muhammad Asyraf Mufadhdhal",
  role: "Front-end Developer",
  address: "Bukittinggi, Indonesia",
  photo: "assets/pic/profile.png",
  about:
    "I am an Information System graduate from the University of Putra Indonesia YPTK Padang with a strong background in web development. Proficient in HTML, CSS, and JavaScript, plus modern libraries such as React JS and Bootstrap. Experienced in building and maintaining responsive websites. Ready to apply and grow in the professional field of Frontend Development. Good analytical thinking, problem-solving, and teamwork that I develop through my degree",
};

export const contacts = [
  {
    name: "Muhammad Asyraf Mufadhdhal",
    link: "https://linkedin.com/in/asyraf-mufadhdhal/",
    img: "assets/logo/linkedin.svg",
  },
  {
    name: "AsyrafMufadhdhal",
    link: "https://github.com/AsyrafMufadhdhal",
    img: "assets/logo/github.svg",
  },
  {
    name: "asyraf.mufadhdhal@gmail.com",
    link: "mailto:asyraf.mufadhdhal@gmail.com",
    img: "assets/logo/email.svg",
  },
];

export const projects = [
  {
    id: 1,
    name: "SIGAPAR - Sistem Informasi Geografis Area Parkir Resmi Kota Bukittinggi",
    desc: "Web Based Geographic Information System to map and inform the legal parking locations and informations that managed by Department of Transportation of Bukittinggi City ",
    type: "CodeIgniter 4",
    period: "Nov 2022 - Jan 2023",
    tags: ["HTML", "CSS", "PHP", "JavaScript", "CodeIgniter 4", "Bootstrap 5"],
    pics: ["sigapar1.png", "sigapar2.png", "sigapar3.png", "sigapar4.png", "sigapar5.png"],
    link: "https://sigapar.skom.id",
    repo: "https://github.com/AsyrafMufadhdhal",
    details: [
      "Developing a webGIS application to map the legal parking locations of Bukittinggi City with the description of each location",
      "Using CodeIgnoter 4 framework, MySQL as DBMS, Leaflet JS for interactive map library, Jquery and SweetAlert2 ",
      "Analyzed and planned system specifications and workflows using UML such as Use Case Diagram, Activity Diagram, Sequence Diagram and Class Diagram",
      "Implementing responsive web design for a friendly display on mobile view or desktop",
    ],
  },
  {
    id: 2,
    name: "ID CAMP 2023 - React Developer Learning Path (Beginner)",
    desc: "Scholarship program organized by Indosat Ooredoo Hutchison with the aim of producing young Indonesian developers or programmers. Each course of learning path is provided by Dicoding Indonesia ",
    type: "Training",
    period: "Sep 2023 - Okt 2023",
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    pics: ["IDCamp.png", "IDCamp1.png", "IDCamp2.png", "IDCamp3.png"],
    link: "/assets/landing/idcamp.html",
    repo: "https://github.com/AsyrafMufadhdhal",
    details: [
      "Learn several course about Front-end Development",
      "Basic Web Programming : HTML, CSS, Responsive Layout for Website",
      "Basic JavaScript Programming : JavaScript Fundamentals, Data Structure, OOP, Setup Enviroment, JavaScript Testing, Error Handling",
      "Building Front-end Web for Beginner : Browser Object Model and Document Object Model, Event Handling, Web Storage",
      "Building Web Aplication wuth React : React Fundamentals, React UI Component, Stateful Component",
    ],
  },
  {
    id: 3,
    name: "Digital Muslim Prayer Time Display",
    desc: "Interactive digital prayer time display for Masjid or Mushalla with dynamic display of alert for azan and iqomah.",
    type: "React JS",
    period: "Feb 2024",
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap 5"],
    pics: ["PrayerTime1.png", "PrayerTime2.png", "PrayerTime3.png", "PrayerTime4.png", , "PrayerTime5.png"],
    link: "https://prayer-time-display.vercel.app/",
    repo: "https://github.com/AsyrafMufadhdhal/PrayerTimeDisplay.git",
    details: [
      "Developed a web-based Muslim prayer time display for mosques or mushallas using React JS with source data from Public API (https://api.myquran.com/)",
      "Implemented React Hooks such as useState, useEffect, useRef, and useContext to optimize code and application performance",
      "Automatically set a countdown for the next prayer time and displayed dynamically azan notification when the countdown is finished and continued by iqomah countdown information.",
    ],
  },
];
