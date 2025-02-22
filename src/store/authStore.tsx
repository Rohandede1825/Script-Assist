import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  setUser: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("user"),
  user: localStorage.getItem("user"),
  setUser: (user: string) => {
    localStorage.setItem("user", user);
    set({ isAuthenticated: true, user });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
