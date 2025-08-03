import React from "react";
import safety_check from "./Ford_Assets/safety_check.jpg"
import { CodeIcon } from "@heroicons/react/solid"; 
import { DotsHorizontalIcon } from "@heroicons/react/solid"; 
import acc_updating from "./Ford_Assets/acc_updating.mp4"
import stat_update from "./Ford_Assets/quad_statistics_updating.mp4"
import lift_sim from "./Ford_Assets/hmi_elevator_sim.mp4"
import classify from "./Ford_Assets/cognex_classify.mp4"
import read from "./Ford_Assets/cognex_read.mp4"

export default function Ford () {
    return(
        <section id="nucor" className="text-gray-400 bg-black">
            <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
                <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4 text-blue-700">
                    Ford Motor Company: Battery Manufacturing Internship (Controls Team)
                </h1>
                <ul className=" my-8 text-white list-none">
                     <li> <span className="font-bold" > Location:</span> BlueOval SK Battery Park, Glendale, KY </li>
                    <li> <span className="font-bold" > Duration:</span> May 2024 — August 2024 </li>
                </ul>
                <div className="flex flex-col my-8 md:flex-row items-center md:items-start gap-6 my-4">
                    <img 
                        className="w-full md:w-2/5 rounded-lg border-2 border-blue-700"
                        alt="Demo of Medsnake accessing the snake" 
                        src={safety_check}
                    />
                    
                    <div className="text-white text-lg md:w-3/5">
                        <h3 className=" my-8 text-xl font-semibold mb-2 text-blue-700">Role Description</h3>
                        <p>
                        Assisted the onsite Ford Manufacturing Controls Engineering Team with project management tasks, for the launch of the BlueOvalSK EV Battery Plant. This gigafactory was owned by BlueOvalSK (Also known as BOSK), a joint venture 
                        between Ford and SK Group. Daily responsibilites include inspections of plant machines 
                        imported over from Korea, for functionality and safety verification. For example, on-site testing of the safety software of industrial robots to verify they met Ford safety standards.
                        It also included communication with cross-functional contractors to ensure that they fulfilled with their contractual responsibilities and were updated 
                        on any changes to the project scope. For example, checking daily with an electrical contractor to ensure that they are meeting their daily quota for hooking up a set amount of machines to an ethernet network.
                        </p>
                    </div>
                
                </div>
            <CodeIcon className="mx-auto w-10" />
            <h1 className= "mt-8 text-3xl text-center text-blue-700 font-bold my-8">
                Technical Accomplishments and Contributions
            </h1>
            <video className="my-2 max-w-full rounded-lg border-2 border-blue-700" controls>
                <source 
                    src={lift_sim} 
                    type="video/mp4"                    
                />
            </video>
            <p className = "text-white text-lg mb-8">
                <span className="font-bold text-blue-700" > Mitsubishi PLC Elevator Simulation: </span> <br />
                Programmed the ladder logic of this lift simulation in Mitsubishi GX Works, and created the interactive interface in Mitsubishi GT Designer. This project was completed as part 
                of training to become familiar with the the PLCs in the plant, which were almost all Mitsubishi.
            </p>
            <DotsHorizontalIcon className="mx-auto w-10 my-10" />
            <div className="flex flex-col md:flex-row gap-4">
                <video className="w-full md:w-1/2 rounded-lg border-2 border-blue-700" controls>
                    <source 
                        src={classify} 
                        type="video/mp4"                    
                    />
                </video>
                
                <video className="w-full md:w-1/2 rounded-lg border-2 border-blue-700" controls>
                    <source 
                        src={read} 
                        type="video/mp4"                    
                    />
                </video>
            </div>
            <p className="text-white text-lg">
                <span className="font-bold text-blue-700" > Cognex Vision Cameras Reading and Classification Demo: </span> <br />
                Utilized the Cognex ViDi EL Read and ViDi EL Classify tools, which incorporate the edge learning AI method, to read characters on the right video, and classify flavors on the left video, when 
                given input images in greyscale. This project was completed as part of training to learn how to use the Cognex cameras in the plant.
            </p>
            <DotsHorizontalIcon className="mx-auto w-10 my-10" />
            <video className="my-2 max-w-full rounded-lg border-2 border-blue-700" controls>
                <source 
                    src={acc_updating} 
                    type="video/mp4"                    
                />
            </video>
            <video className="my-2 max-w-full rounded-lg border-2 border-blue-700" controls>
                <source 
                    src={stat_update} 
                    type="video/mp4"                    
                />
            </video>
            <p className = "text-white text-lg">
                <span className="font-bold text-blue-700" > Excel Spreadsheet Automated Updating </span> <br />
                As mentioned in the role description, an important task was to track the progress of machines being connected to an ethernet network on a spreadsheet.
                The first video shows a detailed spreadsheet, and the second video shows a spreadsheet that contains a quick summarization with numbers. 
                Wrote two Excel macros for both spreadsheets, 
                that performs this updating process just by running the macro. Notice how in the first video, tedious row deletions and row insertions are automatically handled.
            </p>
            </div>
        </section>
    );
};