"use client";

import { useEffect, useState } from "react";
import ProgressionContainer from "./components/ProgressionContainer";

const SubGoalsContainer = () => {
  const [stages, setStages] = useState([
    {
      text: "To-Do",
      color: "bg-[#FF9796]",
      circleColor: "#E87775",
      tasks: [1, 2, 3, 4, 5],
    },
    {
      text: "In Progress",
      color: "bg-[#7899D4]",
      circleColor: "#5677A6",
      tasks: [1, 2, 3],
    },
    {
      text: "Done",
      color: "bg-[#ACE4AA]",
      circleColor: "#87C082",
      tasks: [1, 2, 3, 4, 5, 6, 7],
    },
  ]);

  return (
    <div className="bg-white w-full h-auto rounded-b-lg p-10 ">
      <h1 className="text-3xl text-black font-semibold mb-2">Board</h1>

      <div className="flex gap-4 w-full max-h-screen h-full rounded-lg p-4">
        {stages.map((section, index) => (
          <ProgressionContainer
            key={index}
            stages={stages}
            stage={section}
            setStages={setStages}
            title={section.text}
            color={section.color}
            circleColor={section.circleColor}
            tasks={section.tasks}
          />
        ))}
      </div>
    </div>
  );
};

export default SubGoalsContainer;
