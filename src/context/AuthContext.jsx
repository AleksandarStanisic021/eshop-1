import { createContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ chilren }) {
  return <AuthContext.Provider>{chilren}</AuthContext.Provider>;
}
