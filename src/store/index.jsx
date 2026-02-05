import { create } from "zustand";

export const MenuIndex=create((set)=>({
    value:false,
    CloseMenu:()=>set(()=>({value:false})),
    OpenMenu:()=>set(()=>({value:true})),
    toggleMenu:()=>set((state)=>({value:!state.value})),
}))