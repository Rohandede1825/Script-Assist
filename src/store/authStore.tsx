import { create } from "zustand";

interface AuthState {
  user: string | null;
  setUser: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: localStorage.getItem("authToken") || null,
  setUser: (token: string) => {
    localStorage.setItem("authToken", token);
    set({ user: token });
  },
  logout: () => {
    localStorage.removeItem("authToken");
    set({ user: null });
  },
}));

export default useAuthStore;
