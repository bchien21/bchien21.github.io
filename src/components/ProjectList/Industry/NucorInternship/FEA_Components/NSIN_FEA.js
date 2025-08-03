import React from "react"
import importAll from "./importAll"
import FEAImageGallery from "./FEAImageGallery"

import { CodeIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

const FEA_Assets = importAll(require.context('./NSIN_FEA_Assets', false, /\.(png|jpe?g|svg)$/));

const pivotArm = [
    FEA_Assets['pivotarm_stress.png'],
    FEA_Assets['pivotarm_displacement.png'],
    FEA_Assets['pivotarm_FOS.png'],
];

const backMount = [
    FEA_Assets['backMount_stress.png'],
    FEA_Assets['backMount_displacement.png'],
    FEA_Assets['backMount_FOS.png'],
];

const supportPlate = [
    FEA_Assets['supportPlate_stress.png'],
    FEA_Assets['supportPlate_displacement.png'],
    FEA_Assets['supportPlate_FOS.png'],
];

const Labels = ["Von Mises Stress", "Displacement", "Factor of Safety"];

const Notes = [
    "Analysis done with Autodesk Inventor's Stress Analysis tool",
    "Factor of Safety for entire system is 2.77",
];

const NSIN_FEA = () => {
    return (
        <section id="FEA" className="bg-white text-black">
            <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
                <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4 text-black">
                    Finite Element Analysis
                </h1>
                <h1 className="text-lg mx-auto">
                    <span className="font-bold">Association:</span> Nucor Steel Indiana: Mechanical Engineering Internship
                </h1>
                <h1 className="text-lg mx-auto">
                    <span className="font-bold">Software Used:</span> Autodesk Inventor
                </h1>

                <div className="container mx-auto p-4">
                    <FEAImageGallery componentName="FE Analysis: Pivot Arm" imageUrls={pivotArm} imageLabels={Labels} />
                </div>

                <DotsHorizontalIcon className="mt-8 mx-auto w-10 text-black" />

                <div className="container mx-auto p-4">
                    <FEAImageGallery componentName="FE Analysis: Cylinder Mount" imageUrls={backMount} imageLabels={Labels} />
                </div>

                <DotsHorizontalIcon className="mt-8 mx-auto w-10 text-black" />

                <div className="container mx-auto p-4">
                    <FEAImageGallery componentName="FE Analysis: Simply Supported Plate" imageUrls={supportPlate} imageLabels={Labels} />
                </div>

                <CodeIcon className="mt-12 mb-8 mx-auto w-10 text-black" />

                <h1 className="text-xl font-semibold my-4">
                    Notes:
                </h1>
                <ol className="list-disc text-md pl-5">
                    {Notes.map((note, idx) => (
                        <li className="mb-4" key={idx}>{note}</li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default NSIN_FEA;
