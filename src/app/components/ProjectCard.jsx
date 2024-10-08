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
    <div className="max-w-sm mx-auto">
      {/* Project Image Section */}
      <div className="relative overflow-hidden h-52 md:h-72 pr-14">
        {imgUrls.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            className="h-full"
          >
            {imgUrls.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/defaultImage.jpg')`,
              //   height: "300px", // Set a fixed height for default image on larger screens
            }}
          ></div>
        )}
      </div>

      {/* Icons Section */}
      <div className="flex justify-center items-center py-2 pr-10">
        <Link
          href={gitUrl}
          className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </Link>
        {previewUrl ? (
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        ) : (
          <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] group">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] text-sm">
              Soon
            </span>
          </div>
        )}
      </div>

      {/* Project Details Section */}
      <div className="rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
        <h4 className="text-lg md:text-xl font-semibold mb-2">
          <Link href={worksUrl} className="text-sm underline text-pink-400">
            {worksUrl}
          </Link>
        </h4>
        <p className="text-sm md:text-base text-[#94a3b8]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
