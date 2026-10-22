import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const savedUser = localStorage.getItem("user");

        if (token && savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
            }
        }

        setLoading(false);
    }, []);

    // LOGIN
    const login = async (email, password) => {
        const requestData = new FormData();
        requestData.append("emailAddress", email);
        requestData.append("password", password);

        const response = await api.post("sign-in.php", requestData);
        const responseData = response.data;
        const userData = responseData?.data || responseData?.user;

        if (userData) {
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
        }

        if (responseData?.accessToken) {
            localStorage.setItem("accessToken", responseData.accessToken);
        } else if (userData?.staffId) {
            localStorage.setItem("accessToken", userData.staffId);
        }

        return responseData;
    };

    // SIGNUP (API code removed)
    const signUp = async () => {};

    // FORGOT PASSWORD (API code removed)
    const forgotPassword = async () => {};

    // RESET PASSWORD (API code removed)
    const resetPassword = async () => {};

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        signUp,
        forgotPassword,
        resetPassword,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};