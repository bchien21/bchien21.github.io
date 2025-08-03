import React from "react";
import pprCurrentTop from "./PPR_Assets/ppr_current_top.png"
import pprCurrentBottom from "./PPR_Assets/ppr_current_bottom.png"
import pprCurrent from "./PPR_Assets/ppr_current_full.png"
import { DotsHorizontalIcon } from "@heroicons/react/solid"; 

const designChanges = [
    {change: "Touchscreen Display Removed (User Interface on a separate PC)."},
    {change: "Microcontroller replaced with a smaller one."},
    {change: "Side clamps removed, replaced with magnets slotted into the walls of the modules."},
]

// const manufacturing = [
//     {method: "3-D Printing."},
//     {method: "Laser-cutting."},
// ]

const DevelopedIdeation  = () => {
    return(
        <div className= "flex flex-col">
            <h1 className= "text-2xl text-white font-bold my-8">
                Computer Aided Design: Developed Ideation
            </h1>
            <img
                className="rounded-lg"
                alt="currentTop"
                src={pprCurrentTop}

            />
            <p className="text-xl font-medium text-cyan-400 my-4 mx-auto">
                Disposable Module: Developed SolidWorks Model
            </p>
            <DotsHorizontalIcon className="my-4 mx-auto w-10" ></DotsHorizontalIcon>
            <img
                className="rounded-lg"
                alt="currentBottom"
                src={pprCurrentBottom}

            />
            <p className="text-xl font-medium text-cyan-400 my-4 mx-auto">
                Reusable Module: Developed SolidWorks Model
            </p>
            <h1 className= "text-xl text-white font-bold my-8">
                Design Changes
            </h1>
            <ol class="list-disc text-white text-md">
                {designChanges.map((changes) =>(
                    <li className="mb-4">{changes.change}</li>
                ))}
            </ol>
            {/* <h1 className= "text-xl text-white font-bold my-8">
                Manufacturing
            </h1>
            <ol class="list-disc text-white text-md">
                {manufacturing.map((methods) =>(
                    <li className="mb-4">{methods.method}</li>
                ))}
            </ol> */}
        </div>

    );

};

export default DevelopedIdeation;