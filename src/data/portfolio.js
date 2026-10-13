// ============================================================
//  PORTFOLIO CONTENT  —  edit everything here in one place.
//  Sections that use placeholder data are marked with  ⚑ EDIT ME
// ============================================================
import {
  Swords,
  Crosshair,
  Zap,
  Target,
  Briefcase,
  Trophy,
  BookOpen,
} from "lucide-react";

import profileImg from "../assets/profile.jpeg";
import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img_rpg from "../assets/img_rpg.jpg";
import world from "../assets/world.jpg";

// ---------- PROFILE ----------
export const profile = {
  name: "Ashish Sakthi D",
  role: "Unreal Engine Gameplay Programmer",
  tagline: "I build modular, AAA-quality gameplay systems in C++.",
  location: "India",
  avatar: profileImg,
  resumeUrl:
    "https://drive.google.com/file/d/1Rmjgnp7EkC3slyOajdKl9RC2DJtNNJaY/view?usp=sharing",
  socials: {
    linkedin: "https://www.linkedin.com/in/iamashishsakthi/",
    github: "https://github.com/Ashish-Sakthi",
    email: "iamashishsakthid@gmail.com",
  },
  bio: [
    "I'm an Unreal Engine specialist who architects scalable, production-ready systems using SOLID principles and decoupled design. I keep complex mechanics — combat, mission frameworks, AI — performant while giving designers accessible iteration paths.",
    "I specialize in the Gameplay Ability System (GAS): custom AttributeSets, Execution Calculations, and optimized multiplayer replication. I love bridging sophisticated C++ engineering with tactical, responsive player experiences.",
  ],
  // Shown in the hero console ("whoami" tab).
  facts: [
    ["Role", "Gameplay Programmer @ Aeos Games"],
    ["Focus", "Combat · Enemy & boss AI · GAS · VFX / SFX"],
    ["Stack", "Unreal Engine 5 · C++ · Blueprints"],
    ["Platforms", "PlayStation 5 · PC"],
  ],
};

// ---------- SKILLS ----------
export const skills = [
  "Unreal Engine 5",
  "C++",
  "Gameplay Ability System",
  "Blueprints",
  "AI (Behavior Trees · EQS)",
  "Multiplayer Replication",
  "Niagara VFX",
  "Unity / C#",
  "SOLID Architecture",
  "Subsystems & Gameplay Tags",
];

// ---------- EXPERIENCE  ⚑ EDIT ME (replace with your real roles) ----------
export const experience = [
  {
    icon: Briefcase,
    tone: "blue",
    role: "Gameplay Programmer",
    company: "Aeos Games",
    period: "Feb 2026 — Present",
    location: "Bangalore",
    description:
      "Building Unleash The Avatar, a visceral soulslike rooted in Indian mythology. I own the core gameplay: combat, enemy & boss systems, VFX and SFX systems that drive the moment-to-moment experience — plus the PlayStation 5 platform work bringing the game to console, all in Unreal Engine 5 / C++.",
    tags: ["Unreal Engine 5", "C++", "Combat", "VFX / SFX", "PS5"],
  },
  {
    icon: Trophy,
    tone: "orange",
    role: "Smart India Hackathon 2024 — Finalist",
    company: "Interactive Skill Enhancer (VR)",
    period: "2024",
    location: "India",
    description:
      "Built a VR assistive tool for children with ASD & ID — gamified environments improving communication, motor and cognitive skills. Recognized for innovation and social impact.",
    tags: ["Unity", "C#", "VR"],
  },
  {
    icon: BookOpen,
    tone: "green",
    role: "Gameplay Systems — Self-Driven Study",
    company: "Personal R&D",
    period: "2022 — Present",
    location: "Remote",
    description:
      "Deep-dived into AAA architecture: replication, modular pawn systems, behavior-tree AI and animation-driven combat feedback across multiple shipped prototypes.",
    tags: ["C++", "Behavior Trees", "Replication"],
  },
];

// ---------- FEATURED GAME / TRAILER ----------
// The commercial title currently in development at Aeos Games.
export const featuredGame = {
  title: "Unleash The Avatar",
  codename: "AEOS GAMES",
  studio: "Aeos Games",
  status: "In Development",
  steamUrl: "https://store.steampowered.com/app/4054220/Unleash_The_Avatar/",
  // YouTube thumbnail of the trailer — swap for a custom key-art image if you have one.
  poster: "https://img.youtube.com/vi/0CTKnEcjESw/maxresdefault.jpg",
  cover: world,
  tagline: "A visceral soulslike, rooted in Indian mythology.",
  trailerUrl: "https://www.youtube.com/embed/0CTKnEcjESw",
  description:
    "Play as Vikram, investigating a mysterious corruption spreading through Vishwapur — a fictional Indian town brought to life with handcrafted environments and cinematic storytelling. Wield godlike abilities against relentless foes, master precision combat, and unlock transformations that reshape how you fight.",
  features: [
    "Flashy, high-octane combat with a customizable playstyle",
    "Chakra weapon shapeshifting and unlockable sword arts",
    "Temporary transformations that unlock new moves & mobility",
    "Challenging, handcrafted boss encounters",
    "Story-rich, cinematic single-player campaign with lore scrolls",
  ],
  // What I personally built on the project.
  contributions: [
    "Core combat system — the foundation of the moment-to-moment gameplay",
    "Enemy & boss systems: AI behaviors, encounters and combat logic",
    "Core gameplay systems tying mechanics together",
    "VFX systems for combat feedback and abilities",
    "SFX systems and audio integration",
    "PlayStation 5 platform work — bringing the game to console",
  ],
  platforms: ["PlayStation 5", "PC (Windows)"],
  tech: ["Unreal Engine 5", "C++", "GAS", "Combat", "VFX", "SFX", "PS5"],
};

// ---------- PROJECTS (also drives the detail page) ----------
export const projects = [
  {
    id: "img_rpg",
    icon: Swords,
    tone: "violet",
    title: "Top-Down RPG with Gameplay Ability System",
    image: img_rpg,
    description:
      "An Unreal Engine 5 RPG prototype built with GAS — attributes, spells, XP, and advanced enemy AI using Behavior Trees and EQS.",
    technologies: ["Unreal Engine", "C++", "GAS", "Blueprints", "AI"],
    videoUrl:
      "https://www.youtube.com/embed/videoseries?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    fullDescription:
      "A scalable RPG prototype built in Unreal Engine 5 (C++) using the Gameplay Ability System (GAS). The game includes core RPG elements such as attributes, spells, XP/level-ups, and advanced enemy AI with EQS and Behavior Trees. Modular UI with HUD elements, spell menus, XP bars, and clean architecture (SOLID principles) makes the system expandable. The project integrates Niagara VFX, real-time combat feedback, and experiments with multiplayer replication for a polished RPG framework.",
    challenges: [
      "Implementing GAS cleanly with attributes and effects",
      "Designing enemy AI with Behavior Trees and EQS",
      "Managing multiplayer replication with async tasks",
      "Integrating VFX, sound notifies, and animation states into combat",
    ],
    learnings: [
      "Strong understanding of the GAS framework",
      "AAA-style architecture and SOLID principles in Unreal",
      "UI design with modular HUD systems",
      "VFX and animation-driven combat feedback",
      "Replication and multiplayer considerations in GAS",
    ],
  },
  {
    id: "img1",
    icon: Crosshair,
    tone: "orange",
    title: "Third Person Shooter",
    image: img1,
    description:
      "A C++-only third-person shooter with enemy AI behaviors — chase, investigate, patrol, and combat using Behavior Trees.",
    technologies: ["Unreal Engine", "C++", "AI"],
    videoUrl:
      "https://www.youtube.com/embed/pj6ksFlDoEA?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    fullDescription:
      "A third-person shooter prototype built in Unreal Engine 5 entirely with C++. Features include responsive character movement, aiming, and shooting mechanics, supported by robust enemy AI. AI behavior was implemented using Behavior Trees and Blackboards, with logic for detecting, chasing, shooting, investigating last known positions, and returning to patrol when the target is lost.",
    challenges: [
      "Understanding Behavior Trees, Blackboards, and AIController flow",
      "Manually coding sight detection and perception in C++",
      "Debugging AI logic without Blueprint visuals",
      "Managing transitions between chase, shoot, investigate and patrol",
    ],
    learnings: [
      "Solid understanding of Unreal's AI framework (BT + BB + AIController)",
      "Confidence building modular gameplay systems with C++",
      "Best practices for AI state transitions",
      "Improved debugging skills in complex C++ AI logic",
    ],
  },
  {
    id: "img2",
    icon: Zap,
    tone: "green",
    title: "Obstacle Overrun",
    image: img2,
    description:
      "A Fall Guys–inspired obstacle platformer built in Unreal C++ — moving platforms, rotating hazards, and precision challenges.",
    technologies: ["Unreal Engine", "C++"],
    videoUrl:
      "https://www.youtube.com/embed/P9FuPjpQez0?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    fullDescription:
      "Obstacle Overrun is a fast-paced, single-player obstacle course inspired by Fall Guys. Built with Unreal Engine 5 in C++, it challenges players to survive moving platforms, rotating hazards, traps, and precision jumps. Each level ramps up difficulty to test reflexes, timing, and strategy while maintaining smooth controls.",
    challenges: [
      "Precise player movement in C++ without Blueprints",
      "Syncing moving platforms, rotating bars, and timed traps",
      "Collision edge cases for fast-moving obstacles",
      "Smooth camera transitions with dynamic levels",
    ],
    learnings: [
      "Unreal C++ class architecture for gameplay",
      "Designing responsive obstacle mechanics",
      "Level pacing and difficulty balance",
      "Performance-conscious programming for real-time systems",
    ],
  },
  {
    id: "img3",
    icon: Target,
    tone: "blue",
    title: "Toon Tanks",
    image: img3,
    description:
      "A stylized top-down tank shooter — modular pawn systems, turret AI with timers, projectile combat, and win/lose flow.",
    technologies: ["Unreal Engine", "C++"],
    videoUrl: "https://www.youtube.com/embed/SPogCMJ0Pag?si=hOVAny3mqpavIfou",
    fullDescription:
      "Toon Tanks is a stylized arcade shooter built in Unreal Engine 5 with C++. The player controls a cartoon-style tank tasked with eliminating enemy turrets. Each turret features health, auto-firing behavior, and player-tracking logic, creating a reactive battlefield. The project focuses on AI, projectiles, modular pawn systems, and win/lose game state flow.",
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
    ],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
