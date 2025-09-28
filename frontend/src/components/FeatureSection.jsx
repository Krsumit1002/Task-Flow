import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    title: "Easy Task Management",
    desc: "Create, update, and track your tasks seamlessly with an intuitive interface."
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "Smart Reminders",
    desc: "Never miss deadlines again with timely reminders and notifications."
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Collaboration",
    desc: "Work together with your team, assign tasks, and track progress in real-time."
  },
  {
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    title: "Analytics & Insights",
    desc: "Track productivity and performance with detailed task analytics."
  },
];

const Features = () => {
  return (
    <section className="px-8 md:px-16 py-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800"
      >
        Powerful Features to Boost Productivity
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
