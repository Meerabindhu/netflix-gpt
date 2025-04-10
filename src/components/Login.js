import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleAuthForms = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <form className="w-3/12 p-12 absolute left-0 right-0 m-auto my-28 bg-black bg-opacity-70 flex flex-col rounded-md">
      <h2 className="text-white font-bold text-3xl px-2 py-4 ">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h2>
      {!isSignIn && (
        <input
          className="p-4 m-2 rounded-md bg-transparent border border-white"
          type="text"
          placeholder="Enter Full Name"
        />
      )}

      <input
        className="p-4 m-2 rounded-md bg-transparent border border-white"
        type="email"
        placeholder="Enter email address"
      />
      <input
        className="p-4 m-2 rounded-md bg-transparent border border-white"
        type="password"
        placeholder="Enter Password"
      />
      <button className="p-4 m-2 bg-[#dd1f1f] rounded-md text-white">
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      <div className="p-4 text-white cursor-pointer" onClick={handleAuthForms}>
        {isSignIn
          ? "New to Netflix ? Sign Up now"
          : "Already a Member ? Sign In"}
      </div>
    </form>
  );
};

export default Login;
