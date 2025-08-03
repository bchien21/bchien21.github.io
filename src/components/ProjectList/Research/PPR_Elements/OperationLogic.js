import React from "react";
import logicImage from "./PPR_Assets/ppr_operation_logic.png"

const operationSteps = [
    {step: "Saline flows through arterial line and out the needle tip exposed to the atmosphere, generating a baseline pressure for the pressure sensor, which is labeled as #1."},
    {step: "User performs preliminary jab; Tube valve (labeled #2) turns handle to seal off saline line. "},
    {step: "Full insertion begins. Simultaneously, the syringe handle (#4) pulls backwards, generating vacuum."},
    {step: "The generated vacuum pulls blood from the vessel through the optical sensor (#5) and into the syringe. When this happens, the stopcock handle seals off the syringe line. "},
    {step: "Saline is allowed to flow through line. The blood stream in the vessel is able to displace the saline back and forth (Due to heartbeat). This is detected by the pressure sensor (#3)."},
    {step: "Sensor reading outputs pressure changes from the baseline, differentiating vein from artery. "},
]

const OperationLogic = () =>{
    return(
        <div className="flex flex-col">
            <h1 className= "text-2xl text-white font-bold">
                Operation Logic 
            </h1>
            <div className="items-center">
                <img 
                    className="my-8 rounded-lg"
                    alt="operationLogic" 
                    src={logicImage}
                />
            </div>
            <h1 className= "text-lg text-white font-bold">
                Steps:
            </h1>
            <ol class="list-decimal my-8 text-white text-md">
                {operationSteps.map((steps) => (
                    <li className="mb-4">{steps.step}</li>
                ))}
            </ol>
        </div>
    );
};

export default OperationLogic;