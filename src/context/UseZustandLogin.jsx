import { create } from "zustand";

const UseZustandLogin = create((set) => ({
  isAuthenticated: false,
  email: "",
  toggleAuthentication: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated })),
  toggleAuthToTrue: () => {
    set(() => ({ isAuthenticated: true }));
  },
  GetUser: (email) => set(() => ({ email: email })),
}));
export default UseZustandLogin;
