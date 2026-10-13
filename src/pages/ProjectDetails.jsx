import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, projects } from "../data/portfolio";
import useReveal from "../hooks/useReveal";

function NumberedList({ title, items }) {
  return (
    <div className="reveal">
      <h2 className="label mb-3">{title}</h2>
      <ol>
        {items.map((item, i) => (
          <li
            key={item}
            className="grid grid-cols-[2.25rem_1fr] py-3 border-t border-line text-[15px] leading-snug"
          >
            <span className="font-mono text-xs text-fg-3 pt-0.5 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-fg-2">{item}</span>
          </li>
        ))}
      </ol>
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
      <div className="min-h-screen shell flex flex-col justify-center">
        <p className="label">Error 404</p>
        <h1 className="mt-3 text-6xl font-medium tracking-[-0.05em]">Not found.</h1>
        <Link to="/" className="mt-8 label !text-fg">
          ← Back home
        </Link>
      </div>
    );
  }

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-28 sm:pt-36">
      <div className="shell">
        <div className="reveal border-t border-line pt-4 grid grid-cols-12 gap-x-6 label">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="col-span-6 md:col-span-3 !text-fg-2 hover:!text-fg transition-colors"
          >
            ← All work
          </Link>
          <span className="col-span-6 md:col-span-6 text-right md:text-left">
            Case study {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="reveal mt-12 font-medium tracking-[-0.055em] leading-[0.88] text-[clamp(2.75rem,8vw,8rem)] -ml-[0.03em] max-w-[14ch]">
          {project.title}
        </h1>
        <p className="reveal mt-8 label !text-fg-2">
          {project.technologies.join(" / ")}
        </p>

        <div className="reveal mt-12 aspect-video overflow-hidden rounded-[3px] bg-black">
          <iframe
            className="w-full h-full"
            src={project.videoUrl}
            title={`${project.title} video`}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="reveal col-span-12 md:col-span-3">
            <h2 className="label mb-3">Overview</h2>
          </div>
          <p className="reveal col-span-12 md:col-span-9 -mt-10 md:mt-0 text-[clamp(1.25rem,2.2vw,1.9rem)] leading-[1.25] tracking-[-0.02em] text-fg-2">
            {project.fullDescription}
          </p>

          <div className="col-span-12 md:col-start-4 md:col-span-4">
            <NumberedList title="Challenges" items={project.challenges} />
          </div>
          <div className="col-span-12 md:col-span-5">
            <NumberedList title="Learnings" items={project.learnings} />
          </div>
        </div>

        <Link
          to={`/projects/${next.id}`}
          className="reveal group mt-28 sm:mt-40 mb-16 block border-t border-line pt-4"
        >
          <span className="label">Next case study ↗</span>
          <span className="block mt-6 text-[clamp(2.5rem,8vw,8rem)] font-medium tracking-[-0.055em] leading-[0.9] text-fg-3 transition-colors duration-500 group-hover:text-fg">
            {next.name}
          </span>
        </Link>
      </div>
    </article>
  );
}

export default ProjectDetails;
