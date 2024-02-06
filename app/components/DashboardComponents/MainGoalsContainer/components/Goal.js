"use client";

const Goal = ({ goals, uid, handleRemoveGoal }) => {
  // Handle sending user to goal page
  const handleGoalPressed = () => {
    console.log(goals);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <div onClick={handleGoalPressed} className="h-4 w-4 bg-white hover:cursor-pointer"></div>
        <h2 onClick={handleGoalPressed} className="text-black font-semibold hover:cursor-pointer">
          {goals}
        </h2>
      </div>
      {/* <ProgressBar /> */}
      <h2 onClick={() => handleRemoveGoal(uid)} className="text-transparent hover:cursor-pointer hover:text-black">
        x
      </h2>
    </div>
  );
};

export default Goal;
