import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList2({ data }) {
  return (
    <div
      id="TaskList2"
      className="h-[55%] overflow-x-auto w-full bg-transparent mt-5 rounded-lg py-6 flex items-center gap-5 px-5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
    >
      {data.tasks.map((task, idx) => {
        const getTaskComponent = () => {
          if (task.active) {
            return (
              <AcceptTask
                data={task}
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-lg py-4 px-6 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            );
          }
          if (task.new_task) {
            return (
              <NewTask
                data={task}
                className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-lg py-4 px-6 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            );
          }
          if (task.completed) {
            return (
              <CompleteTask
                data={task}
                className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 rounded-lg py-4 px-6 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            );
          }
          if (task.failed) {
            return (
              <FailedTask
                data={task}
                className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 rounded-lg py-4 px-6 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            );
          }
          return null;
        };

        return (
          <div key={idx} className="flex-shrink-0 w-[300px]">
            {getTaskComponent()}
          </div>
        );
      })}
    </div>
  );
}

export default TaskList2;
