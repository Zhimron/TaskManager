import { create } from "zustand";

const UseZustandGetId = create((set) => ({
  isAuthenticatedId: false,
  userid: "",
  toggleAuthenticationId: () =>
    set((state) => ({ isAuthenticatedId: !state.isAuthenticatedId })),
  toggleAuthToTrueId: () => {
    set(() => ({ isAuthenticatedId: true }));
  },
  GetId: (userid) => set(() => ({ userid: userid })),
}));
export default UseZustandGetId;
