import { create } from "zustand";

interface User {
  email: string;
}

interface AuthState {
  user: User ;
  login: (userData: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));

export default useAuthStore;
