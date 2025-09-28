import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-8 md:px-16 py-10 bg-gray-900 text-gray-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">TaskFlow</h2>
          <p className="mt-2 text-gray-400">
            Simplify your workflow, boost productivity, and achieve more.
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
