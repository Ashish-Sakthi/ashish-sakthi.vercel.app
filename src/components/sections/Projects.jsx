import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/portfolio";
import { SectionHeader, Tile } from "../ui";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="reveal group panel panel-hover p-2 flex flex-col"
    >
      <div className="relative aspect-[16/9] rounded-[9px] overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-4 pt-5 flex flex-col flex-grow">
        <div className="flex items-start gap-3.5">
          <Tile icon={project.icon} tone={project.tone} small />
          <div className="min-w-0 flex-grow">
            <h3 className="font-semibold leading-snug">{project.title}</h3>
            <p className="mt-1.5 text-sm text-fg-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-fg-3 transition-all group-hover:text-fg group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-14">
      <div className="shell">
        <SectionHeader
          title="Projects"
          subtitle="Prototypes exploring combat, AI and systems architecture in Unreal Engine."
          aside={<span className="kbd">{projects.length} projects</span>}
        />
        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
