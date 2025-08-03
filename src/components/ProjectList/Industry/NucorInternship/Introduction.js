import React from "react";
import PickleLine from "./NucorAssets/pickle_line.jpg";

const Introductions = [
  { intro: "In Nucor's Crawfordsville mill, steel coils undergo a process called pickling." },
  { intro: "The steel is unwound and goes through a pickle line, where it is bathed in hydrochloric acid." },
  { intro: "When the steel exits this pickle line, knives on the side of the line decrease its width." },
  { intro: "During this, there is a possibility for the sheet to buckle as the knives press on the edge." },
  { intro: "To prevent this, a pneumatic cylinder applies pressure to the steel as it is being trimmed." },
  { intro: "This pneumatic cylinder pushes against a pivot arm with a wheel at the end, rotating the arm to press the wheel against the steel." },
];

const Objectives = [
  { obj: "Have the pneumatic cylinder apply force over a greater area on the steel, while maintaining equal/greater pressure." },
  { obj: "Allow the operators on the pickle line to rotate the wheel higher up, reaching at least 8 inches above the sheet." },
  { obj: "Improve the replaceability of the hardware in this system." },
];

const Introduction = () => {
  return (
    <div className="flex flex-col lg:flex-row my-8 text-black">
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl font-bold my-4">Introduction</h1>
        <ol className="list-disc text-md mr-4 ml-6">
          {Introductions.map((intros, index) => (
            <li className="mb-4" key={index}>{intros.intro}</li>
          ))}
        </ol>

        <h1 className="text-2xl font-bold my-4">Objectives</h1>
        <ol className="list-disc text-md mr-4 ml-6">
          {Objectives.map((objs, index) => (
            <li className="mb-4" key={index}>{objs.obj}</li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col mt-8 lg:mt-0 lg:ml-6 w-full lg:w-96 border-2 border-black px-4 py-4 rounded-lg">
        <img
          className="rounded-lg"
          alt="pickleline"
          src={PickleLine}
        />
        <p className="text-sm mt-2">
          A coil at Nucor Steel Gallatin's pickling line.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
