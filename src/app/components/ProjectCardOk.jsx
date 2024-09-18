import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard = ({
  // imgUrl,
  imgUrls = [],
  title,
  description,
  gitUrl,
  previewUrl,
  worksUrl,
}) => {
  return (
    <div>
      {/* Project Image Section */}
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden ">
        {imgUrls.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="h-full"
          >
            {imgUrls.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full"
                  style={{
                    background: `url(${imgUrl})`,
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
            className="h-full"
            style={{
              background: `url('/defaultImage.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>

      {/* Icons Section - now under the image */}
      <div className="flex justify-center py-4">
        <Link
          href={gitUrl}
          className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </Link>
        {previewUrl ? (
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-14 w-14 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
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
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <h4 className="text-xl font-semibold mb-2">
          <Link href={worksUrl} className="text-sm underline text-pink-400">
            {worksUrl}
          </Link>
        </h4>
        <p className="text-[#94a3b8]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
