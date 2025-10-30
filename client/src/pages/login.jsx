import { useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // ✅ use the hook
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth(); // get login function from context
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: form.email }, "mock-token"); // mock login
    navigate("/");
  };

  return (
    <div className="flex items-center justify-start min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pl-64">
      <div className="bg-white shadow-xl rounded-xl p-10 w-[400px] mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-all font-semibold text-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-700 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
