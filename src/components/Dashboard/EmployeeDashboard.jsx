import React from "react";
import { TaskList } from "../others/TaskList";
import TaskList2 from "../TaskList/TaskList";
import Header from "../others/Header";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-6 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#000000] h-full min-h-screen">
      <Header data={props.data} ChangeUser={props.ChangeUser} />
      <TaskList data={props.data} />
      <TaskList2 data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
