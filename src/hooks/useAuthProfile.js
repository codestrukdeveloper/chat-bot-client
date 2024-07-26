import { useEffect, useState } from "react";
import api from "./api";
import useAuthStore from "./useAuthStore";
import { useNavigate } from "react-router-dom";

export const useAuthProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { logout: handleLogout } = useAuthStore();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserProfile = async () => {
    setLoading(true);
    try {
      const userResponse = await api.get("/user");

      if (userResponse.status === 200 && userResponse.data) {
        setUser(userResponse.data.data.dataToReturn);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error Fetching user profile", error);
      setError(error);
      setIsAuthenticated(false);

      // throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const logout = async () => {
    await handleLogout();
    setUser(null);
    navigate("/auth/signin");
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    logout,
  };
};
