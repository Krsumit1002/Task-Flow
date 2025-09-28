import React from "react";
import { motion } from "framer-motion";
import { PlusCircle, ClipboardCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <PlusCircle className="w-12 h-12 text-blue-600" />,
    title: "Create Tasks",
    desc: "Add your tasks quickly with just a few clicks and organize them by priority."
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
    title: "Track Progress",
    desc: "Stay on top of deadlines with smart reminders and progress tracking."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
    title: "Achieve Goals",
    desc: "Complete tasks efficiently and measure your productivity over time."
  },
];

const HowItWorks = () => {
  return (
    <section className="px-8 md:px-16 py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800"
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <div className="flex justify-center mb-6">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
