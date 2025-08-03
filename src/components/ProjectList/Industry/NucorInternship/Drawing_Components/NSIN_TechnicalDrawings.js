import React from "react"
import pivotArmDrawing from "./NSIN_DrawingAssets/pivotarm_technical.png"
import pivotAxisDrawing from "./NSIN_DrawingAssets/pivotaxis_technical.png"
import cylinderMountDrawing from "./NSIN_DrawingAssets/cylinderarm_technical.png"
import billOfMaterials from "./NSIN_DrawingAssets/bill_of_materials.png"

import TechnicalDrawing from "./TechnicalDrawing"

const NSIN_TechnicalDrawings = () => {
    return (
        <section id="TechnicalDrawings" className="text-black bg-white">
            <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
                <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4 text-black">
                    Technical Drawings
                </h1>
                <h1 className="text-lg mx-auto">
                    <span className="font-bold">Association:</span> Nucor Steel Indiana: Mechanical Engineering Internship
                </h1>
                <h1 className="text-lg mx-auto">
                    <span className="font-bold">Software Used:</span> AutoCAD, Autodesk Inventor
                </h1>

                <TechnicalDrawing
                    imageUrl={pivotArmDrawing}
                    title="Technical Drawing: Pivot Arm"
                    description="C-Channel Pivot Arm Technical Drawing, made in AutoCAD"
                />
                <TechnicalDrawing
                    imageUrl={pivotAxisDrawing}
                    title="Technical Drawing: Pivot Axis"
                    description="Pivot Axis Technical Drawing, made in AutoCAD"
                />
                <TechnicalDrawing
                    imageUrl={cylinderMountDrawing}
                    title="Technical Drawing: Cylinder Mount"
                    description="Cylinder Mount Technical Drawing, made in AutoCAD"
                />

                <div className="flex flex-col items-center p-4 border-2 border-black rounded-lg shadow-md my-8">
                    <h2 className="text-lg text-black font-semibold mb-2">Bill of Materials</h2>
                    <img
                        src={billOfMaterials}
                        alt="Bill of Materials"
                        className="w-full h-full object-contain border-2 border-black rounded-lg"
                    />
                    <p className="mt-2 text-black text-center">
                        The Bill of Materials of this Pneumatic System.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NSIN_TechnicalDrawings;
