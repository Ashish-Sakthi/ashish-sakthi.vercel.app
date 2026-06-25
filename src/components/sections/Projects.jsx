import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import useSpotlightTilt from "../../hooks/useSpotlightTilt";

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const tilt = useSpotlightTilt(6);
  return (
    <Link
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      to={`/projects/${project.id}`}
      className="reveal card-glow group relative rounded-2xl overflow-hidden flex flex-col"
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <span className="card-spotlight" />
      <div className="relative h-52 sm:h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent" />
        <span className="absolute top-4 left-4 grid place-items-center w-11 h-11 rounded-xl glass text-sky-300">
          <Icon size={20} />
        </span>
      </div>

      <div className="relative p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[0.7rem] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-300">
          View case study
          <FaArrowRight
            size={12}
            className="transition-transform group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-16">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="section-eyebrow mb-4">// Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Game Programming <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Prototypes exploring combat, AI and systems architecture in Unreal
            Engine. Click any card for the full breakdown.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-7 lg:gap-9 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
