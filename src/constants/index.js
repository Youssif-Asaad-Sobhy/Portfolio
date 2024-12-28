import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/about4.png";

export const HERO_CONTENT = `I am a passionate software engineer from Egypt, specializing in designing and developing scalable, efficient, and user-focused applications. With expertise in front-end technologies like React and Next.js, and back-end proficiency in .NET Core, SQL Server, and MongoDB, I deliver high-quality solutions. My commitment to continuous learning and innovation drives me to create impactful software that enhances user experiences and meets business objectives.`;

export const ABOUT_TEXT = `As a dedicated software engineer, I have a strong background in developing scalable and efficient applications. My technical expertise includes React, Next.js, .NET Core, SQL Server, and MongoDB. I have demonstrated my problem-solving abilities as a 2x ACPC Finalist, showcasing a competitive edge in algorithmic challenges. My journey in software development began with a curiosity for creating impactful solutions, evolving into a career focused on addressing challenges with innovative approaches. I thrive in collaborative environments and am passionate about crafting high-quality software that makes a difference. Beyond coding, I enjoy exploring emerging technologies, staying active, and engaging in creative projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2023 - Jul 2024",
    role: "Junior Full Stack Developer",
    company: "AlexApps",
    description: `At AlexApps, I contribute to the development and maintenance of web applications using .NET Core and React. My responsibilities include implementing responsive front-end designs, optimizing back-end systems, and integrating RESTful APIs. Collaborating closely with team members, I strive to meet project goals and deliver high-quality software solutions.`,
    technologies: [".NET Core", "React", "Next.js", "SQL Server", "MongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "Medical System",
    image: project1,
    description: "A comprehensive medical system designed to streamline patient management and healthcare operations.",
    technologies: ["ASP.NET Core", "React", "SQL Server"],
  },
  {
    title: "Meeting Management System",
    image: project2,
    description: "A system to efficiently schedule, organize, and manage meetings within an organization.",
    technologies: ["C#", "ASP.NET", "SQL Server"],
  },
  {
    title: "Brain Tumor Detection Using Machine Learning",
    image: project3,
    description: "A machine learning project aimed at detecting brain tumors from medical imaging data.",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
  },
  {
    title: "Autocar with GPS",
    image: project4,
    description: "An Arduino-based automated self-driving car equipped with GPS for navigation.",
    technologies: ["Arduino", "C++", "GPS Module"],
  },
];

export const CONTACT = {
  address: "Qena, Egypt",
  phoneNo: "+201270120879",
  email: "youssifasaadfci@gmail.com",
};
