// src/Login.js
import React, { useState } from "react";

export default function Login({ HandleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    HandleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black animate-gradient">
      <div className="border border-gray-700 rounded-2xl p-8 shadow-2xl bg-gray-800/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:shadow-gray-700/70">
        <form
          className="flex flex-col items-center justify-center p-8 bg-transparent"
          onSubmit={SubmitHandler}
        >
          <h1 className="text-3xl font-extrabold text-gray-200 mb-6 tracking-wider">
            Log in
          </h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email"
            className="border border-gray-600 rounded-full py-3 px-6 text-white bg-gray-900/60 text-xl outline-none placeholder:text-gray-500 mb-4 shadow-inner focus:ring-4 focus:ring-indigo-500 transition-all duration-300"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="border border-gray-600 rounded-full py-3 px-6 text-white bg-gray-900/60 text-xl outline-none placeholder:text-gray-500 mb-6 shadow-inner focus:ring-4 focus:ring-indigo-500 transition-all duration-300"
          />

          <button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full py-3 px-10 text-lg font-semibold w-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/40 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
