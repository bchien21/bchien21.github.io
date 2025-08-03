import React from 'react';
import portrait from './assets/portrait.png';

export default function Home() {
  return (
    <section
      id="home"
      className="text-black bg-white min-h-screen w-full">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="font-semibold sm:text-6xl text-3xl text-black pt-10">
          Brian Chien
        </h1>
        <h1 className="font-semibold sm:text-2xl text-1xl py-8 text-black">
          Robotics Master's Student at Johns Hopkins University
        </h1>
        <p className="leading-relaxed text-black w-3/5">
          Hello! I'm a robotics master's student at Johns Hopkins University, currently working in JHU's Autonomous Control & Exploration Lab as a graduate research assistant specializing in learning-based path planning and control. 
          I also work in JHU's Intuitive Computing Lab where I apply my skills in robotics software engineering to develop a conversational robot. I graduated from Carnegie Mellon University in 2024 with my bachelor's in mechanical engineering,
          and after graduation I interned at Ford Motor Company to support the launch of their EV battery plant in Kentucky. 
          <br /> <br />
        </p>
        <img
          className="object-contain h-48 w-30 my-8 rounded-full"
          alt="portrait"
          src={portrait}
        /> 
      </div>
    </section>
  );
}
