import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

// Import project images
import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
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
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 overflow-hidden h-full flex flex-col">
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
              className="text-blue-400 mb-2 sm:mr-4 sm:mb-0"
              size={32}
            />
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center sm:text-left">
              {title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-200 mb-3 md:mb-4 text-center sm:text-left flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-900/50 backdrop-blur-sm text-blue-300 px-2 py-1 rounded-full text-xs md:text-sm border border-blue-400/20"
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
      title: "Top-Down RPG with Gameplay Ability System",
      description:
        "An Unreal Engine 5 RPG prototype built with GAS, featuring attributes, spells, XP, and advanced enemy AI using Behavior Trees and EQS.",
      technologies: [
        "Unreal Engine",
        "C++",
        "GAS",
        "Blueprints",
        "AI",
      ],
      image: img_rpg,
    },
    {
      id: "img1",
      icon: FaDesktop,
      title: "Third Person Shooter",
      description:
        "A C++-only third-person shooter with enemy AI behaviors, including chase, investigate, patrol, and combat using Behavior Trees.",
      technologies: ["Unreal Engine", "C++", "AI"],
      image: img1,
    },
    {
      id: "img2",
      icon: FaCode,
      title: "Obstacle Overrun",
      description:
        "A Fall Guys–inspired obstacle platformer built in Unreal C++, with moving platforms, rotating hazards, and precision-based challenges.",
      technologies: ["Unreal Engine", "C++"],
      image: img2,
    },
    {
      id: "img3",
      icon: FaUnity,
      title: "Toon Tanks",
      description:
        "A stylized top-down tank shooter featuring modular pawn systems, turret AI with timers, projectile combat, and win/lose game flow.",
      technologies: ["Unreal Engine", "C++"],
      image: img3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black font-montserrat text-white flex flex-col">
      {/* Intro Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/10 shadow-[0_0_40px_rgba(0,0,255,0.2)]">
              <img
                src={img}
                alt="Ashish Sakthi"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="flex-grow lg:w-2/3 text-center lg:text-left px-4 sm:px-8 lg:px-12">
            <div className="text-base sm:text-lg lg:text-xl text-gray-200 space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
              <p className="leading-relaxed">
                I’m Ashish Sakthi D, a passionate Gameplay Programmer specializing in Unreal Engine 5 with C++. 
                I love building engaging gameplay mechanics, responsive combat systems, and polished character interactions. 
                My work focuses on blending strong technical foundations with creative design to deliver immersive player experiences.
              </p>
              <p className="leading-relaxed">
                Beyond Unreal, I also explore Unity and AR/VR development, constantly experimenting with mechanics, AI behaviors, and animation workflows. 
                I enjoy problem-solving, tackling technical challenges, and turning ideas into interactive, fun, and high-quality game experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Programming Projects Section */}
      <div className="bg-white/5 backdrop-blur-md border-t border-white/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-12 lg:mb-16">
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
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-blue-400 text-center lg:text-left">
            Hi, I'm Ashish Sakthi D
          </h2>
          <div className="space-y-4 text-gray-200">
            <p className="text-base lg:text-lg leading-relaxed text-center lg:text-left">
              I’m a Gameplay Programmer who thrives on building fun and interactive gameplay systems. 
              My focus lies in Unreal Engine C++ development, creating character mechanics, combat frameworks, 
              and game logic that feel both responsive and polished.
            </p>
            <p className="text-base lg:text-lg leading-relaxed text-center lg:text-left">
              Skilled in Unreal Engine, C++, C#, Unity, and AR/VR development, I aim to design gameplay that balances creativity and technical excellence. 
              Every project is an opportunity to push boundaries and refine my craft in delivering immersive gaming experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
