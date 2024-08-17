import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //   const authInfo = {
  //     login,
  //     logout,
  //   };

  return (
    // <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    <AuthContext.Provider>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
