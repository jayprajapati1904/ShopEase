import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../context/AuthStore.js";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const { checkAuth } = useAuthStore();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!form.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) return;

    try {
      setIsLoading(true);
      await api.post("/auth/signin", form);
      await checkAuth();
      navigate("/profile");
    } catch (error) {
      setApiError(
        error.response?.data?.message || "An error occurred during sign-in"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blobs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white bg-opacity-10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white bg-opacity-10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-white bg-opacity-10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl relative z-10 transform transition-all duration-300 hover:scale-[1.01]">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 drop-shadow-sm">
            Welcome Back!
          </h2>
          <p className="mt-3 text-center text-md text-gray-500">
            Sign in to pick up where you left off.
          </p>
        </div>

        {apiError && (
          <div
            className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg relative text-sm"
            role="alert"
          >
            <span className="block sm:inline font-medium">{apiError}</span>
          </div>
        )}

        <form className="mt-8 space-y-7" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`appearance-none rounded-lg relative block w-full px-4 py-2.5 border ${
                  errors.email
                    ? "border-red-400 ring-red-400"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 transition duration-200 ease-in-out sm:text-sm`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`appearance-none rounded-lg relative block w-full px-4 py-2.5 border ${
                  errors.password
                    ? "border-red-400 ring-red-400"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                } placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 transition duration-200 ease-in-out sm:text-sm`}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-semibold rounded-lg text-white shadow-lg transform transition-all duration-300 ${
                isLoading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 active:scale-95"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          New to our platform?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
