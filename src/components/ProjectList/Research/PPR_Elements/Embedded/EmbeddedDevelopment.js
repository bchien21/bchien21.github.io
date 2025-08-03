import React from "react"
import pressure_transducer from "./Embedded_Assets/pressure_transducer.png"
import syringe from "./Embedded_Assets/syringe.jpg"
import pprEmbeddedSetup from "./Embedded_Assets/ppr_embedded_setup.jpg"

import pprEntireSetup from "./Embedded_Assets/psoc_entire_system.mp4"
import sensorsDataStream from "./Embedded_Assets/sensors_data_stream.mp4"
import psocMotorControl from "./Embedded_Assets/psoc_motors_control.mp4"

import { DotsHorizontalIcon } from "@heroicons/react/solid" 
import { CodeIcon } from "@heroicons/react/solid";

const EmbeddedDevelopment = () => {
    return(
        <div className = "flex flex-col">
            <h1 className= "text-2xl text-white font-bold my-8">
                Embedded Development: Background
            </h1>
            <div className = "flex flex-row">
                <p className = "text-white text-lg mr-4">
                    <span className="font-bold text-cyan-400" > Servomotor Control: </span> <br />
                    The device utilizes a pressure sensor connected to a valve, shown on the left, 
                    able to control close off or allow for fluid flow from different arterial lines 
                    depending on handle orientation. We utilize the servo to finely control the angular 
                    position of this stopcock handle. 
                </p>
                <img
                    className="rounded-lg w-50 h-60 ml-4"
                    alt="pressureTransducer"
                    src = {pressure_transducer}        
                />
            </div>
            <div className = "flex flex-row my-8">
                <p className = "text-white text-lg mr-4">
                    <span className="font-bold text-cyan-400" > Linear Actuator Control: </span> <br />
                    A critical device operation is drawing blood through a non-invasive optical sensor 
                    to detect blood flash. A syringe in the device generates negative pressure as a needle 
                    goes through tissue. The linear actuator connects to the syringe via a customized adapter 
                    and is responsible for extending and retracting the syringe to generate this pressure. 
                </p>
                <img
                    className="rounded-lg w-50 h-60 ml-4"
                    alt="pressureTransducer"
                    src = {syringe}        
                />
            </div>
            <CodeIcon className="my-4 mx-auto w-10" />
            <h1 className= "text-2xl text-white font-bold my-8">
                PSoC™ System
            </h1>
            <img 
                className="my-2 rounded-lg border-2 border-cyan-400"
                alt="Demo of Medsnake accessing the snake" 
                src={pprEmbeddedSetup}
            />
            <p className = "text-white text-lg">
                <span className="font-bold text-cyan-400" > Programmable-System-on-Chip (PSoC™) : </span> <br />
                The most important electronic in this system, the PSoC's role is to communicate with the motors, by receiving commands
                that the user sends via USB. Simulatneously, it reads the data output from the pressure and optical sensors, and then 
                displays those readings on the terminal in the user's PC. In this image, the PSoC is connected to all 4 electronics, and this
                is the setup we used to test the firmware we wrote. 
            </p>
            <DotsHorizontalIcon className="mt-8 mx-auto w-10" ></DotsHorizontalIcon>
            <h1 className= "text-2xl text-white font-bold my-8">
                Rotating the Servomotor and Extending the Linear Actuator
            </h1>
            <video className="my-2 max-w-full rounded-lg border-2 border-cyan-400" controls>
                <source 
                    src={psocMotorControl} 
                    type="video/mp4"                    
                />
            </video>
            <p className = "text-white text-lg">
                <span className="font-bold text-cyan-400" > Motor Control: </span> <br />
                Both the motors are controlled via a pulse width modulated signal. For the servomotor, a 50% duty cycle 
                corresponds to a 90 degree turn. The duty cycle percentage is proportional to the angle the servo rotates. 
                For the linear actuator, the logic is similar; The higher the duty cycle, the longer the actuator extends. <br />
                For this demo, we input the desired angle of rotation and the desired length extension into a python script. The code
                then sends this information as bytes via serial communication to the PSoC, which then converts that information
                into the duty cycle it initializes to each motor. These two processes are done concurrently.
            </p>
            <DotsHorizontalIcon className="mt-8 mx-auto w-10" ></DotsHorizontalIcon>
            <h1 className= "text-2xl text-white font-bold my-8">
                Sensors Data Stream on Terminal
            </h1>
            <video className="my-2 max-w-full rounded-lg border-2 border-cyan-400" controls>
                <source 
                    src={sensorsDataStream} 
                    type="video/mp4"                    
                />
            </video>
            <p className = "text-white text-lg">
                <span className="font-bold text-cyan-400" > Terminal Output: </span> <br />
                In this output, the first number is proportional to fluid pressure measured by the pressure
                sensor. So as fluid pressure increases, this number will also increase. The second number is proportional
                to the opacity of the fluid measured by the optical sensor, and this value decreases with more opaque fluids. 
                These numbers are not the actual measured values of pressure and opacity. This output verifies that the sensors
                behave as expected. 
            </p>
            <DotsHorizontalIcon className="mt-8 mx-auto w-10" ></DotsHorizontalIcon>
            <h1 className= "text-2xl text-white font-bold my-8">
                Entire System in Action
            </h1>
            <video className="my-2 max-w-full rounded-lg border-2 border-cyan-400" controls>
                    <source 
                        src={pprEntireSetup} 
                        type="video/mp4"                    
                    />
            </video>
            <p className = "text-white text-lg">
                <span className="font-bold text-cyan-400" > Bringing it all together: </span> <br />
                In this demo, the PSoC performs all 4 tasks: Rotating the servomotor, extending the linear actuator,
                read data from the pressure sensor, and read data from the optical sensor. In the python script that is interacting 
                with it, it instructs the PSoC to interact with the motors first, then the sensors second. <br />
                However, the firmware on the PSoC is constantly running. So, it is possible to have control and data recording 
                running parallel to each other. An example would be in a ROS environment: A node that is sending data to the PSoC, 
                to control the motors, and a node that is subcribing from the serial output to record sensor data. 
                
            </p>
        </div>
    );
};

export default EmbeddedDevelopment;