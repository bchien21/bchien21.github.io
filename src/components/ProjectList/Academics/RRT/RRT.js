import React from "react";
import demo from "./RRT_Assets/rrt_demo.mp4";
import { CodeIcon } from "@heroicons/react/solid";

const algorithm = [
  "Initialize two trees: One whose root at the starting configuration (q_init), and one whose root is the goal configuration (q_goal). For the rest of this description, we will refer to these trees as startTree and goalTree, respectively.",
  "We start by growing startTree. Sample a random collision-free point (q_rand) in the configuration space. But, there is a goal bias. There is a 5% chance that we just make the goal configuration our sampled point. This occasionally gives the tree some direction towards the goal, preventing it from growing way off course.",
  "Find the nearest node (q_near) in startTree to this point, using Euclidean Metric in the dimension of the configuration space. (For example, if each configuration has 6 elements, which is standard for a 6-DOF robot, we use the squared distance between the 6-dimensional configs).",
  "Sample a random collision-free point (q_rand) in the configuration space, then find the nearest node (q_near) in startTree to this point. (Euclidean Metric, or simply squared distance between the 6-dimensional configs).",
  "Generate a new configuration (q_new), which is on the straight-line path between q_rand and q_near by some proportion. For example, suppose the distance between q_rand and q_near is L, the distance between q_new and q_near could be 0.3*.",
  "If there is a collision-free path from q_near to q_new, add q_new to startTree.",
  "Then, we check if there is a collision-free path from q_new to any node in goalTree. If there is, we call this node otherNode. Then, we find a path from q_init to q_new, and the path from otherNode to q_goal. Then we can combine the paths, to get a succesful solution.",
  "If step 6 or step 7 fails (Either there is no collision-free path from q_near to q_new, or there is no collision-free path from q_new to any node in goalTree), we repeat from step 2. But this time, we are growing goalTree. So essentially in ever other iteration, q_init is treated as the goal, and q_goal is treated as the start. This allows for a faster convergence to a solution.",
  "These repeat until a valid solution is found, or the maximum allowable iterations is reached.",
];

export default function RRT() {
  return (
    <section id="nucor" className="text-black bg-white">
      <div className="container flex flex-col px-5 py-10 mx-auto lg:px-40">
        <h1 className="sm:text-4xl text-3xl text-center font-medium mb-4 text-black">
          Rapidly-Exploring Random Tree (RRT) Motion Planning
        </h1>
        {/* <ul className="my-8 text-black list-none">
          <li>
            <span className="font-bold">Course:</span> Algorithms for Sensor-Based
            Robotics, Johns Hopkins University (Course ID: 601-663)
          </li>
          <li>
            <span className="font-bold">Project Duration:</span> October 2024
          </li>
          <li>
            <span className="font-bold">Technical Skills:</span> ROS2, C++
          </li>
        </ul> */}
        {/* <h1 className="text-2xl text-black font-bold">Algorithm Overview:</h1>
        <ol className="list-decimal my-8 text-black text-md">
          {algorithm.map((idea, index) => (
            <li className="mb-4" key={index}>
              {idea}
            </li>
          ))}
        </ol>
        <CodeIcon className="mt-4 mx-auto w-10 text-black" /> */}
        <h1 className="text-2xl my-8 text-center font-bold text-black">
          <a
            href="https://github.com/bchien21/rrt-implementation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors duration-200"
          >
            Github Source Code
          </a>
        </h1>
        <CodeIcon className="mt-4 mx-auto w-10 text-black" />
        <h1 className="text-2xl text-black font-bold">Planning in Action</h1>
        <video
          className="my-2 mt-8 max-w-full rounded-lg border-2 border-yellow-400"
          controls
        >
          <source src={demo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
