import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

// Import project images
import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img_asd.jpg";
import img from "../assets/profile.jpeg";
import img_rpg from "../assets/img_rpg.jpg";

function ProjectCard({
  icon: Icon,
  title,
  description,
  technologies,
  image,
  projectId,
}) {
  return (
    <Link to={`/projects/${projectId}`} className="block h-full">
      <div className="bg-gray-900 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden h-full flex flex-col">
        <div className="h-48 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-4 md:p-6 flex-grow flex flex-col">
          <div className="flex flex-col sm:flex-row items-center mb-3 md:mb-4">
            <Icon
              className="text-blue-500 mb-2 sm:mr-4 sm:mb-0"
              size={32}
              md:size={40}
            />
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center sm:text-left">
              {title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 text-center sm:text-left flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function Home() {
  const projects = [
    {
      id: "img_rpg",
      icon: FaGamepad,
      title: "Top-Down RPG with Gameplay Ability System",
      description:
        "Created innovative gameplay systems leveraging advanced physics simulations and interactions.",
      technologies: [
        "Unreal Engine",
        "C++",
        "Gameplay Ability System",
        "Blueprints",
        "AI",
      ],
      image: img_rpg,
    },
    {
      id: "img1",
      icon: FaGamepad,
      title: "Third Person Shooter",
      description:
        "Created innovative gameplay systems leveraging advanced physics simulations and interactions.",
      technologies: ["Unreal Engine", "C++", "AI"],
      image: img1,
    },
    {
      id: "img2",
      icon: FaCode,
      title: "Obstacle Overrun",
      description:
        "Developed a flexible AI decision-making framework for complex NPC interactions and game logic.",
      technologies: ["Unreal Engine", "C++"],
      image: img2,
    },
    {
      id: "img3",
      icon: FaUnity,
      title: "Tank Shooter",
      description:
        "Implemented robust networking and synchronization for a competitive multiplayer game prototype.",
      technologies: ["Unreal Engine", "C++"],
      image: img3,
    },
    // {
    //   id: "img4",
    //   icon: FaDesktop,
    //   title: "Interactive Skill Enhancer For Children With ASD and ID",
    //   description:
    //     "An advanced terrain generation system with dynamic biome creation and realistic landscape rendering.",

    //   technologies: ["Unity", "AR/VR"],
    //   image: img4,
    // },
  ];

  return (
    <div className="min-h-screen bg-black font-montserrat text-white flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl">
              <img
                src={img}
                alt="Ashish Sakthi "
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="flex-grow lg:w-2/3 text-center lg:text-left px-4 sm:px-8 lg:px-12">
            <div className="text-base sm:text-lg lg:text-xl text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Enthusiastic and motivated Game Programmer with expertise in
                Unreal Engine C++ and AR/VR development using Unity. Skilled in
                designing immersive gameplay, implementing collision detection,
                and creating adaptive AI behaviors. Demonstrates strong
                problem-solving abilities and effective team collaboration to
                deliver innovative gaming experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Programming Projects Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-16">
            Game Programming Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                icon={project.icon}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                projectId={project.id}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1a2b4a] text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-blue-400 text-center lg:text-left">
            Hi, I'm Ashish Sakthi D
          </h2>
          <div className="space-y-4">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              I'm Ashish Sakthi D, a passionate Unreal Engine gameplay
              programmer who loves creating engaging, responsive, and immersive
              game experiences. I specialize in Unreal Engine 5 with C++,
              focusing on character mechanics, combat systems, and polished
              animation workflows. Game development isn't just a skill for me,
              it's something I truly enjoy and constantly strive to grow in with
              every project I build.
            </p>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              I describe myself as a problem solver who enjoys tackling
              challenges and constantly refining my skills. I take pride in
              designing interactive environments, adaptive AI behaviors, and
              engaging game mechanics that enhance player experience. My
              expertise includes C++, C#, Unreal Engine, Unity, and AR/VR
              development, along with strong analytical thinking and teamwork.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
