import React, { useRef } from "react";
import { projectsAcademic } from "../../data";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const AcademicLayout = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col text-left relative pt-8">
      {/* Arrow buttons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-white border border-black rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeftIcon className="h-5 w-5 text-black" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-white border border-black rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRightIcon className="h-5 w-5 text-black" />
        </button>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 px-10"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {/* Hide scrollbar for Chrome, Safari, and Opera */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {projectsAcademic.map((project, index) => (
          <div key={index} className="min-w-[300px] flex-shrink-0 p-4">
            <div className="flex flex-col bg-white border-2 border-black h-full rounded-3xl shadow-md">
              <img
                alt="gallery"
                className="mt-4 w-5/6 h-44 object-cover rounded-3xl mx-auto"
                src={project.image}
              />
              <div className="text-center">
                <h1 className="px-6 py-4 text-black font-semibold text-xl">
                  {project.title}
                </h1>
              </div>
              <p className="px-4 text-black">{project.description}</p>
              <div className="flex items-center py-4">
                <Link
                  to={project.route}
                  className="bg-black text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-sm mx-auto"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicLayout;

