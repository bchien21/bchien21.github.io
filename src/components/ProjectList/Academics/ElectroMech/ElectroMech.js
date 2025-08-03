import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

import measuresub1 from "./ElectroMechAssets/measuresub1.png";
import outputsub from "./ElectroMechAssets/outputsub.png";
import fullcad from "./ElectroMechAssets/full_cad.png";
import wiring from "./ElectroMechAssets/final_wiring.jpg";
import fullsystem from "./ElectroMechAssets/full_system_assembly_isometric.png";
import finaldemo from "./ElectroMechAssets/electromech_final_demo.mov";

const customerlogics = [
  "A Small Footprint: Under 512 cubic inch in volume",
  "Measurement Accuracy: Accuracy of 0.005 inches",
  "Speed: Runtime of under 10 seconds",
];

const operationLogic = [
  "The user drops a drill bit into the input chute.",
  "A DC motor, utilizing a lead screw, spins to move a PLA-printed component forwards until it contacts the drill bit in the chute",
  "When the DC motor hits the drill bit, the motor will stall, causing the current it draws to rise.",
  "An Arduino microcontroller, using a current sensor to detect this rise in current, will stop the motor.",
  "At the same time, the Arduino calculates the distance the motor moved forwards via a built-in rotary encoder on the motor.",
  "The Arduino commands the motor to retract until the PLA component moves back to its original position. Then, using the data acquired from the rotary encoder, it can calculate the diameter of the drill bit.",
  "The Arduino then sends this value to be displayed by an LCD.",
];

export default function ElectroMech() {
  return (
    <section id="medsnake" className="text-black bg-white">
      <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
        <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4">
          Electromechanical Systems Design: Autonomous Drill Bit Caliper System
        </h1>
        <ul className="my-8 text-black list-none">
          <li>
            <span className="font-bold">Course:</span> Electromechanical Systems Design (Course ID: 24-671)
          </li>
          <li>
            <span className="font-bold">Project Duration:</span> September 2023 — December 2023
          </li>
          <li>
            <span className="font-bold">Technical Skills:</span> Arduino, SolidWorks
          </li>
          <li>
            <span className="font-bold">In Collaboration With:</span>{" "}
            <a className="text-blue-600 underline hover:text-blue-800" target="_blank" href="https://www.linkedin.com/in/yunuo-ella-zhao/" rel="noreferrer">
              Yunuo Zhao
            </a>
            ,{" "}
            <a className="text-blue-600 underline hover:text-blue-800" target="_blank" href="https://www.linkedin.com/in/mlovalek/" rel="noreferrer">
              Mihir Lovalekar
            </a>
          </li>
        </ul>

        <h1 className="text-2xl font-bold">Introduction</h1>
        <p className="mt-8 text-lg">
          <span className="font-bold">Problem Statement:</span> <br />
          Our team proposes the design of a device that assists with the categorization of drill bits by automating the drill bit measurement process. <br />
          The need for a device was discovered through a process of interviews and surveys with managers of workshops and makerspaces at Carnegie Mellon University, such as Techspark. The disorganization of drill bits is a large problem they face.
        </p>

        <p className="mt-8 text-lg font-bold">Customer logics:</p>
        <ol className="list-disc my-2 text-black text-md ml-5">
          {customerlogics.map((logic, idx) => (
            <li className="mb-4" key={idx}>{logic}</li>
          ))}
        </ol>

        <CodeIcon className="mt-4 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold mt-4">Conceptualization</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 my-8">
          <div className="flex-1">
            <div className="border-2 border-black rounded overflow-hidden">
              <img className="w-full" src={measuresub1} alt="Measurement Subsystem" />
            </div>
            <div className="p-2 text-center font-bold">Measurement Subsystem: View with Motor</div>
          </div>
          <div className="flex-1">
            <div className="border-2 border-black rounded overflow-hidden">
              <img className="w-full" src={outputsub} alt="Output Subsystem" />
            </div>
            <div className="p-2 text-center font-bold">Measurement Subsystem: View with Output Holder and Servo Motor</div>
          </div>
        </div>

        <p className="mt-8 text-lg font-bold">Device Operation Logic:</p>
        <ol className="list-disc my-2 text-black text-md ml-5">
          {operationLogic.map((logic, idx) => (
            <li className="mb-4" key={idx}>{logic}</li>
          ))}
        </ol>

        <CodeIcon className="my-4 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold">Finalized CAD Model and Wiring Diagram</h1>

        <div className="my-8 border-2 border-black p-4 rounded text-center">
          <img className="w-full rounded" src={fullcad} alt="CAD Model" />
          <p className="mt-4 text-lg font-bold">Finalized SolidWorks Rendering of System</p>
        </div>

        <DotsHorizontalIcon className="mt-4 mx-auto w-10 text-black" />
        <div className="my-8 border-2 border-black p-4 rounded text-center">
          <img className="w-full rounded" src={wiring} alt="Wiring Diagram" />
          <p className="mt-4 text-lg font-bold">Finalized Wiring Diagram of System</p>
        </div>

        <CodeIcon className="my-4 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold">Physical Prototype</h1>
        <div className="flex-1 my-8">
          <div className="border-2 border-black rounded overflow-hidden">
            <img className="w-full" src={fullsystem} alt="Physical Prototype" />
          </div>
          <div className="p-2 text-center font-bold">Physical Prototype, shown in CMU's Design Expo at Techspark</div>
        </div>

        <DotsHorizontalIcon className="mt-2 mx-auto w-10 text-black" />
        <video className="mt-8 max-w-full rounded-lg border-2 border-black" controls>
          <source src={finaldemo} type="video/mp4" />
        </video>
        <div className="p-2 text-center font-bold">Video Demonstration</div>
      </div>
    </section>
  );
}
