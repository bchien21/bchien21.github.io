import React from "react";
import { projectsResearch } from "../../data";
import { Link } from "react-router-dom";

const ResearchLayout = () => {
    return(
        <div className="flex flex-col text-left">
            <h1 className="text-2xl text-white m-4 pb-4">
                Research
            </h1>
            <div className="flex flex-wrap -m-4">
                {projectsResearch.map((project) => (
                    //https://tailwindcss.com/docs/responsive-design
                    <div className = "lg:w-1/3 md:w-1/2 sm:w-full p-5">
                        <div className="flex flex-col relative bg-cyan-700 h-fit rounded-3xl">
                            <img
                                alt="gallery"
                                className="mt-4 w-5/6 h-44 object-cover rounded-3xl mx-auto"
                                src={project.image}
                            />
                            <div className="text-center">
                                <h1 className="py-4 px-6 text-white font-semibold text-xl">
                                    {project.title}
                                </h1>
                            </div>
                            <p className= "text-white px-4">
                                {project.description}
                            </p>
                            <div className="flex items-center py-4 mx-auto">
                                <Link
                                    to={project.route}
                                    className="text-black bg-cyan-300 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-sm"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResearchLayout;