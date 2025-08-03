import React from 'react';
import { DotsHorizontalIcon } from "@heroicons/react/solid"; 

function ComponentFeature(props) {
  const key = Object.keys(props.information[0])[0];

  return (
    <div className="my-8 bg-white text-black">
      <h1 className="text-2xl font-bold my-8 text-center">
        {props.feature}
      </h1>

      <img
        src={props.src}
        alt={props.alt}
        className="w-3/4 rounded-lg mx-auto mt-8 mb-4 border-2 border-black"
      />

      <DotsHorizontalIcon className="my-8 mx-auto w-10 text-black" />

      <h1 className="text-xl font-semibold text-center">Hardware:</h1>

      <div className="flex flex-row my-8 justify-center items-center">
        <div className="flex flex-col mx-4">
          <img
            src={props.src1}
            alt={props.alt1}
            className="w-64 rounded-md border-2 border-black"
          />
          <p className="text-md mx-auto my-4 text-center">{props.hardware1}</p>
        </div>

        <div className="flex flex-col mx-4">
          <img
            src={props.src2}
            alt={props.alt2}
            className="w-64 rounded-md border-2 border-black"
          />
          <p className="text-md mx-auto my-4 text-center">{props.hardware2}</p>
        </div>

        <div className="flex flex-col mx-4">
          <img
            src={props.src3}
            alt={props.alt3}
            className="w-64 rounded-md border-2 border-black"
          />
          <p className="text-md mx-auto my-4 text-center">{props.hardware3}</p>
        </div>
      </div>

      <DotsHorizontalIcon className="my-8 mx-auto w-10 text-black" />

      <h1 className="text-xl font-semibold my-8 text-center">
        Sub-Assembly Logic:
      </h1>

      <ol className="list-disc text-md px-8">
        {props.information.map((information, index) => (
          <li key={index} className="mb-4">{information[key]}</li>
        ))}
      </ol>
    </div>
  );
}

export default ComponentFeature;
