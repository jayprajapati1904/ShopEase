import { create } from "zustand";
import api from "../api/axios";

const useAuthStore = create((set) => ({
  user: null,
  authChecked: false,

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/check");
      set({ user: res.data.user });
    } catch (err) {
      set({ user: null });
    } finally {
      set({ authChecked: true });
    }
  },

  getProfile: async () => {
    try {
      const res = await api.get("/auth/profile");
      set({ user: res.data.user });
    } catch (err) {
      console.error("Failed to fetch profile", err);
      set({ user: null });
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      set({ user: null, authChecked: true });
    }
  },

  setUser: (user) => set({ user }),
}));

export default useAuthStore;
