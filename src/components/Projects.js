import React from "react";
import ResearchLayout from "../components/Layouts/ResearchLayout";
import WorkLayout from "../components/Layouts/WorkLayout";
import AcademicLayout from "../components/Layouts/AcademicLayout";

export default function Projects() {
  return (
    <section id="projects" className="text-black bg-white">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Projects
          </h1>
        </div>
        <AcademicLayout /> 
        {/* <ResearchLayout />
        <WorkLayout /> */}
      </div>
    </section>
  );
}
