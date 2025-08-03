import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

import Introduction from "../NucorInternship/Introduction";
import Ideation from "../NucorInternship/Ideation";
import Calculations from "../NucorInternship/Calculations";
import DesignOverview from "../NucorInternship/DesignOverview";

export default function Nucor() {
  return (
    <section id="nucor" className="text-black bg-white">
      <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
        <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4">
          Nucor Steel Indiana: Mechanical Engineering Internship
        </h1>
        <h1 className="text-lg mx-auto text-center">
          Redesigning a pneumatics assembly vital to a steel pickling line at Nucor Steel Indiana's sheet mill.
        </h1>
        <ul className="my-8 list-none text-black">
          <li>
            <span className="font-bold">Company:</span> Nucor Corporation
          </li>
          <li>
            <span className="font-bold">Internship Duration:</span> May 2023 — July 2023 &#40; 10 weeks &#41;
          </li>
          <li>
            <span className="font-bold">Skills:</span> Autodesk Inventor, AutoCAD
          </li>
        </ul>

        <Introduction />
        <CodeIcon className="mx-auto w-10 text-black" />
        <Ideation />
        <CodeIcon className="mx-auto w-10 text-black" />
        <Calculations />
        <CodeIcon className="mx-auto w-10 text-black" />
        <DesignOverview />
      </div>
    </section>
  );
}
