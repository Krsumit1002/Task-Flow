import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext"; // import auth hook
import { User } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth(); // get user & logout from context

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">TaskFlow</div>


      {/* Auth Buttons */}
      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-gray-600 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <User className="w-6 h-6 text-gray-700" />
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
