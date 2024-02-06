"use client";

import { useState, useEffect } from "react";
import AddSubGoal from "./AddSubGoal";
import SubGoalTitleContainer from "./SubGoalTitleContainer";

const ProgressionContainer = ({
  title,
  color,
  tasks,
  stage,
  stages,
  setStages,
}) => {
  const TestCard = () => {
    return <div className="h-20 w-full rounded-lg bg-white"></div>;
  };

  return (
    <div className={`h-auto max-h-screen w-1/3 rounded-lg ${color} p-2`}>
      <SubGoalTitleContainer
        title={title}
        color={color}
        taskAmount={tasks.length}
      />

      <div className="h-5/6 overflow-y-auto mb-4">
        <div className="flex flex-col overflow-y-auto gap-2 h- w-full p-2">
          {tasks.map((task, index) => (
            <TestCard key={index} />
          ))}
        </div>
      </div>

      <AddSubGoal stage={stage} stages={stages} setStages={setStages} />
    </div>
  );
};

export default ProgressionContainer;
