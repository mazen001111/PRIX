import { create } from "zustand";
import { persist } from "zustand/middleware";
const isBrowser = typeof window !== "undefined";

export const useLogin = create(persist((set) => ({
    Token: null,
    login: (token) => set(() => ({ Token: token })),
    logout: () => {
        set(() => ({ Token: null }))
        if (isBrowser) {
          localStorage.removeItem("useLogin");
          sessionStorage.removeItem("useLogin");
        }
    },
}),
    {
        name: "useLogin",
    }
))