import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../context/authStore.js";

import api from "../api/axios";
import { User, Mail, Settings, LogOut, Edit, Loader } from "lucide-react";

const Profile = () => {
  const { user, checkAuth, logout } = useAuthStore();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await checkAuth();
      } catch (err) {
        setError("Failed to fetch profile. Redirecting to sign-in...");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    };

    fetchProfile();
  }, [checkAuth, navigate]);

  useEffect(() => {
    if (user !== null) {
      setIsLoading(false);
    }
  }, [user]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      logout();
      navigate("/signin");
    } catch (err) {
      setError("Failed to log out. Please try again.");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your update profile API call here
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center space-y-4">
          <Loader className="h-12 w-12 text-purple-600 animate-spin mx-auto" />
          <p className="text-purple-800 font-medium">Loading your profile...</p>
          <p className="text-sm text-purple-600/80">
            Preparing your personalized experience
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <p className="text-purple-800 font-medium">
              You need to sign in to view this page
            </p>
            <button
              onClick={() => navigate("/signin")}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Go to Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Floating decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-200/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Your Profile
          </h1>
          <p className="text-lg text-purple-800/80 max-w-2xl mx-auto">
            Manage your account details and preferences
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-lg shadow-sm flex justify-between items-center animate-fade-in">
            <p>{error}</p>
            <button
              onClick={() => setError("")}
              className="text-red-500 hover:text-red-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Account Information
                    </h2>
                    <p className="text-purple-600/80">
                      Personal details and preferences
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center space-x-1 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                    <span>{isEditing ? "Cancel" : "Edit"}</span>
                  </button>
                </div>

                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Username
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Your username"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex-1"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-purple-50/50 rounded-lg">
                      <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                        <User className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Username</p>
                        <p className="font-medium text-gray-800">
                          {user?.username || "Not set"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-purple-50/50 rounded-lg">
                      <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-800">
                          {user?.email || "Not set"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            {/* Account Actions */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Settings className="h-5 w-5 text-purple-600 mr-2" />
                Account Actions
              </h3>
              <ul className="space-y-3">
                <li>
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center">
                    <span className="text-purple-600 mr-3">🔒</span>
                    <span>Change Password</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center">
                    <span className="text-purple-600 mr-3">✉️</span>
                    <span>Email Preferences</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center">
                    <span className="text-purple-600 mr-3">🔔</span>
                    <span>Notification Settings</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-red-500 mr-2">⚠️</span>
                Danger Zone
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors text-red-600">
                  Delete Account
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl shadow-xl overflow-hidden p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Your Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-80">Orders</p>
                  <p className="text-xl font-bold">12</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-80">Wishlist</p>
                  <p className="text-xl font-bold">5</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-80">Reviews</p>
                  <p className="text-xl font-bold">8</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-80">Member Since</p>
                  <p className="text-xl font-bold">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
