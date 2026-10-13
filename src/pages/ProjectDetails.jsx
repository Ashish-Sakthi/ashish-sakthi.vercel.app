import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, TriangleAlert, Lightbulb } from "lucide-react";
import { getProject, projects } from "../data/portfolio";
import { Tile } from "../components/ui";
import useReveal from "../hooks/useReveal";

function ListPanel({ icon, tone, title, items }) {
  return (
    <div className="reveal panel p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <Tile icon={icon} tone={tone} small />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <ul className="mt-4 divide-y divide-line">
        {items.map((item, i) => (
          <li key={item} className="flex gap-4 py-3 text-sm">
            <span className="font-mono text-fg-3 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-fg-2">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectDetails() {
  const { projectId } = useParams();
  const project = getProject(projectId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [projectId]);

  useReveal([projectId]);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Link to="/" className="btn btn-light mt-6">
            <ArrowLeft size={15} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="shell">
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="reveal inline-flex items-center gap-2 text-sm font-medium text-fg-2 hover:text-fg transition-colors"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <div className="reveal mt-6 flex items-start gap-4">
          <Tile icon={project.icon} tone={project.tone} />
          <div>
            <h1 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              {project.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal panel p-2 mt-8">
          <div className="aspect-video rounded-[9px] overflow-hidden bg-black">
            <iframe
              className="w-full h-full"
              src={project.videoUrl}
              title={`${project.title} video`}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="reveal panel p-6 sm:p-8 mt-3">
          <h2 className="kbd uppercase tracking-wider">Overview</h2>
          <p className="mt-3 text-fg-2 leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>
        </div>

        <div className="mt-3 grid md:grid-cols-2 gap-3">
          <ListPanel
            icon={TriangleAlert}
            tone="orange"
            title="Challenges"
            items={project.challenges}
          />
          <ListPanel
            icon={Lightbulb}
            tone="green"
            title="Learnings"
            items={project.learnings}
          />
        </div>

        <Link
          to={`/projects/${next.id}`}
          className="reveal group panel panel-hover mt-3 p-4 flex items-center gap-4"
        >
          <Tile icon={next.icon} tone={next.tone} small />
          <span className="min-w-0 flex-grow">
            <span className="block kbd">Next project</span>
            <span className="block font-semibold truncate">{next.title}</span>
          </span>
          <ArrowRight
            size={17}
            className="text-fg-3 group-hover:text-fg group-hover:translate-x-0.5 transition-all"
          />
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;
