import React from "react";
import ideationAutoCAD from "./NucorAssets/ideationAutoCAD.png";

const Ideation = () => {
  return (
    <div className="flex flex-col my-8">
      <h1 className="text-2xl text-black font-bold my-4">
        Ideation in AutoCAD
      </h1>
      <img
        className="rounded-lg mt-4 border-2 border-black"
        alt="ideationAutoCAD"
        src={ideationAutoCAD}
      />
      <p className="text-black text-md mx-auto my-4">
        Rough drawing of redesign: Cylinder applies force farther from the axis of rotation, allowing it to exert greater torque. <br />
        Cylinder's location set at the top of the support frame makes it easier for operators to replace it, unlike before where it was below. <br />
        As the cylinder extends, it rotates like a crank; the purple dashed line shows the orientation it will be in at its full extension.
      </p>
    </div>
  );
};

export default Ideation;
