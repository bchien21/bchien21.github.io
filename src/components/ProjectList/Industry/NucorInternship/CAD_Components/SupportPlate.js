import React from 'react';
import supportPlate from "./NSIN_CAD_Assets/simply-supported-plate.png";

const SupportPlate = () => {
  return (
    <div className="flex flex-col bg-white text-black p-6 rounded-lg">
      <h1 className="text-2xl font-semibold my-8 text-center">
        Simply Supported Plate:
      </h1>
      <div className="flex items-center gap-8 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/3">
          <img
            src={supportPlate}
            alt="Simply Supported Plate"
            className="w-full h-auto border-2 border-black rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <p className="text-md leading-relaxed">
            As the pneumatic cylinder pushes the roller against the steel sheet, the steel sheet pushes back on the roller,
            creating a moment about the base of the blue support frame. A simply supported steel plate sits between the 
            supporting frame and a structure behind the frame to help resist this moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPlate;

