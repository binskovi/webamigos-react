import { createContext } from "react";

const defaultValues = {
  // domyślana wartość na false
  isLoggedIn: false,
};

type AuthContextType = typeof defaultValues;

export const AuthContext = createContext<AuthContextType>(defaultValues);
// korzystamy z Providera
// AuthContext.Provider
