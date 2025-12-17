import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import ProjectImageGallery from "../../components/ProjectImageGallery";
import BackToProjectsLink from "../../components/BackToProjectsLink";
import projectsData from "../../data/projects";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectDetailPage = ({ params }) => {
  const id = parseInt(params.id);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const summaryCopy =
    typeof project.description === "string"
      ? project.description.length > 260
        ? `${project.description.slice(0, 260)}…`
        : project.description
      : "Dive into the build notes, gallery, and supporting documents below to explore the full story behind this project.";

  const techList = project.title
    .split(" - ")
    .slice(1)
    .join(" - ")
    .split(",")
    .map((tech) => tech.replace(/\.$/, "").trim())
    .filter((tech) => tech.length > 0);

  const projectCategory = project.tag.find((tag) => tag !== "All") || project.tag[0] || "Case Study";
  const shotsCount = project.imgUrls?.length || 0;
  const repoAvailable = project.gitUrl && project.gitUrl !== "/";
  const liveUrl = project.previewUrl || project.worksUrl || "";
  const liveLabel = project.previewUrl ? "Live Preview" : project.worksUrl ? "Live Demo" : "Preview";
  const statCards = [
    { label: "Category", value: projectCategory, detail: "Primary focus" },
    { label: "Screens", value: shotsCount ? `${shotsCount}` : "N/A", detail: "Gallery assets" },
    { label: "Stack Depth", value: techList.length ? `${techList.length}+` : "Custom", detail: "Tools parsed" },
    { label: "Status", value: liveUrl ? "Live" : "Case Study", detail: liveUrl ? "Public link" : "Reach out for demo" },
  ];

  const linkItems = [
    repoAvailable ? { label: "GitHub Repository", href: project.gitUrl, icon: CodeBracketIcon } : null,
    liveUrl ? { label: liveLabel, href: liveUrl, icon: EyeIcon } : null,
  ].filter(Boolean);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900/5 dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-cyan-50 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950"></div>
      <div className="absolute -top-24 -right-20 w-80 h-80 bg-cyan-400/30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 -left-16 w-96 h-96 bg-pink-400/25 blur-[160px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-10 py-16 lg:py-24 space-y-12">
        <BackToProjectsLink />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-500">Case Study · {projectCategory}</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-base lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl line-clamp-5">
              {summaryCopy}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tag.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/70 dark:bg-slate-900/60 border border-cyan-200/50 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <EyeIcon className="h-5 w-5" />
                  {liveLabel}
                </a>
              )}
              {repoAvailable && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400 text-cyan-500 px-6 py-4 text-sm font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  View Source
                </a>
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 shadow-xl backdrop-blur-xl p-6 lg:p-8 space-y-6">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Project Snapshot</h2>
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/60 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/40 px-4 py-5">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-500 mt-1">{stat.label}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{stat.detail}</p>
                </div>
              ))}
            </div>
            {linkItems.length > 0 && (
              <div className="space-y-3">
                {linkItems.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-cyan-200/50 dark:border-cyan-500/30 px-4 py-3 text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-10">
          <div className="rounded-[32px] border border-white/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 shadow-xl backdrop-blur-xl p-6 lg:p-10">
            <div className="rounded-[28px] border border-cyan-200/50 dark:border-cyan-500/30 bg-gradient-to-br from-slate-900/10 to-white/40 dark:from-slate-900/70 dark:to-slate-900/40 p-4">
              <ProjectImageGallery imgUrls={project.imgUrls} />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="rounded-[32px] border border-white/60 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 shadow-xl backdrop-blur-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Overview</h2>
              <div className="prose prose-base lg:prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert">
                {project.detailedDescription || (typeof project.description === "string" ? <p>{project.description}</p> : project.description)}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/60 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 shadow-xl backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies & Tools</h3>
                {techList.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {techList.map((tech, index) => (
                      <span
                        key={`${tech}-${index}`}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200 border border-cyan-200/80 dark:border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tech stack details are documented in the overview.
                  </p>
                )}
              </div>

              <div className="rounded-[32px] border border-white/60 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 shadow-xl backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Links</h3>
                {linkItems.length > 0 ? (
                  <div className="space-y-3">
                    {linkItems.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={`${link.label}-sidebar`}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 px-4 py-3 text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:border-cyan-400/70"
                        >
                          <Icon className="h-5 w-5" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Links will be published soon. Reach out for a tailored walkthrough.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
