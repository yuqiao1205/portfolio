import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard = ({
  imgUrls = [],
  title,
  description,
  gitUrl,
  previewUrl,
  worksUrl,
}) => {
  return (
    <div className="max-w-sm mx-auto group">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        {/* Project Image Section */}
        <div className="relative overflow-hidden h-52 md:h-72">
          {imgUrls.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
            >
              {imgUrls.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${imgUrl})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <span className="text-slate-400">No Image</span>
            </div>
          )}

          {/* Overlay with icons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={gitUrl}
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-200"
            >
              <CodeBracketIcon className="h-5 w-5 text-cyan-400" />
            </Link>
            {previewUrl ? (
              <Link
                href={previewUrl}
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-200"
              >
                <EyeIcon className="h-5 w-5 text-cyan-400" />
              </Link>
            ) : (
              <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-slate-500/30">
                <span className="text-xs text-slate-400">Soon</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Details Section */}
        <div className="p-6">
          <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{title}</h5>
          {worksUrl && (
            <Link href={worksUrl} className="text-sm text-cyan-400 hover:text-cyan-300 underline mb-3 block">
              View Live Demo
            </Link>
          )}
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
