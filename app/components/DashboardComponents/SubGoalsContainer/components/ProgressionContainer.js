"use client";

import AddSubGoal from "./AddSubGoal";
import SubGoalTitleContainer from "./SubGoalTitleContainer";
import SmallSubGoals from "./SmallSubGoals";

const ProgressionContainer = ({
  title,
  color,
  circleColor,
  tasks,
  stage,
  stages,
  setStages,
}) => {
  return (
    <div className={`h-auto max-h-screen w-1/3 rounded-lg ${color} p-2`}>
      <SubGoalTitleContainer
        stage={stage}
        stages={stages}
        setStages={setStages}
        title={title}
        color={circleColor}
        taskAmount={tasks.length}
      />

      <div
        className={`${
          tasks.length >= 10 ? "h-5/6" : "h-auto"
        } overflow-y-auto mb-4`}
      >
        <div className="flex flex-col overflow-y-auto gap-2 w-full p-2">
          {tasks.map((task, index) => (
            <SmallSubGoals />
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="flex items-center justify-center text-black">
            <p className="text-xl">No Task {stage.text}</p>
          </div>
        )}
      </div>

      <AddSubGoal stage={stage} stages={stages} setStages={setStages} />
    </div>
  );
};

export default ProgressionContainer;
