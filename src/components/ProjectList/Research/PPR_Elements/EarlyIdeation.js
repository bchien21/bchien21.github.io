import React from "react";
import pprInitialTop from "./PPR_Assets/ppr_initial_top.png"
import pprInitialBottom from "./PPR_Assets/ppr_initial_bottom.png"
import pprInitial from "./PPR_Assets/ppr_initial_full.png"

const keyFeatures = [
    {feature: "Raspberry Pi Touchscreen Display."},
    {feature: "Tupperware Clamps."},
    {feature: "PSoC™ Microcontroller (Sparkfun Electronics's FreeSoC2)"},
]

const Drawbacks = [
    {drawback: "Touchscreen and Microcontroller increased form factor dramatically."},
    {drawback: "Tupperware Clamps are hard to install."},
]

const EarlyIdeation = () => {
    return(
        <div className = "flex flex-col">
            <h1 className= "text-2xl text-white font-bold my-8">
                Computer Aided Design: Early Ideation
            </h1>
            <div className = "flex flex-row">
                <div className = "flex flex-col items-center pr-4">
                    <img 
                        className = "rounded-lg my-4"
                        alt="InitialTop" 
                        src={pprInitialTop}
                    />
                    <p className="text-md font-medium text-cyan-400">
                        Reusable Module: Initial SolidWorks Model
                    </p>
                </div>
                <div className = "flex flex-col items-center pl-4">
                    <img 
                        className = "rounded-lg my-4"
                        alt="InitialBottom" 
                        src={pprInitialBottom}
                    />
                    <p className = "text-md font-medium text-cyan-400">
                        Disposable Module: Initial SolidWorks Model
                    </p>
                </div>
            </div>
            <img
                className = "rounded-lg my-4"
                alt="InitialFull"
                src={pprInitial}
            />
            <p className = "text-lg mx-auto font-medium text-cyan-400">
                Full Assembly: Initial SolidWorks Model
            </p>
            <h1 className= "text-xl text-white font-bold my-8">
                Key Features
            </h1>
            <ol class="list-disc text-white text-md">
                {keyFeatures.map((features) =>(
                    <li className="mb-4"> {features.feature}</li>
                ))}
            </ol>
            <h1 className= "text-xl text-white font-bold my-8">
                Drawbacks
            </h1>
            <ol class="list-disc text-white text-md">
                {Drawbacks.map((drawbacks) =>(
                    <li className="mb-4"> {drawbacks.drawback}</li>
                ))}
            </ol>
        </div>

    );
};

export default EarlyIdeation;