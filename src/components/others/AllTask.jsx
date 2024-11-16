import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      id="AllTask"
      className="bg-[#1C1C1C] p-6 rounded-lg mt-5 h-full shadow-xl bg-opacity-90 transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="mb-4">
        <div className="flex justify-between items-center py-4 px-5 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white shadow-md bg-opacity-80">
          <h2 className="text-lg font-semibold w-[20%] text-center">
            Username
          </h2>
          <h3 className="text-lg font-semibold w-[20%] text-center">
            New Task
          </h3>
          <h5 className="text-lg font-semibold w-[20%] text-center">Active</h5>
          <h5 className="text-lg font-semibold w-[20%] text-center">
            Completed
          </h5>
          <h5 className="text-lg font-semibold w-[20%] text-center">Failed</h5>
        </div>
      </div>

      {userData.map((e, idx) => (
        <div
          className="flex justify-between items-center mb-3 py-4 px-5 rounded-lg border border-emerald-400 bg-gradient-to-r from-[#2A2A2A] via-[#1C1C1C] to-[#2A2A2A] text-white bg-opacity-90 shadow-md hover:shadow-lg transition-shadow duration-200"
          key={idx}
        >
          <h3 className="text-lg w-1/5 text-center">{e.firstName}</h3>
          <h3 className="text-green-400 text-lg font-semibold w-1/5 text-center">
            {e.taskNumbers.new_task}
          </h3>
          <h3 className="text-yellow-400 text-lg font-semibold w-1/5 text-center">
            {e.taskNumbers.active}
          </h3>
          <h3 className="text-blue-400 text-lg font-semibold w-1/5 text-center">
            {e.taskNumbers.completed}
          </h3>
          <h3 className="text-red-400 text-lg font-semibold w-1/5 text-center">
            {e.taskNumbers.failed}
          </h3>
        </div>
      ))}
    </div>
  );
};
