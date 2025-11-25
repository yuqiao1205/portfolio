"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getImagePath } from "../utils/getImagePath";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectImageGallery = ({ imgUrls }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {imgUrls.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="aspect-video"
        >
          {imgUrls.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={getImagePath(imgUrl)}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">No Images Available</span>
        </div>
      )}
    </div>
  );
};

export default ProjectImageGallery;
