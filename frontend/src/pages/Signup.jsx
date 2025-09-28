import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save credentials in localStorage
    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ email, password })
    );

    // Mock user + token
    const mockUser = { email };
    const mockToken = "dummy-jwt-token";

    login(mockUser, mockToken);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-3 w-full mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
