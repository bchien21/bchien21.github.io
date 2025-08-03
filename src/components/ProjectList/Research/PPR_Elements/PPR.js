import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import OperationLogic from "../PPR_Elements/OperationLogic"
import HighLevel from "../PPR_Elements/HighLevel"
import EarlyIdeation from "../PPR_Elements/EarlyIdeation"
import DevelopedIdeation from "../PPR_Elements/DevelopedIdeation"
import EmbeddedDevelopment from "./Embedded/EmbeddedDevelopment"

export default function PPR () {
    return(
        <section id="ppr" className="text-gray-400 bg-black">
            <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
                <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4 text-cyan-400">
                    Arterial Puncture Detection
                </h1>
                <h1 className= "text-lg">
                    Contributing to the prototype of a dual-module system, which automates the process of detecting vessel puncture,
                    then differentiating between veinous/arterial puncture. 
                </h1>
                <ul className=" my-8 text-white list-none">
                    <li> <span className="font-bold" > In association with:</span> Project TRACIR, The Biorobotics Laboratory at Carnegie Mellon University </li>
                    <li> <span className="font-bold" > Project Duration:</span> February 2022 — August 2022 </li>
                    <li> <span className="font-bold" > Skills:</span> SolidWorks, PSoC Creator </li>
                </ul>
                <OperationLogic />  
                <CodeIcon className="mt-8 mx-auto w-10" />
                <HighLevel />  
                <CodeIcon className="mt-8 mx-auto w-10" />
                <EarlyIdeation />
                <CodeIcon className="mt-8 mx-auto w-10" />
                <DevelopedIdeation />
                <CodeIcon className="mt-8 mx-auto w-10" />
                <EmbeddedDevelopment />
            </div>
        </section>
    );
}