import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-lg flex-shrink-0">
      <div className="flex justify-between p-3">
        <h3 className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 py-1 px-2 rounded-sm font-medium text-white">
          {data.category}
        </h3>
        <h4 className="font-medium text-white">{data.task_date}</h4>
      </div>
      <h2 className="font-semibold text-2xl text-white mt-3 mx-2">
        {data.task_title}
      </h2>
      <p className="text-sm text-gray-100 mt-2 mx-2">{data.task_description}</p>
      <div className="flex justify-between mt-4 p-1">
        <button className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-1 px-3 rounded text-sm text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-green-600 hover:to-green-500 transition-all duration-300">
          Mark as Completed
        </button>
        <button className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 py-1 px-3 rounded text-sm text-white hover:bg-gradient-to-r hover:from-red-700 hover:via-red-600 hover:to-red-500 transition-all duration-300">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
