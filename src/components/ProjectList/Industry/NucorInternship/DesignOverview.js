import React from "react";
import { Link } from "react-router-dom";

import cadGraphic from "./NucorAssets/cad-graphic.png";
import feaGraphic from "./NucorAssets/fea-graphic.png";
import technicalDrawingGraphic from "./NucorAssets/technicalDrawing-graphic.png";

const DesignOverview = () => {
  return (
    <div className="flex flex-col text-black">
      <h1 className="text-2xl font-bold mt-4 mb-16">Design Overview</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* CAD Link */}
        <Link
          to="/nucor/nsincad"
          className="w-72 my-4 border-2 border-black rounded-lg"
        >
          <div className="flex relative">
            <img
              alt="CAD"
              className="absolute inset-0 w-full h-full object-cover object-center rounded"
              src={cadGraphic}
            />
            <div className="px-8 py-48 relative w-full bg-white bg-opacity-90 opacity-0 hover:opacity-100 rounded text-center transition duration-200">
              <h2 className="tracking-widest text-lg font-medium text-black mb-1">
                Computer Modeling
              </h2>
            </div>
          </div>
        </Link>

        {/* FEA Link */}
        <Link
          to="/nucor/nsinfea"
          className="w-72 my-4 border-2 border-black rounded-lg"
        >
          <div className="flex relative">
            <img
              alt="FEA"
              className="absolute inset-0 w-full h-full object-cover object-center rounded"
              src={feaGraphic}
            />
            <div className="px-8 py-48 relative w-full bg-white bg-opacity-90 opacity-0 hover:opacity-100 rounded text-center transition duration-200">
              <h2 className="tracking-widest text-lg font-medium text-black mb-1">
                Failure Analysis
              </h2>
            </div>
          </div>
        </Link>

        {/* Technical Drawing Link */}
        <Link
          to="/nucor/nsindrawing"
          className="w-72 my-4 border-2 border-black rounded-lg"
        >
          <div className="flex relative">
            <img
              alt="Drawing"
              className="absolute inset-0 w-full h-full object-cover object-center rounded"
              src={technicalDrawingGraphic}
            />
            <div className="px-8 py-48 relative w-full bg-white bg-opacity-90 opacity-0 hover:opacity-100 rounded text-center transition duration-200">
              <h2 className="tracking-widest text-lg font-medium text-black mb-1">
                Technical Drawings
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DesignOverview;
