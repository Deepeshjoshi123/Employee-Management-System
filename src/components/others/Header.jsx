import React from "react";

const Header = (props) => {
  function LogOut() {
    localStorage.setItem("loggedInUser", "");
    props.ChangeUser("");
    console.log(props);
  }

  return (
    <div className="flex justify-between items-center p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
      <div>
        <h2 className="font-medium text-2xl text-gray-300">
          Hello, <br />
          <span className="font-semibold text-3xl text-emerald-500 animate-pulse">
            {props.data?.firstName || "User"}👏
          </span>
        </h2>
      </div>

      <button
        onClick={LogOut}
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 rounded-lg text-lg font-medium transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-700/50 border-2 border-red-700 hover:border-red-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
