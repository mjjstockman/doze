"use client";

import { useEffect } from "react";

const AddGoal = ({ goals, setGoals }) => {
  // Add a main goal
  const handleAddGoal = () => {
    // Will be dealt with in the database
    setGoals([...goals, { uid: goals.length + 1 , title: "Click to add goal name", icon: "..." }]);
  };

  useEffect(() => {

  }, [goals])

  return (
    <div
      onClick={handleAddGoal}
      className={`mt-2 ml-8 flex gap-4 items-center justify-center w-32 h-8 bg-white rounded-lg hover:cursor-pointer`}
    >
      <h1 className="text-neutral-800 font-semibold">Add Goal +</h1>
    </div>
  );
};

export default AddGoal;
