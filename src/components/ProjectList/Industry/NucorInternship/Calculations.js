import React from "react";
import calculations1 from "./NucorAssets/calculations1.png";
import calculations2 from "./NucorAssets/calculations2.png";

const Calculations = () => {
  return (
    <div className="flex flex-col my-8 text-black">
      <h1 className="text-2xl font-bold my-4 text-black text-center">
        Hand Calculations: Determining Required Cylinder Force
      </h1>

      <img
        className="rounded-lg border-2 border-black w-1/2 mt-4 mx-auto"
        alt="calculations1"
        src={calculations1}
      />
      <p className="w-1/2 text-md mx-auto my-4 text-center">
        Determining independent variables for this system: <br />
        F<sub>cylinder</sub> is the force exerted, and x is the distance the force acts
        from the axis of rotation.
      </p>

      <img
        className="rounded-lg border-2 border-black w-3/4 mt-4 mx-auto"
        alt="calculations2"
        src={calculations2}
      />
      <p className="w-3/4 text-md mx-auto my-4 text-center">
        Calculating the required F<sub>cylinder</sub>, based on roller width, given
        distance from the axis of rotation.
      </p>
    </div>
  );
};

export default Calculations;
