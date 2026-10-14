// ============================================================
//  PORTFOLIO CONTENT — all site copy lives here.
// ============================================================
import profileImg from "../assets/profile.jpeg";
import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img_rpg from "../assets/img_rpg.jpg";

// ---------- PROFILE ----------
export const profile = {
  name: "Ashish Sakthi D",
  role: "Gameplay Programmer",
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
    "I'm a gameplay programmer at Aeos Games in Bangalore. Most of my work is Unreal Engine 5 and C++: the combat system, the enemies and bosses you fight, and the VFX and SFX systems behind every hit.",
    "Before that I taught myself by building prototypes, one system at a time. The Gameplay Ability System, from AttributeSets to Execution Calculations. Behavior Trees and EQS. Replication. The projects further down came out of that.",
  ],
  facts: [
    ["Role", "Gameplay Programmer, Aeos Games"],
    ["Focus", "Combat, enemy and boss AI, VFX and SFX"],
    ["Stack", "Unreal Engine 5, C++, Blueprints, GAS"],
    ["Platforms", "PlayStation 5, PC"],
  ],
};

// ---------- SKILLS ----------
export const skills = [
  "Unreal Engine 5",
  "C++",
  "Blueprints",
  "Gameplay Ability System",
  "Behavior Trees & EQS",
  "Replication",
  "Niagara",
  "Gameplay Tags & Subsystems",
];

// ---------- EXPERIENCE ----------
export const experience = [
  {
    role: "Gameplay Programmer",
    company: "Aeos Games",
    period: "Feb 2026 — Present",
    location: "Bangalore",
    description:
      "I work on Unleash The Avatar, a soulslike set in Indian mythology. I own the combat system, the enemy and boss systems, and the VFX and SFX systems, and I handle the PlayStation 5 platform work. All of it is Unreal Engine 5 and C++.",
    tags: ["Unreal Engine 5", "C++", "Combat", "VFX / SFX", "PS5"],
  },
  {
    role: "Self-taught Gameplay Programming",
    company: "Independent",
    period: "2022 — Present",
    location: "Remote",
    description:
      "Learning how bigger games are put together by building them small: replication, modular pawns, Behavior Tree AI and animation-driven combat feedback, each in its own prototype.",
    tags: ["C++", "Behavior Trees", "Replication"],
  },
];

// ---------- FEATURED GAME ----------
export const featuredGame = {
  title: "Unleash The Avatar",
  studio: "Aeos Games",
  status: "In Development",
  steamUrl: "https://store.steampowered.com/app/4054220/Unleash_The_Avatar/",
  poster: "https://img.youtube.com/vi/0CTKnEcjESw/maxresdefault.jpg",
  trailerUrl: "https://www.youtube.com/embed/0CTKnEcjESw",
  description:
    "You play as Vikram, looking into a corruption spreading through Vishwapur, a fictional Indian town. You fight with godlike abilities, switch the chakra between weapon forms, and transform for short bursts to open up new moves. It's a single-player story game built around handcrafted boss fights.",
  features: [
    "Combat you can shape to your own playstyle",
    "A chakra that shifts between weapon forms, plus sword arts to unlock",
    "Short transformations that add new moves and mobility",
    "Handcrafted boss fights",
    "A single-player story campaign, with lore scrolls to find",
  ],
  // What I built on the project.
  contributions: [
    "The combat system",
    "Enemy and boss AI, encounters and combat logic",
    "Core gameplay systems that connect the mechanics",
    "VFX systems for hits and abilities",
    "SFX systems and audio integration",
    "PlayStation 5 platform work",
  ],
  platforms: ["PlayStation 5", "PC"],
};

// ---------- PROJECTS (also drives the detail pages) ----------
export const projects = [
  {
    id: "img_rpg",
    name: "Top-Down RPG",
    title: "Top-Down RPG with the Gameplay Ability System",
    image: img_rpg,
    description:
      "An action RPG built on the Gameplay Ability System, with spells, attributes, levelling and enemies driven by Behavior Trees and EQS.",
    technologies: ["Unreal Engine", "C++", "GAS", "Blueprints", "AI"],
    videoUrl:
      "https://www.youtube.com/embed/videoseries?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    fullDescription:
      "Built in Unreal Engine 5 and C++ on top of the Gameplay Ability System. It has attributes, spells, XP and levelling, and enemies that use Behavior Trees and EQS. The UI covers the HUD, spell menus and XP bars, abilities use Niagara effects, and I tested multiplayer replication along the way.",
    challenges: [
      "Keeping attributes and effects clean in GAS",
      "Enemy AI with Behavior Trees and EQS",
      "Replicating abilities that use async tasks",
      "Syncing VFX, sound notifies and animation states in combat",
    ],
    learnings: [
      "How GAS fits together, end to end",
      "Structuring a bigger Unreal project so it stays easy to extend",
      "Building modular HUD and menu UI",
      "Using VFX and animation to make combat readable",
      "What GAS needs to work in multiplayer",
    ],
  },
  {
    id: "img1",
    name: "Third Person Shooter",
    title: "Third Person Shooter",
    image: img1,
    description:
      "A shooter written entirely in C++, with enemies that patrol, chase, shoot, and go looking for you when they lose sight of you.",
    technologies: ["Unreal Engine", "C++", "AI"],
    videoUrl:
      "https://www.youtube.com/embed/pj6ksFlDoEA?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    fullDescription:
      "Written entirely in C++. The player can move, aim and shoot. Enemies run on Behavior Trees and Blackboards: they spot you, chase you, shoot, check where they last saw you, and go back to patrolling if they can't find you.",
    challenges: [
      "Learning how Behavior Trees, Blackboards and the AIController work together",
      "Writing sight detection by hand in C++",
      "Debugging AI without Blueprint's visual tools",
      "Clean transitions between chase, shoot, search and patrol",
    ],
    learnings: [
      "Unreal's AI framework: Behavior Trees, Blackboards, AIController",
      "Building gameplay systems in C++ alone",
      "Structuring AI state changes",
      "Debugging complex C++ AI logic",
    ],
  },
  {
    id: "img2",
    name: "Obstacle Overrun",
    title: "Obstacle Overrun",
    image: img2,
    description:
      "A single-player obstacle course inspired by Fall Guys: moving platforms, spinning bars, traps and timed jumps.",
    technologies: ["Unreal Engine", "C++"],
    videoUrl:
      "https://www.youtube.com/embed/P9FuPjpQez0?list=PL0D7ALWu_wVuvPJTzAJynpzBqBVzx5FFD",
    fullDescription:
      "A single-player obstacle course in the spirit of Fall Guys, built in Unreal Engine 5 with C++. You get past moving platforms, rotating hazards, traps and timed jumps, and each level is harder than the last. The focus was tight movement and obstacles that feel fair.",
    challenges: [
      "Precise player movement in C++",
      "Keeping moving platforms, rotating bars and timed traps in sync",
      "Collision edge cases with fast-moving obstacles",
      "Camera transitions between levels",
    ],
    learnings: [
      "Structuring gameplay classes in Unreal C++",
      "Making obstacles readable and fair",
      "Pacing difficulty across levels",
      "Keeping per-frame code cheap",
    ],
  },
  {
    id: "img3",
    name: "Toon Tanks",
    title: "Toon Tanks",
    image: img3,
    description:
      "A top-down tank game: drive, aim, and take out turrets that track you and fire back on a timer.",
    technologies: ["Unreal Engine", "C++"],
    videoUrl: "https://www.youtube.com/embed/SPogCMJ0Pag?si=hOVAny3mqpavIfou",
    fullDescription:
      "An arcade tank game built in Unreal Engine 5 with C++. You drive a tank and destroy enemy turrets. Each turret has health, tracks the player and fires on a timer. Underneath, the tank and turrets share pawn classes, and the game handles projectiles, damage, and the win and lose flow.",
    challenges: [
      "One base pawn class shared by the tank and the turrets",
      "Turret AI with timers and player tracking",
      "Spawning projectiles, handling collision and applying damage",
      "Win and lose conditions, and the transitions between them",
    ],
    learnings: [
      "Component-based, reusable pawn design",
      "Timer-driven AI",
      "Projectile and collision systems in C++",
      "Using GameMode and GameState",
    ],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
