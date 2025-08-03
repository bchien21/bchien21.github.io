import React from "react";
import importAll from "./importAll";
import ComponentFeature from "./ComponentFeature";
import assem_demo from "./NSIN_CAD_Assets/assem_demo.mp4";
import BeforeAfterGraphic from "./BeforeAfterGraphic";
import completed_assem from "./NSIN_CAD_Assets/completed-assembly.png";
import SupportPlate from "./SupportPlate";

import { CodeIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

const CAD_Assets = importAll(require.context('./NSIN_CAD_Assets', false, /\.(png|jpe?g|svg)$/));

const feature1Explanation = [
  { logic: "The groove at the end of the slotted C-channel, allows for the roller to slide in smoothly during assembly." },
  { logic: "The bearing attaches to the slotted C-channel afterwards, holding the roller in place, and allowing it to rotate frictionlessly." },
  { logic: "A c-channel is utilized, due to its incredibly high strength per unit weight." },
];

const feature2Explanation = [
  { logic: "Previously, a shaft ran through the center of the pivot arm. This created the risk of the system shifting horizontally." },
  { logic: "Instead of a shaft, we've replaced it with an extrusion attached to a metal base, which is bolted onto the supporting frame." },
  { logic: "Bearings again help to support the rotation." },
];

const feature3Explanation = [
  { logic: "Connecting the two pivot arms is another c-channel." },
  { logic: "On the back of this c-channel lies a clevis, for a pin to slide into." },
  { logic: "This leads into the final sub-assembly." },
];

const feature4Explanation = [
  { logic: "The pneumatic cylinder has a ball joint bearing on its end, which lies concentric to the clevis pin sliding into the connector c-channel." },
  { logic: "The designed mounting piece allows the cylinder to rotate about its rear axis as it extends/retracts, like a crankshaft, which is used to convert linear to rotary motion." },
];

const NSIN_CAD = () => {
  return (
    <section id="CAD" className="text-black bg-white">
      <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
        <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4">
          Computer Aided Design
        </h1>
        <h1 className="text-lg mx-auto text-center">
          <span className="font-bold">Association:</span> Nucor Steel Indiana, Mechanical Engineering Internship
        </h1>
        <h1 className="text-lg mx-auto text-center">
          <span className="font-bold">Software Used:</span> AutoCAD, Autodesk Inventor
        </h1>

        <BeforeAfterGraphic />

        <h1 className="text-lg mx-auto text-center mt-4">
          <span className="font-bold">Hold Down Roller System:</span> Slide cursor across image to see before/after
          of this pickle line pneumatic system. The labeled sub-assemblies in the CAD representation
          will be explained further in this page.
        </h1>

        <CodeIcon className="mt-8 mx-auto w-10 text-black" />

        <ComponentFeature
          feature="Sub-assembly #1: Pivot Arm + Roller Connection"
          src={CAD_Assets['feature1.png']}
          alt="Subassembly #1"
          src1={CAD_Assets['slotted-c-channel.png']}
          hardware1="Slotted C-Channel Pivot Arm"
          alt1="Slotted C-channel"
          src2={CAD_Assets['4_bolt_face_bearing.png']}
          hardware2="4-bolt Face Bearing"
          alt2="4-bolt Face Bearing"
          src3={CAD_Assets['roller.png']}
          alt3="Roller"
          hardware3="Roller"
          information={feature1Explanation}
        />

        <CodeIcon className="mx-auto w-10 text-black" />

        <ComponentFeature
          feature="Sub-assembly #2: Axis of Rotation"
          src={CAD_Assets['feature2.png']}
          alt="Subassembly #2"
          src1={CAD_Assets['slotted-c-channel.png']}
          hardware1="Slotted C-Channel Pivot Arm"
          alt1="Slotted C-channel"
          src2={CAD_Assets['2_bolt_flange_bearing.png']}
          hardware2="4-bolt Face Bearing"
          alt2="2-bolt Flange Bearing"
          src3={CAD_Assets['pivot_axis.png']}
          alt3="Roller"
          hardware3="Pivot Axis"
          information={feature2Explanation}
        />

        <CodeIcon className="mx-auto w-10 text-black" />

        <ComponentFeature
          feature="Sub-assembly #3: Pivot Arms Connection"
          src={CAD_Assets['feature3.png']}
          alt="Subassembly #3"
          src1={CAD_Assets['slotted-c-channel.png']}
          hardware1="Slotted C-Channel Pivot Arm"
          alt1="Slotted C-channel"
          src2={CAD_Assets['clevis-c-channel.png']}
          hardware2="C-Channel with Clevis"
          alt2="2-bolt Flange Bearing"
          src3={CAD_Assets['clevis_pin.png']}
          hardware3="Clevis Pin"
          alt3="Roller"
          information={feature3Explanation}
        />

        <CodeIcon className="mx-auto w-10 text-black" />

        <ComponentFeature
          feature="Sub-assembly #4: Pneumatic Cylinder"
          src={CAD_Assets['feature4.png']}
          alt="Subassembly #4"
          src1={CAD_Assets['air-cylinder.png']}
          hardware1="Pneumatic Cylinder"
          alt1="Pneumatic Cylinder"
          src2={CAD_Assets['ball-joint-rod-end.png']}
          hardware2="Ball Joint Rod End"
          alt2="Ball Joint Rod End"
          src3={CAD_Assets['cylinder-back-mount.png']}
          hardware3="Cylinder Mounting Piece"
          alt3="Cylinder Mounting Piece"
          information={feature4Explanation}
        />

        <CodeIcon className="mx-auto w-10 text-black" />

        <h1 className="text-2xl font-bold my-8 text-center">Demonstration:</h1>
        <video className="max-w-full rounded-lg border-2 border-black" controls>
          <source src={assem_demo} type="video/mp4" />
        </video>

        <CodeIcon className="my-8 mx-auto w-10 text-black" />
        <SupportPlate />

        <h1 className="text-2xl font-bold my-8 text-center">Completed Inventor Model:</h1>
        <img
          src={completed_assem}
          alt="Complete Assembly"
          className="max-w-full rounded-lg border-2 border-black"
        />
      </div>
    </section>
  );
};

export default NSIN_CAD;
