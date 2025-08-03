import { CodeIcon } from "@heroicons/react/solid";
import { experience } from "../data";
import React from "react";

export default function WorkExperience(){
    return(
        <section id="workexperience" className="text-black bg-white">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Experience
                </h1>
                <div className="flex flex-wrap justify-center mt-4">
                    {experience.map((exp) => (
                        <div key={exp.title} className="flex flex-col w-3/4 items-center p-10">
                            <img
                                alt="gallery"
                                className="w-48 border-2 border-black rounded"
                                src={exp.logo}
                            />
                            <div className="w-3/4 text-left">
                                <h1 className="py-4 pl-10 text-black font-semibold text-2xl">
                                    {exp.title}
                                </h1> 
                                <p className="pl-10 pb-2 text-black font-semibold text-xl">
                                    {exp.company}
                                </p>
                                <p className="pl-10 pb-2 text-black">
                                    {exp.location}
                                </p>
                                <p className="pl-10 text-black">
                                    {exp.duration}
                                </p>
                            </div>
                        </div>            
                    ))}
                </div>
            </div>
        </section>
    );
}
