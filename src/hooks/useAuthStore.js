import create from "zustand";
import axios from "axios";
import api from "./api";

// Configure Axios globally
axios.defaults.withCredentials = true;

const useAuthStore = create((set, get) => ({
  name: "",
  email: "",
  website: "",
  password: "",
  otp: "",
  isLoading: false,
  error: null,
  isAuthenticated: false, // New state to track authentication
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setWebsite: (website) => set({ website }),
  setPassword: (password) => set({ password }),
  setOTP: (otp) => set({ otp }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  register: async () => {
    set({ isLoading: true, error: null });
    try {
      const { name, email, website, password } = get();
      const response = await axios.post("/api/v1/user/new", {
        name,
        email,
        website,
        password,
      });

      console.log("Registering user:", { name, email, website, password });

      if (response.data.success && response.status === 201) {
        set({ isLoading: false });
        return { email, status: response.status };
      } else if (response.status === 409) {
        set({ isLoading: false });
        return { email, status: response.status };
      } else {
        set({ error: response?.data?.message, isLoading: false });
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      set({
        error: error.response?.data?.message || error?.message,
        isLoading: false,
      });
      throw error;
    }
  },
  login: async () => {
    set({ isLoading: true, error: null });
    try {
      const { email, password } = get();
      const response = await api.post(
        "/user/login",
        { email, password },
        {
          headers: "Content-Type:application/json",
        }
      );

      if (response.data.success && response.status === 200) {
        set({ isLoading: false, isAuthenticated: true });
        return { status: response.status };
      } else {
        set({ isLoading: false });
        return { status: response.status };
      }
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "An unexpected error occurred";
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage =
          error.response.data.message ||
          `Server error: ${error.response.status}`;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = "No response received from server";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = error.message;
      }
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },
  verifyOTP: async () => {
    set({ isLoading: true, error: null });
    try {
      const { email, otp } = get();
      let numericOtp;
      if (/^\d+$/.test(otp)) {
        numericOtp = parseInt(otp, 10); // Convert to integer
      } else {
        numericOtp = otp;
      }
      console.log("otp rr", typeof numericOtp);
      const response = await axios.put(
        "/api/v1/user/verify-email",
        {
          email,
          otp: numericOtp,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success && response.status === 200) {
        console.log("verified");
        set({ isLoading: false });
        return { status: response.status };
      } else {
        set({ error: response.data.message, isLoading: false });
        return { status: response.status };
      }
    } catch (error) {
      console.log("Registering user error:", error);
      set({
        error: error.response?.data?.message || error.message,
        isLoading: false,
      });
      throw error;
    }
  },
  getProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get("/api/v1/user");

      if (response?.success && response?.status === 200) {
        set({ isLoading: false });
        return { data: response?.data?.dataToReturn };
      } else {
        set({ error: response?.message, isLoading: false });
        return { data: null };
      }
    } catch (error) {
      console.log(" user profile error:", error);
      set({
        error: error.response?.data?.message || error?.message,
        isLoading: false,
      });
      throw error;
    }
  },
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get("/api/v1/user/logout");

      if (response?.success && response?.status === 200) {
        set({ isLoading: false });
        return { data: response?.data?.dataToReturn };
      } else {
        set({ error: response?.message, isLoading: false });
        return { data: null };
      }
    } catch (error) {
      console.log(" user profile error:", error);
      set({
        error: error.response?.data?.message || error?.message,
        isLoading: false,
      });
      throw error;
    }
  },
}));

export default useAuthStore;
