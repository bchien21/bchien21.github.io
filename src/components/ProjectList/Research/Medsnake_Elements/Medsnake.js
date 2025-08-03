import React from "react";
import medsnakeDemo from "./Medsnake_Assets/medsnake_accessing_chest_demo3.png";
import { CodeIcon } from "@heroicons/react/solid";
import poster from "./Medsnake_Assets/BrianChien_BioroboticsLabPosterPresentation.pdf";
import award from "./Medsnake_Assets/motm_award.jpg";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import emdemo from "./Medsnake_Assets/em_demo.mp4";

import CaptionImage from "./CaptionImage";

const Medsnake_Assets = importAll(require.context("./Medsnake_Assets", false, /\.(png|jpg|svg)$/));

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default function Medsnake() {
  return (
    <section id="medsnake" className="text-black bg-white">
      <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
        <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4">
          Robotic Delivery of Engineered Tissue for Treating Aortic Disease
        </h1>
        <ul className="my-8 text-black list-none">
          <li>
            <span className="font-bold">In association with:</span> The Biorobotics Laboratory at Carnegie Mellon University
          </li>
          <li>
            <span className="font-bold">Project Duration:</span> September 2023 — April 2024
          </li>
          <li>
            <span className="font-bold">Skills:</span> ROS, C++, SolidWorks
          </li>
          <li>
            <span className="font-bold">Presented At:</span>{" "}
            <a
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              href="https://www.cmu.edu/uro/MoM/"
              rel="noreferrer"
            >
              Meeting of the Minds Undergraduate Research Symposium
            </a>, 2024
          </li>
        </ul>

        <h1 className="my-2 text-2xl font-bold">Background</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-4">
          <img
            className="w-full md:w-2/5 rounded-lg border-2 border-black"
            alt="Demo of Medsnake accessing the snake"
            src={medsnakeDemo}
          />
          <p className="text-black text-lg md:w-3/5">
            This is an academic year-long research project, conducted on this existing Medical Snake Platform, which is a robot created to perform minimally invasive surgical operations on the heart. A full presentation of this work was made and presented at the Meeting of the Minds CMU Undergraduate Research Symposium, and is shown below to give a detailed overview of the contribution to the existing Medsnake project.
          </p>
        </div>

        <CodeIcon className="mt-8 mb-4 mx-auto w-10 text-black" />
        <h1 className="my-2 text-2xl font-bold">Complete Poster Presentation</h1>
        <div className="w-full h-[800px] overflow-auto border-2 border-black rounded-lg mt-4">
          <iframe
            src={poster}
            width="100%"
            height="100%"
            className="rounded-lg"
            title="Poster Presentation"
          ></iframe>
        </div>

        <DotsHorizontalIcon className="mx-auto w-10 my-4 text-black" />

        <video className="my-2 max-w-full rounded-lg border-2 border-black" controls>
          <source src={emdemo} type="video/mp4" />
        </video>

        <p className="text-black text-lg mb-8">
          <span className="font-bold">
            Electromagnetic Tracking Demo,{" "}
            <a
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              href="https://github.com/biorobotics/ascension_ros/blob/master/src/sensor_poses_listener.cpp/"
              rel="noreferrer"
            >
              Click for Github Link to Code
            </a>
          </span>{" "}
          <br />
          Wrote a ROS node that reads frame transformation data from an off-the-shelf electromagnetic tracking system (NDI 3D Guidance trakSTAR) to know where the tip of the snake is relative to the EM transmitter. <br />
          In the right portion of the video, I am holding a small sensor that induces a signal when it is in an electromagnetic field. The idea is to fix this sensor to the head of the snake, and therefore we are able to know the position and orientation of the snake relative to some world frame (defined as our electromagnetic field transmitter) at all times. We are also able to draw the path the snake goes, using Rviz's marker object. <br />
          In the demo, I trace out some pattern on the notebook to show how the GUI visualization on the left updates in real-time to match the pattern. The big model is the entire model of the robot platform.
        </p>

        <CodeIcon className="mt-8 mb-4 mx-auto w-10 text-black" />
        <h1 className="my-2 text-2xl font-bold">Poster Presentation Award</h1>
        <div className="my-8 border-2 border-black p-4 rounded text-center">
          <img className="w-full rounded" src={award} alt="Poster Presentation Award" />
        </div>
      </div>
    </section>
  );
}
