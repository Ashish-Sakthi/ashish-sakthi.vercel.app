import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";
import { getProject } from "../data/portfolio";
import useReveal from "../hooks/useReveal";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = getProject(projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  useReveal([projectId]);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center pt-24">
        <div>
          <h1 className="font-display text-3xl font-bold text-white">
            Project not found
          </h1>
          <Link to="/" className="btn-primary mt-6">
            <FaArrowLeft size={14} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="font-body min-h-screen pt-28 pb-20">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-16">
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="reveal inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sky-300 transition-colors mb-8"
        >
          <FaArrowLeft size={13} /> Back to projects
        </Link>

        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
          <span className="grid place-items-center w-14 h-14 rounded-2xl glass text-sky-300 shrink-0">
            <Icon size={26} />
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {project.title}
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
          {/* Video */}
          <div className="reveal card-glow rounded-2xl overflow-hidden aspect-video self-start">
            <iframe
              className="w-full h-full"
              src={project.videoUrl}
              title={`${project.title} video`}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2 className="section-eyebrow mb-3">// Tech Stack</h2>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.technologies.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <h2 className="section-eyebrow mb-3">// Overview</h2>
            <p className="text-gray-300/90 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>

        {/* Challenges / Learnings */}
        <div className="mt-12 grid md:grid-cols-2 gap-7">
          <div className="reveal card-glow rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400">
                <FaExclamationTriangle size={16} />
              </span>
              <h2 className="font-display text-xl font-semibold text-white">
                Challenges
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card-glow rounded-2xl p-7" style={{ transitionDelay: "80ms" }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-blue-500/10 text-sky-300">
                <FaLightbulb size={16} />
              </span>
              <h2 className="font-display text-xl font-semibold text-white">
                Learnings
              </h2>
            </div>
            <ul className="space-y-3">
              {project.learnings.map((l, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <FaCheckCircle className="text-blue-400 mt-0.5 shrink-0" size={14} />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
