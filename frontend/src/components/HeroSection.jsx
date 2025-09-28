import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Dummy check → Replace later with real auth check
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/dashboard");  // If logged in, go to Dashboard
    } else {
      navigate("/signup");     // Else, go to Signup
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      
      {/* Left Content */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Manage Your <span className="text-blue-600">Tasks</span> Smartly
        </h1>
        <p className="mt-6 text-lg text-gray-600 md:w-4/5">
          TaskFlow helps you organize, prioritize, and track your work with ease. 
          Boost productivity with a simple yet powerful task manager.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/learn")}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mb-10 md:mb-0"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-2xl shadow-xl flex items-center justify-center">
          <span className="text-2xl text-gray-400">📊 Dashboard Preview</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
