import React from "react";
import { CodeIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

import earlyIdeation1 from "./AssistiveTechAssets/earlyIdeation1.jpg";
import earlyIdeation2 from "./AssistiveTechAssets/earlyIdeation2.jpg";
import stewartPlatform from "./AssistiveTechAssets/stewartPlatform.gif";
import accelerometer from "./AssistiveTechAssets/accelerometer.jpg";
import universalJoint from "./AssistiveTechAssets/universal_joint.jpg";
import computerModelViews from "./AssistiveTechAssets/computerModelViews.jpg";
import computerModelIsometric from "./AssistiveTechAssets/computerModelIsometric.jpg";
import prototype from "./AssistiveTechAssets/proof-of-concept.png";
import assistiveTechDemo from "./AssistiveTechAssets/assistive_tech_demo.mp4";

const developedIdeation = [
  "Inspiration: Stewart Platform",
  "Rotational Adjustment: Servomotors",
  "Control: Arduino",
  "Vital Components: Universal Joint, Accelerometer, Arduino Bluetooth Module (Allows for remote control from Phone)",
];

export default function AssitiveTech() {
  return (
    <section id="medsnake" className="text-black bg-white">
      <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
        <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4">
          Product Development: Assistive Technology
        </h1>
        <ul className="my-8 list-none">
          <li>
            <span className="font-bold">Course:</span> Engineering Design I: Methods and Skills (Course ID: 24-370)
          </li>
          <li>
            <span className="font-bold">Project Duration:</span> October 2022 — December 2022
          </li>
          <li>
            <span className="font-bold">Skills:</span> SolidWorks, Arduino
          </li>
          <li>
            <span className="font-bold">In Collaboration With:</span>{" "}
            <a className="text-blue-600 underline hover:text-blue-800" target="_blank" href="https://www.linkedin.com/in/christopher-keefe-59960b23a/" rel="noreferrer">
              Christopher Keefe
            </a>
            ,{" "}
            <a className="text-blue-600 underline hover:text-blue-800" target="_blank" href="https://www.linkedin.com/in/mauricio-saavedra-7a2760272/" rel="noreferrer">
              Mauricio Saavedra
            </a>
          </li>
        </ul>

        <h1 className="text-2xl font-bold">Introduction</h1>
        <ul className="my-4 list-none">
          <li>
            <span className="font-bold">Goal:</span> Redesign some everyday appliance to accommodate a disabled population.
          </li>
          <li>
            <span className="font-bold">Chosen Device:</span> Tripod
          </li>
          <li>
            <span className="font-bold">Chosen Disability:</span> Cerebral Palsy.
          </li>
        </ul>

        <CodeIcon className="mt-8 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold mt-6">Early Ideation</h1>

        <div className="flex flex-col md:flex-row gap-6 my-4">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img className="rounded-lg border-2 border-black my-4" alt="InitialTop" src={earlyIdeation1} />
            <p className="text-md font-medium">Early Ideation: Concept 1</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img className="rounded-lg border-2 border-black my-4" alt="InitialBottom" src={earlyIdeation2} />
            <p className="text-md font-medium">Early Ideation: Concept 2</p>
          </div>
        </div>

        <p className="mt-8 text-lg">
          <span className="font-bold">Conceptualization:</span> <br />
          Our prototype wouldn't actually change a tripod; instead, it will act as an attachment to the top of a tripod. Then, the projector will fit on top of the prototype. We envisioned a multi-platform system that imitates a Stewart Platform (shown below), using servomotors to adjust the orientation of a tripod.
        </p>

        <CodeIcon className="mt-8 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold mt-6">Developed Ideation</h1>
        <ol className="list-disc my-8 font-bold text-md ml-6">
          {developedIdeation.map((idea, idx) => (
            <li className="mb-4" key={idx}>{idea}</li>
          ))}
        </ol>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex flex-col items-center md:w-1/3">
            <img className="rounded-lg my-4 border-2 border-black" alt="Stewart Platform" src={stewartPlatform} />
            <p className="text-md font-medium">Stewart Platform</p>
          </div>
          <div className="flex flex-col items-center md:w-1/3">
            <img className="rounded-lg my-4 border-2 border-black" alt="Accelerometer" src={accelerometer} />
            <p className="text-md font-medium">Accelerometer</p>
          </div>
          <div className="flex flex-col items-center md:w-1/3">
            <img className="rounded-lg my-4 border-2 border-black" alt="Universal Joint" src={universalJoint} />
            <p className="text-md font-medium">Universal Joint</p>
          </div>
        </div>

        <p className="text-lg">
          <span className="font-bold">Further Brainstorming:</span> <br />
          We designed around an off-the-shelf universal joint. The joint transmits rotary motion in roll and pitch, while preventing yaw. It is also strong enough to support the weight of any projector. <br />
          Another important component is the accelerometer: When the accelerometer is level to the floor, it will read the acceleration on the z-axis essentially matches gravitational acceleration, while the acceleration on the other two axes are close to zero. From the output, the Arduino will know when to stop the servos from rotating.
        </p>

        <CodeIcon className="mt-8 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold mt-6">Computer Modeling</h1>

        <img className="my-8 rounded-lg border-2 border-black" alt="Model Views" src={computerModelViews} />
        <DotsHorizontalIcon className="mt-8 mx-auto w-10 text-black" />
        <img className="mt-8 rounded-lg border-2 border-black" alt="Isometric View" src={computerModelIsometric} />
        <p className="my-4 font-semibold text-center">SolidWorks Model of Prototype installed on Tripod.</p>

        <CodeIcon className="mt-8 mx-auto w-10 text-black" />
        <h1 className="text-2xl font-bold mt-6">Video Demonstration</h1>
        <video className="my-8 max-w-full rounded-lg border-2 border-black" controls>
          <source src={assistiveTechDemo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
