import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

// Import project images (keeping for fallback)
import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img_asd.jpg";
import img_rpg from "../assets/img_rpg.jpg";

const projectDetails = {
  img_rpg: {
    title: "Top-Down RPG with Gameplay Ability System",
    icon: FaDesktop,
    image: img_rpg,
    videoUrl:
      "https://www.youtube.com/embed/videoseries?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD", // Updated to embed playlist
    technologies: [
      "Unreal Engine",
      "C++",
      "Gameplay Ability System",
      "Blueprints",
      "AI",
    ],
    description:
      "Created innovative gameplay systems leveraging advanced physics simulations and interactions.",
    fullDescription: `
      The Physics-Based Gameplay Mechanics project explores advanced physics interactions to create unique and engaging gameplay experiences.
      Developed in Godot, the project demonstrates sophisticated use of physics engines in game design.

      Key Features:
      - Complex object interaction systems
      - Dynamic environmental physics
      - Realistic material and collision responses
      - Innovative gameplay mechanics driven by physics
    `,
    challenges: [
      "Creating realistic and predictable physics interactions",
      "Balancing gameplay mechanics with physical accuracy",
      "Optimizing performance of complex physics simulations",
    ],
    learnings: [
      "Advanced physics engine integration",
      "Gameplay design through physics",
      "Performance optimization techniques",
    ],
  },
  img1: {
    title: "Third Person Shooter",
    icon: FaDesktop,
    image: img1,
    videoUrl:
      "https://www.youtube.com/embed/pj6ksFlDoEA?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD", // Correct YouTube embed URL
    technologies: ["Unreal Engine", "C++"],
    description:
      "Created innovative gameplay systems leveraging advanced physics simulations and interactions.",
    fullDescription: `
      This was a hands-on project to implement enemy AI behavior in Unreal Engine 5 using C++ only—no Blueprints. I created a full Behavior Tree system where the AI detects, chases, and shoots the player, investigates last known positions, and returns to patrol if the target is lost. All behavior logic was written from scratch using custom task nodes, services, and an AI controller in C++ to get a deeper grasp of Unreal’s AI architecture.


 
    `,
    challenges: [
      "Understanding the flow between the Behavior Tree, Blackboard, and AIController",

      "Setting up sight detection manually in C++ using perception and gameplay tags",
      "Debugging AI logic without visual Blueprint cues",
      "Managing timing and looping behavior like delayed shooting in C++",
      "Ensuring smooth transitions between states like chasing → losing sight → investigating",
    ],
    learnings: [
      "Solidified knowledge of Unreal’s AI Behavior Tree system and Blackboard usage",
      "Gained confidence in building modular gameplay systems using C++",
      "Understood how AIController, Pawn sensing, and services/tasks interact",
      "Learned best practices for managing AI state transitions and task flow in C++",
      "Improved debugging and problem-solving skills within complex logic trees",
    ],
  },
  img2: {
    title: "Obstacle Overrun",
    icon: FaCode,
    image: img2,
    videoUrl:
      "https://www.youtube.com/embed/P9FuPjpQez0?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD", // Correct YouTube embed URL
    technologies: ["Unreal Engine", "C++"],
    description:
      "Developed a flexible AI decision-making framework for complex NPC interactions and game logic.",
    fullDescription: `
      Obstacle Assault is a fast-paced, single-player platformer game inspired by the chaos and excitement of Fall Guys. Built entirely in Unreal Engine 5 using C++, the game challenges players to navigate a dynamic course filled with moving platforms, rotating obstacles, timed traps, and precision jumps. Each level is designed to test reflexes, timing, and spatial awareness, with responsive controls and tight gameplay loops that encourage mastery and replayability.


     
    `,
    challenges: [
      "Implementing precise player movement using Unreal C++ without Blueprints",

      "Syncing moving platforms, rotating obstacles, and traps with accurate timing",

      "Handling collision edge cases for fast-moving objects",

      "Creating smooth level progression and polished camera transitions",

      "Structuring clean, modular, and optimized Unreal C++ code",
    ],
    learnings: [
      "Strong foundation in Unreal C++ and gameplay class architecture",
      "Built responsive gameplay mechanics like timed traps and obstacle behavior",
      "Improved skills in level design, pacing, and player experience",
      "Gained experience in debugging and testing C++-driven systems",
      "Learned performance-conscious coding practices in a real-time game environment",
    ],
  },
  img3: {
    title: "Tank Shooter",
    icon: FaUnity,
    image: img3,
    videoUrl: "https://www.youtube.com/embed/SPogCMJ0Pag?si=hOVAny3mqpavIfou", // Updated with actual project video
    technologies: ["Unreal Engine", "C++"],
    description:
      "Toon Tanks is a stylized top-down arcade shooter built using Unreal Engine 5 and C++. The player controls a cartoon-style tank that must eliminate waves of enemy turrets within a level. Each turret has its own health, firing behavior, and rotation logic, creating a fun and reactive battlefield. With its vibrant art style and action-packed gameplay, Toon Tanks is a great introduction to core Unreal gameplay programming concepts.",
    fullDescription: `
      Toon Tanks is a stylized top-down arcade shooter built using Unreal Engine 5 and C++. The player controls a cartoon-style tank that must eliminate waves of enemy turrets within a level. Each turret has its own health, firing behavior, and rotation logic, creating a fun and reactive battlefield. With its vibrant art style and action-packed gameplay, Toon Tanks is a great introduction to core Unreal gameplay programming concepts.
    `,
    challenges: [
      "Creating a modular pawn system for player and turret tanks",
      "Implementing turret AI logic using timers and player tracking",
      "Managing projectile spawning and collision events in C++",
      "Handling win/lose game states and level flow",
      "Structuring clean code for reusability and scalability",
    ],
    learnings: [
      "Modular Pawn and Component Design: Architected reusable pawn classes for both player and AI-controlled tanks, promoting code reuse and scalability.",
      "AI Programming with Timers and Targeting: Implemented turret AI logic using timers for firing and player tracking, deepening understanding of Unreal’s actor/component system.",
      "Projectile and Collision Handling: Developed robust systems for spawning, moving, and detecting collisions with projectiles, including damage application and destruction events.",
      "Game State and Flow Management: Managed win/lose conditions, level transitions, and game start logic using Unreal’s GameMode and GameState classes.",
      "Blueprint/C++ Integration: Practiced integrating C++ logic with Blueprint for rapid iteration and designer-friendly workflows.",
    ],
  },
  // img4: {
  //   title: "Interactive Skill Enhancer For Children With ASD and ID",
  //   icon: FaGamepad,
  //   image: img4,
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual project video
  //   technologies: ["Unity", "AR/VR"],
  //   description:
  //     "An advanced terrain generation system with dynamic biome creation and realistic landscape rendering.",
  //   fullDescription: `
  //     The Procedural World Generator is a cutting-edge terrain generation system developed in Unity, showcasing advanced procedural generation techniques.
  //     The project leverages sophisticated algorithms to create dynamic, realistic landscapes with unique biome distributions.

  //     Key Features:
  //     - Dynamic terrain generation using Perlin noise and fractal algorithms
  //     - Realistic biome creation with smooth transitions
  //     - Adaptive terrain detail based on player proximity
  //     - Optimized rendering techniques for large-scale landscapes
  //   `,
  //   challenges: [
  //     "Implementing efficient noise generation algorithms",
  //     "Creating natural-looking terrain transitions",
  //     "Optimizing performance for large-scale worlds",
  //   ],
  //   learnings: [
  //     "Advanced procedural generation techniques",
  //     "Noise algorithm implementation",
  //     "Terrain rendering optimization",
  //   ],
  // },
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
      {/* Project Details Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Project Video */}
          <div className="w-full order-1 md:order-none">
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} Video`}
                frameBorder="0"
                allow="autoplay; accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project Information */}
          <div className="order-2 md:order-none px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center mb-8 lg:mb-12">
              <ProjectIcon
                className="text-blue-500 mb-4 sm:mr-6 sm:mb-0"
                size={40}
                md:size={48}
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left">
                {project.title}
              </h1>
            </div>

            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
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

            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
                Description
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center sm:text-left">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>
        {/* Challenges & Learnings Section - Responsive Two Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
              Challenges
            </h2>
            <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
              Learnings
            </h2>
            <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-2">
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
