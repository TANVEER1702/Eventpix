"use client";
import React, { useState } from "react";
import { InputField } from "../inputField";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen  flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/Background.avif)" }}
    >
      <div className="bg-black bg-opacity-50  p-8 rounded-3xl w-full max-w-xl shadow-xl border border-gray-600">
        <h1 className="text-2xl font-semibold text-white text-center mb-2">
          Sign In to Your Account
        </h1>
        <p className="text-sm text-gray-300 text-center mb-6">Welcome</p>

        <button className="w-full py-2 flex items-center justify-center border border-gray-400 rounded-md text-white hover:bg-gray-800 transition">
          Sign in with Google
        </button>

        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-300 text-sm">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <form className="space-y-4">
          <div>
            <InputField 
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 bg-black bg-opacity-30 border border-gray-600 text-white rounded-md placeholder-gray-400"            
            />
           </div>

          <div>
            <div className="relative">
                <InputField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mt-1 bg-black bg-opacity-30 border border-gray-600 text-white rounded-md placeholder-gray-400 pr-10"
                />
             
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-11 text-gray-400"
              >
                👁️
              </button>
            </div>
            <div className="text-right mt-1 text-sm">
              <a href="#" className="text-blue-400 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Sign In
          </button>
          <p className="text-center text-gray-300 text-sm">
            Create a New Account?{" "}
            <Link href="/" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
