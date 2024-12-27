import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a talent for designing and developing scalable, efficient, and user-focused applications. With experience in front-end technologies like React and Next.js, along with back-end expertise in .NET, SQL Server, and MongoDB, I excel at delivering high-quality solutions. My commitment to continuous learning and innovation drives me to create impactful software that enhances user experiences and meets business objectives.`;

export const ABOUT_TEXT = `I am a passionate software engineer with a talent for designing and developing scalable, efficient, and user-focused applications. With expertise in technologies like React, Next.js, .NET, SQL Server, and MongoDB, I have honed my skills through hands-on experience and a commitment to continuous growth. As a 2x ACPC Finalist, I have demonstrated strong problem-solving abilities and a competitive edge in algorithmic challenges. My journey in software development started with a curiosity about creating impactful solutions, and it has grown into a career focused on solving challenges with innovative approaches. I thrive in collaborative environments and enjoy crafting high-quality software that makes a difference. Outside of coding, I enjoy learning about emerging technologies, staying active, and exploring creative projects.`;

export const EXPERIENCES = [
	{
		year: "2023 - Present",
		role: "Junior Full Stack Developer",
		company: "AlexApps",
		description: `Contributed to the development and maintenance of web applications using .NET and React. Implemented responsive front-end designs, optimized backend systems, and integrated RESTful APIs. Collaborated with team members to meet project goals and deliver high-quality software solutions.`,
		technologies: [".NET", "React", "Next.js", "SQL Server", "MongoDB"],
	},
	{
		year: "2021 - 2022",
		role: "Intern - Software Developer",
		company: "South Valley University",
		description: `Assisted in building software applications as part of the academic software development team. Developed and tested modules using .NET and JavaScript, ensuring functionality and user-friendliness.`,
		technologies: [".NET", "JavaScript", "HTML", "CSS"],
	},
];

export const PROJECTS = [
	{
		title: "Task Management System",
		image: project1,
		description:
			"A web-based application to manage tasks and projects, featuring task creation, tracking, and progress reports.",
		technologies: ["React", ".NET", "SQL Server"],
	},
	{
		title: "Portfolio Website",
		image: project2,
		description:
			"A personal portfolio website showcasing my projects, skills, and experience, designed to highlight my technical expertise.",
		technologies: ["React", "CSS", "Bootstrap"],
	},
	{
		title: "Blog Platform",
		image: project3,
		description:
			"A platform for publishing and managing blogs, with features like user authentication, rich text editing, and commenting.",
		technologies: ["React", "Node.js", "MongoDB"],
	},
	{
		title: "Online Learning System",
		image: project4,
		description:
			"An educational platform with features for managing courses, quizzes, and user profiles, aimed at improving online learning experiences.",
		technologies: [".NET", "Angular", "SQL Server"],
	},
];

export const CONTACT = {
	address: "Qena, Egypt",
	phoneNo: "+201270120879",
	email: "youssifasaadfci@gmail.com",
};
