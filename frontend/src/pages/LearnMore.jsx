import React from "react";
import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <section className="min-h-screen px-8 md:px-16 py-20 bg-gradient-to-r from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Learn More About <span className="text-blue-600">TaskFlow</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          TaskFlow is your all-in-one task management solution designed to help you
          stay productive and organized. From creating to-do lists to setting
          deadlines, tracking progress, and collaborating with your team, TaskFlow
          makes it easier to get things done without the chaos.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              ✅ Organize
            </h3>
            <p className="text-gray-600">
              Break your work into manageable tasks, assign priorities, and never
              lose track of what matters.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              📈 Track
            </h3>
            <p className="text-gray-600">
              Track your progress visually with intuitive dashboards and reports.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              🤝 Collaborate
            </h3>
            <p className="text-gray-600">
              Work with your team, assign roles, and keep everyone updated in
              real-time.
            </p>
          </div>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </motion.div>
    </section>
  );
};

export default LearnMore;
