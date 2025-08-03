import React from "react"
import bottomHighLevel from "./PPR_Assets/high-level-ppr.png"
import upperHighLevel from "./PPR_Assets/high-level-ppr-2.png"

const HighLevel = () => {
    return(
        <div className="flex flex-col">
            <h1 className= "text-2xl text-white font-bold">
                High Level System Diagram
            </h1>
            <h1 className="text-lg text-cyan-400 font-bold my-8">
                Bottom Half of Device — Disposable
            </h1>
            <img 
                className = "rounded-lg"
                alt="highLevelBottom" 
                src={bottomHighLevel}
            />
            <h1 className="text-lg text-cyan-400 font-bold my-8">
                Upper Half of Device — Reusable
            </h1>
            <img 
                className = "rounded-lg"
                alt="highLevelTop" 
                src={upperHighLevel}
            />
        </div>
    );

};

export default HighLevel;
