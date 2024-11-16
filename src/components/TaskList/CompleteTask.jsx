import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-gradient-to-r from-green-600 via-green-500 to-green-400 rounded-lg flex-shrink-0">
      <div className="flex justify-between p-2">
        <h3 className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 py-1 px-2 rounded-sm font-medium text-white">
          {data.category}
        </h3>
        <h4 className="font-medium text-white">{data.task_date}</h4>
      </div>
      <h2 className="font-semibold text-2xl text-white mt-3 mx-2">
        {data.task_title}
      </h2>
      <p className="text-sm text-gray-100 mt-2 mx-2">{data.task_description}</p>
      <div className="mt-4 p-1">
        <button className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 w-full rounded text-white py-1 px-3">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
