import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [LoggedInUser, setLoggedInUser] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUser(userData.data);
      }
    }
  }, []);

  const HandleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      const adminData = { firstName: "Deepesh", email: "admin@gmail.com" };
      setUser("admin");
      setLoggedInUser(adminData);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminData })
      );
    } else if (userData) {
      const employee = userData.find((e) => {
        return e.email === email && e.password === password;
      });
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard ChangeUser={setUser} data={LoggedInUser} />
      ) : null}
      {user === "employee" ? (
        <EmployeeDashboard data={LoggedInUser} ChangeUser={setUser} />
      ) : null}
    </>
  );
}

export default App;
