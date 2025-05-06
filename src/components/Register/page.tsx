"use client";
import React, { useState } from "react";
import { InputField } from "../inputField";
import { Button } from "../buttons";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/Background.avif)" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-3xl w-full max-w-xl shadow-xl border border-gray-600">
        <h1 className="text-2xl font-semibold text-white text-center mb-2">
          Create Your Account
        </h1>
        <p className="text-sm text-gray-300 text-center mb-6">Join us today</p>

        <button className="w-full py-2 flex items-center justify-center border border-gray-400 rounded-md text-white hover:bg-gray-800 transition">
          Sign up with Google
        </button>

        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-300 text-sm">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InputField 
              name="firstName"
              label="First Name"
              type="text"
              placeholder="Enter first name"
              className="w-full px-4 py-2 mt-1 bg-black bg-opacity-30 border border-gray-600 text-white rounded-md placeholder-gray-400"            
            />
            <InputField 
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Enter last name"
              className="w-full px-4 py-2 mt-1 bg-black bg-opacity-30 border border-gray-600 text-white rounded-md placeholder-gray-400"            
            />
          </div>

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
            <InputField 
              name="mobile"
              label="Mobile Number"
              type="number"
              placeholder="Enter your mobile"
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
              <Button
                label="👁️"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="absolute right-0 top-9 text-gray-400 bg-transparent hover:bg-transparent"
              />
            
            </div>
          </div>

          <div className="relative">
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-1 bg-black bg-opacity-30 border border-gray-600 text-white rounded-md placeholder-gray-400"
            />
             <Button
                label="👁️"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="absolute right-0 top-9 text-gray-400 bg-transparent hover:bg-transparent"
              />
          </div>
          <Button
           label="Create Account" 
           variant="primary"
           className="w-full py-2 rounded-md text-white bg-gradient-to-b from-blue-500 to-blue-950"
          />

         

          <p className="text-center text-gray-300 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register; 