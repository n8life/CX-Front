import { create } from 'zustand';
import axios from 'axios';
import { AuthResponse, AuthState } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async () => {
    try {
      const response = await axios.get<AuthResponse>('/api-login');
      console.log(response)
      if(response.body == 'Logged In') {
        set({
          isAuthenticated: true,
        }); 
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  },
  logout: () => {
    set({
      token: null,
      isAuthenticated: false,
    });
  },
}));