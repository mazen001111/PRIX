import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLogin = create(persist((set) => ({
    Token: null,
    login: (token) => set(() => ({ Token: token })),
    logout: () => {
        set(() => ({ Token: null }))
        localStorage.removeItem("useLogin")
        sessionStorage.removeItem("useLogin")
    },
}),
    {
        name: "useLogin",
    }
))