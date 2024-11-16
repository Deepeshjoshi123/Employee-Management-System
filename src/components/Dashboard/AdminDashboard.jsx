import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import { AllTask } from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-4">
      <Header ChangeUser={props.ChangeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
