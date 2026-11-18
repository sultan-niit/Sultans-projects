import { createContext, useContext, useState } from "react";
import api from "../api/axios";
import { normalizeAuthUser } from "../js/authUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("accessToken");
    const savedUser = localStorage.getItem("user");

    if (!token || !savedUser) return null;

    try {
      const normalizedUser = normalizeAuthUser(JSON.parse(savedUser));
      localStorage.setItem("user", JSON.stringify(normalizedUser));
      return normalizedUser;
    } catch (error) {
      console.error("Error parsing stored user:", error);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      return null;
    }
  });

  // LOGIN
  const login = async (email, password) => {
    const requestData = new FormData();
    requestData.append("emailAddress", email);
    requestData.append("password", password);

    const response = await api.post("sign-in.php", requestData);
    const responseData = response.data;

    if (responseData?.success) {
      const userData = normalizeAuthUser(responseData.data || responseData.user || {});

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("accessToken", responseData.accessToken || userData.staffId || userData.staff_id);
      setUser(userData);
    }

    return responseData;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    setUser,
    loading: false,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
