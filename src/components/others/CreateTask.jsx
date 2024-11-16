import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [AsignTo, setAsignTo] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      task_title: TaskTitle,
      task_date: TaskDate,
      category: Category,
      task_description: Description,
      active: false,
      failed: false,
      new_task: true,
      completed: false,
    };

    const updatedData = userData.map((user) => {
      if (user.firstName === AsignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskNumbers: {
            ...user.taskNumbers,
            new_task: user.taskNumbers.new_task + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedData);

    setTaskTitle("");
    setCategory("");
    setTaskDate("");
    setDescription("");
    setAsignTo("");
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 mt-5 rounded-lg p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between gap-4"
      >
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={TaskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make A UI Design"
              className="text-sm rounded w-full md:w-[80%] border border-gray-500 text-white bg-transparent outline-none py-2 px-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={TaskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="text-sm rounded w-full md:w-[80%] border border-gray-500 text-white bg-transparent outline-none py-2 px-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
            <input
              value={AsignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              placeholder="Employee Name"
              className="text-sm rounded w-full md:w-[80%] border border-gray-500 text-white bg-transparent outline-none py-2 px-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc."
              className="text-sm rounded w-full md:w-[80%] border border-gray-500 text-white bg-transparent outline-none py-2 px-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-2/5">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            className="w-full h-44 border border-gray-500 text-white bg-transparent outline-none py-2 px-3 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          ></textarea>
          <button className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 hover:bg-gradient-to-l w-full px-4 py-2 text-white font-semibold rounded mt-4 focus:ring-2 focus:ring-emerald-500 transition-transform duration-200 hover:scale-105">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
