import React from "react";
import { useParams } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

import img1 from "../assets/img_third.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img_asd.jpg";
import img_rpg from "../assets/img_rpg.jpg";

const projectDetails = {
  // same project details as before...
  // (no changes needed except UI)
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
    <div className="min-h-screen bg-animated font-montserrat text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Video */}
          <div className="w-full order-1 md:order-none">
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-video bg-white/10 backdrop-blur-md border border-white/10">
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
                className="text-blue-400 mb-4 sm:mr-6 sm:mb-0"
                size={40}
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {project.title}
              </h1>
            </div>

            {/* Tech */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/40 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-full text-sm md:text-base backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
                Description
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Challenges / Learnings */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
              Challenges
            </h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
              Learnings
            </h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
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
