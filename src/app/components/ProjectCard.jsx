import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getImagePath } from "../utils/basePath";

const ProjectCard = ({
  id,
  imgUrls = [],
  title,
  description,
  gitUrl,
  previewUrl,
  worksUrl,
}) => {
  const hasRepo = gitUrl && gitUrl !== "/";
  const liveHref = worksUrl || previewUrl || "";
  const previewCopy = description;

  return (
    <div className="group relative flex h-full flex-col rounded-[28px] border border-white/50 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/40 shadow-xl shadow-cyan-500/5 dark:shadow-black/40 overflow-hidden backdrop-blur-lg transition-all duration-300 hover:-translate-y-1">
      <Link href={`/projects/${id}`} className="relative block h-56 overflow-hidden">
        {imgUrls.length > 0 ? (
          <img
            src={getImagePath(imgUrls[0])}
            alt={`${title} image`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-slate-300">
            Preview coming soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/5 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] rounded-full bg-white/20 text-white backdrop-blur-md">
            Case Study
          </span>
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] rounded-full bg-black/30 text-white backdrop-blur-md">
            {imgUrls.length || 0} Shots
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-500">Featured Build</p>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-1 leading-tight line-clamp-2">{title}</h3>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{previewCopy}</div>

        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          <span>{hasRepo ? "Open Source" : "Private Repo"}</span>
          <span>{liveHref ? "Live Experience" : "Case Study Only"}</span>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Link
            href={`/projects/${id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          >
            View Details
          </Link>

          <div className="flex flex-1 gap-3">
            <button
              type="button"
              disabled={!hasRepo}
              onClick={() => {
                if (hasRepo) window.open(gitUrl, "_blank", "noopener,noreferrer");
              }}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition-all ${
                hasRepo
                  ? "border-cyan-400 text-cyan-500 hover:bg-cyan-500/10"
                  : "border-slate-300 text-slate-400 cursor-not-allowed"
              }`}
            >
              <CodeBracketIcon className="h-5 w-5" />
              Code
            </button>
            <button
              type="button"
              disabled={!liveHref}
              onClick={() => {
                if (liveHref) window.open(liveHref, "_blank", "noopener,noreferrer");
              }}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition-all ${
                liveHref
                  ? "border-emerald-400 text-emerald-500 hover:bg-emerald-500/10"
                  : "border-slate-300 text-slate-400 cursor-not-allowed"
              }`}
            >
              <EyeIcon className="h-5 w-5" />
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
