import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
      const res = await api.get("/auth/check");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    }
  };

  const getProfile = async () => {
    try {
      const res = await api.get("/auth/profile");
      setUser(res.data.user);
    } catch (err) {
      console.error("Failed to fetch profile", err);
      setUser(null);
    }
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, checkAuth, logout, getProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
