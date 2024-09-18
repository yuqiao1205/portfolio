import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  imgUrls = [],
  gitUrl,
  previewUrl,
  worksUrl,
}) => {
  return (
    <div className="project-card rounded-lg pr-10 shadow-lg max-w-sm mx-auto">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <div className="swiper-container mb-4 relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              // Smallest mobile devices
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              // iPhone SE, etc.
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              // iPhone 12 and similar
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              // Tablets and larger phones
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              // Laptops and larger devices
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          className="relative"
        >
          {imgUrls.map((url, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={url}
                alt={`${title} image ${index + 1}`}
                className="w-full h-auto object-cover max-h-60 md:max-h-80"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-gray-700 text-sm md:text-base mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {gitUrl && (
          <a
            href={gitUrl}
            className="text-blue-500 hover:underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {previewUrl && (
          <a
            href={previewUrl}
            className="text-blue-500 hover:underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        )}
        {worksUrl && (
          <a
            href={worksUrl}
            className="text-blue-500 hover:underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Works
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
