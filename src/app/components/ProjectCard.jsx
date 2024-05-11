import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import { CodeBracketIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  worksUrl,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
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

          {/* {previewUrl !== "" ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : (
            <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] group">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          )} */}

          {/* <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
        </div>
      </div>
      <div className="rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className=" text-xl font-semibold mb-2">{title}</h5>
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
