import React from "react";

export const TaskList = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-between gap-5 mt-5">
      {[
        {
          label: "New Task",
          value: data.taskNumbers.new_task,
          gradient: "from-yellow-500 via-yellow-400 to-yellow-300",
        },
        {
          label: "Active",
          value: data.taskNumbers.active,
          gradient: "from-blue-500 via-blue-400 to-blue-300",
        },
        {
          label: "Completed Task",
          value: data.taskNumbers.completed,
          gradient: "from-green-500 via-green-400 to-green-300",
        },
        {
          label: "Failed Task",
          value: data.taskNumbers.failed,
          gradient: "from-red-500 via-red-400 to-red-300",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center py-8 px-10 w-full md:w-[48%] lg:w-[22%] bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <h2 className="text-4xl font-semibold text-white animate-pulse">
            {item.value}
          </h2>
          <h3 className="text-xl font-bold text-white mt-2">{item.label}</h3>
        </div>
      ))}
    </div>
  );
};
