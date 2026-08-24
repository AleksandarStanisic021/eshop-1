import { createContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user] = useState();

  function signUp() {}

  function Login() {}

  return (
    <AuthContext.Provider value={{ user, signUp, Login }}>
      {children}
    </AuthContext.Provider>
  );
}
