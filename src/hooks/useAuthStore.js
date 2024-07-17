import create from 'zustand';
import axios from 'axios';

// Configure Axios globally
axios.defaults.withCredentials = true;

const useAuthStore = create((set, get) => ({
  name: '',
  email: '',
  website: '',
  password: '',
  otp: '',
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
      const response = await axios.post('http://54.151.57.38:3000/api/v1/user/new', {
        name,
        email,
        website,
        password,
      });

      console.log('Registering user:', { name, email, website, password });

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
      set({ error: error.response?.data?.message || error?.message, isLoading: false });
      throw error;
    }
  },
  login: async () => {
    set({ isLoading: true, error: null });
    try {
      const { email, password } = get();
      const response = await axios.post('http://54.151.57.38:3000/api/v1/user/login', {
        email,
        password,
      });

      if (response?.success && response.status === 200) {
        set({ isLoading: false, isAuthenticated: true }); // Set authenticated state
        return { status: response.status };
      } else {
        set({ isLoading: false });
        return { status: response.status };
      }
    } catch (error) {
      set({ error: error.response?.data?.message || error?.message, isLoading: false });
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
      console.log('otp rr', typeof numericOtp);
      const response = await axios.put('http://54.151.57.38:3000/api/v1/user/verify-email', {
        email,
        otp: numericOtp,
      });

      if (response.data.success && response.status === 200) {
        console.log('verified');
        set({ isLoading: false });
        return { status: response.status };
      } else {
        set({ error: response.data.message, isLoading: false });
        return { status: response.status };
      }
    } catch (error) {
      console.log('Registering user error:', error);
      set({ error: error.response?.data?.message || error.message, isLoading: false });
      throw error;
    }
  },
  getProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get('http://54.151.57.38:3000/api/v1/user');

      if (response?.success && response?.status === 200) {
        set({ isLoading: false });
        return { data: response?.data?.dataToReturn };
      } else {
        set({ error: response?.message, isLoading: false });
        return { data: null };
      }
    } catch (error) {
      console.log(' user profile error:', error);
      set({ error: error.response?.data?.message || error?.message, isLoading: false });
      throw error;
    }
  },
}));

export default useAuthStore;
