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
      className={`mt-2 ml-8 flex gap-4 items-center justify-center w-32 h-8 bg-[#494368] hover:border hover:border-black hover:scale-105 transition duration-200 rounded-lg hover:cursor-pointer`}
    >
      <h1 className="text-white font-semibold hover:text-border">Add Goal +</h1>
    </div>
  );
};

export default AddGoal;
