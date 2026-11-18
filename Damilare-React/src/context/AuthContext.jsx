import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { isSuperAdminEmail } from "../utils/staffStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const savedUser = localStorage.getItem("user") || sessionStorage.getItem("userSession");

        if (savedUser) {
            try {
                const parsed = JSON.parse(savedUser);
                setUser(parsed.data || parsed);
            } catch (error) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
                sessionStorage.removeItem("userSession");
            }
        }

        setLoading(false);
    }, []);

    // LOGIN
    const login = async (email, password) => {
        const response = await api.post("/auth/login", {
            emailAddress: email,
            password: password,
            confirmPassword: password,
        });

        const responseData = response.data;
        const userData = responseData?.data || responseData?.user;

        if (userData) {
            sessionStorage.setItem("userSession", JSON.stringify(responseData));
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
        }

        if (responseData?.accessToken) {
            localStorage.setItem("accessToken", responseData.accessToken);
        }

        return responseData;
    };

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        sessionStorage.removeItem("userSession");
        setUser(null);
    };

    const isSuperAdmin = isSuperAdminEmail(user?.emailAddress || user?.email);

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        isSuperAdmin,
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
