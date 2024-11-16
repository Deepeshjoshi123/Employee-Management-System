import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 rounded-lg flex-shrink-0">
      <div className="flex justify-between p-2">
        <h3 className="bg-red-600 py-1 px-2 rounded-sm font-medium text-white">
          {data.category}
        </h3>
        <h4 className="font-medium text-white">{data.task_date}</h4>
      </div>
      <h2 className="font-semibold text-2xl mt-3 mx-2 text-white">
        {data.task_title}
      </h2>
      <p className="text-sm mt-2 mx-2 text-white">{data.task_description}</p>
      <div className="mt-4 p-2">
        <button className="bg-red-600 hover:bg-red-700 w-full rounded text-white py-2 px-4 transition-all duration-300">
          Accept task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
