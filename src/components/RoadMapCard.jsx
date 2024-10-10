import LearningProgress from "./LearningProgress";
import { useState } from "react";

function getButtonString(learningProgress) {
  switch (learningProgress) {
    case 0:
      return "start learning";
    case 1:
      return "Mark as done";
    case 2:
      return "Congratulations!";
  }
}

export default function RoadMapCard({ title, image, description }) {
  const [learningProgress, setLearningProgress] = useState(0);

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg w-full h-80" src={image} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
      <div className="flex flex-row justify-between px-8 pb-4 pt-2">
        <LearningProgress learningStep={learningProgress} />
        <button
          disabled={learningProgress === 2}
          onClick={() => setLearningProgress((prevState) => prevState + 1)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          {getButtonString(learningProgress)}
        </button>
      </div>
    </div>
  );
}
