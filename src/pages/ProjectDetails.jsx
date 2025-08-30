import React from "react";
import { useParams } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img_asd.jpg";
import img_rpg from "../assets/img_rpg.jpg";

const projectDetails = {
  img_rpg: {
    title: "Top-Down RPG with Gameplay Ability System",
    icon: FaDesktop,
    image: img_rpg,
    videoUrl:
      "https://www.youtube.com/embed/videoseries?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    technologies: [
      "Unreal Engine 5",
      "C++",
      "Gameplay Ability System",
      "Blueprints",
      "AI (EQS, Behavior Trees)",
    ],
    description:
      "A scalable RPG framework built with Unreal Engine 5 using GAS, featuring combat, progression, and modular systems.",
    fullDescription: `
      A scalable RPG prototype built in Unreal Engine 5 (C++) using the Gameplay Ability System (GAS).
      The game includes core RPG elements such as attributes, spells, XP/level-ups, and advanced enemy AI with EQS and Behavior Trees.
      Modular UI with HUD elements, spell menus, XP bars, and clean architecture (SOLID principles) makes the system expandable. 
      The project integrates Niagara VFX, real-time combat feedback, and experiments with multiplayer replication for a polished RPG framework.
    `,
    challenges: [
      "Implementing GAS cleanly with attributes and effects",
      "Designing enemy AI with Behavior Trees and EQS",
      "Managing multiplayer replication with async tasks",
      "Integrating VFX, sound notifies, and animation states into combat",
    ],
    learnings: [
      "Strong understanding of GAS framework",
      "AAA-style architecture and SOLID principles in Unreal",
      "UI design with modular HUD systems",
      "VFX and animation-driven combat feedback",
      "Replication and multiplayer considerations in GAS",
    ],
  },
  img1: {
    title: "Third Person Shooter",
    icon: FaDesktop,
    image: img1,
    videoUrl:
      "https://www.youtube.com/embed/pj6ksFlDoEA?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    technologies: ["Unreal Engine 5", "C++", "AI", "Behavior Trees"],
    description:
      "A third-person action shooter featuring responsive combat, AI behaviors, and modular health systems.",
    fullDescription: `
      A third-person shooter prototype built in Unreal Engine 5 entirely with C++.
      Features include responsive character movement, aiming, and shooting mechanics, supported by robust enemy AI.
      AI behavior was implemented using Behavior Trees and Blackboards, with logic for detecting, chasing, shooting, 
      investigating last known positions, and returning to patrol when the target is lost.
    `,
    challenges: [
      "Understanding Behavior Trees, Blackboards, and AIController flow",
      "Manually coding sight detection and perception in C++",
      "Debugging AI logic without Blueprint visuals",
      "Managing transitions between states like chase, shoot, investigate, patrol",
    ],
    learnings: [
      "Solid understanding of Unreal’s AI framework (BT + BB + AIController)",
      "Confidence in building modular gameplay systems with C++",
      "Best practices for AI state transitions",
      "Improved debugging skills in complex C++ AI logic",
    ],
  },
  img2: {
    title: "Obstacle Overrun",
    icon: FaCode,
    image: img2,
    videoUrl:
      "https://www.youtube.com/embed/P9FuPjpQez0?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    technologies: ["Unreal Engine 5", "C++"],
    description:
      "A Fall Guys–style obstacle course platformer with dynamic challenges and precision-based gameplay.",
    fullDescription: `
      Obstacle Overrun is a fast-paced, single-player obstacle course inspired by Fall Guys.
      Built with Unreal Engine 5 in C++, it challenges players to survive moving platforms, rotating hazards, traps, 
      and precision jumps. Each level ramps up difficulty to test reflexes, timing, and strategy while maintaining smooth controls.
    `,
    challenges: [
      "Precise player movement in C++ without Blueprints",
      "Syncing moving platforms, rotating bars, and timed traps",
      "Collision edge cases for fast-moving obstacles",
      "Smooth camera transitions with dynamic levels",
      "Maintaining clean and modular C++ code",
    ],
    learnings: [
      "Unreal C++ class architecture for gameplay",
      "Designing responsive obstacle mechanics",
      "Level pacing and difficulty balance",
      "Debugging and testing gameplay logic in C++",
      "Performance-conscious programming for real-time systems",
    ],
  },
  img3: {
    title: "Toon Tanks",
    icon: FaUnity,
    image: img3,
    videoUrl: "https://www.youtube.com/embed/SPogCMJ0Pag?si=hOVAny3mqpavIfou",
    technologies: ["Unreal Engine 5", "C++"],
    description:
      "A stylized top-down tank shooter featuring player-controlled tanks, turret AI, and projectile combat.",
    fullDescription: `
      Toon Tanks is a stylized arcade shooter built in Unreal Engine 5 with C++. 
      The player controls a cartoon-style tank tasked with eliminating enemy turrets. 
      Each turret features health, auto-firing behavior, and player-tracking logic, creating a reactive battlefield.
      The project focuses on AI, projectiles, modular pawn systems, and win/lose game state flow.
    `,
    challenges: [
      "Creating modular pawn classes for player and turret tanks",
      "AI logic for turrets with timers and player tracking",
      "Projectile spawning, collision, and damage application",
      "Managing win/lose game flow and transitions",
    ],
    learnings: [
      "Reusable pawn and component-based design",
      "Timer-based AI logic and perception",
      "Projectile/collision systems in C++",
      "GameMode and GameState management",
      "Efficient integration of C++ with Blueprint for iteration",
    ],
  },
  img4: {
    title: "Interactive Skill Enhancer for Children with ASD and ID (VR)",
    icon: FaGamepad,
    image: img4,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video
    technologies: ["Unity", "C#", "VR"],
    description:
      "A VR-based assistive tool designed to improve learning and engagement for children with ASD and ID.",
    fullDescription: `
      Built as part of the Smart India Hackathon 2024 (Finalist), this VR project was designed as an assistive tool 
      for children with Autism Spectrum Disorder and Intellectual Disabilities. 
      The application created interactive environments that enhanced communication, motor, and cognitive skills 
      through gamified VR-based activities. 
      The project was recognized for its innovation and potential social impact.
    `,
    challenges: [
      "Designing intuitive VR interactions for children",
      "Ensuring accessibility and engagement in learning activities",
      "Optimizing performance for smooth VR experience",
    ],
    learnings: [
      "Practical VR development in Unity",
      "Designing for accessibility and inclusivity",
      "Cross-functional teamwork in hackathon environment",
    ],
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  const ProjectIcon = project.icon;

  return (
    <div className="min-h-screen bg-black font-montserrat text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Video */}
          <div className="w-full order-1 md:order-none">
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} Video`}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Info */}
          <div className="order-2 md:order-none px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center mb-8 lg:mb-12">
              <ProjectIcon
                className="text-blue-500 mb-4 sm:mr-6 sm:mb-0"
                size={40}
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left">
                {project.title}
              </h1>
            </div>

            {/* Tech */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900 text-blue-300 px-3 py-1.5 rounded-full text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                Description
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Challenges / Learnings */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Challenges
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Learnings
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
