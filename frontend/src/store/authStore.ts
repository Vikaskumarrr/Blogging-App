import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthUser, LoginCredentials, RegisterCredentials } from '../types/user.types';
import { apiService } from '../services/api';
import { API_CONFIG } from '../utils/constants';

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  updateProfile: (data: Partial<AuthUser>) => void;
  clearError: () => void;
  
  // State setters
  setUser: (user: AuthUser | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (credentials: LoginCredentials) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await apiService.post(API_CONFIG.endpoints.auth.login, credentials);
          
          if (response.user) {
            const user = response.user as AuthUser;
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false,
              error: null 
            });
            
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            
            // Set auth token if provided
            if (response.token) {
              apiService.setAuthToken(response.token);
            }
          } else {
            throw new Error('Invalid response from server');
          }
        } catch (error: any) {
          set({ 
            isLoading: false, 
            error: error.message || 'Login failed' 
          });
          throw error;
        }
      },

      register: async (credentials: RegisterCredentials) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await apiService.post(API_CONFIG.endpoints.auth.register, credentials);
          
          if (response.user) {
            const user = response.user as AuthUser;
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false,
              error: null 
            });
            
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            
            // Set auth token if provided
            if (response.token) {
              apiService.setAuthToken(response.token);
            }
          } else {
            throw new Error('Invalid response from server');
          }
        } catch (error: any) {
          set({ 
            isLoading: false, 
            error: error.message || 'Registration failed' 
          });
          throw error;
        }
      },

      logout: async () => {
        try {
          set({ isLoading: true });
          
          // Call logout endpoint
          await apiService.post(API_CONFIG.endpoints.auth.logout);
        } catch (error) {
          // Continue with logout even if API call fails
          console.warn('Logout API call failed:', error);
        } finally {
          // Clear local state
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: null 
          });
          
          // Clear localStorage
          localStorage.removeItem('user');
          localStorage.removeItem('auth_token');
          
          // Clear API token
          apiService.removeAuthToken();
        }
      },

      refreshUser: async () => {
        try {
          set({ isLoading: true });
          
          // Check if we have a stored user
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            const user = JSON.parse(storedUser) as AuthUser;
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false 
            });
          } else {
            set({ 
              user: null, 
              isAuthenticated: false, 
              isLoading: false 
            });
          }
        } catch (error) {
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false 
          });
        }
      },

      updateProfile: (data: Partial<AuthUser>) => {
        const { user } = get();
        if (user) {
          const updatedUser = { ...user, ...data };
          set({ user: updatedUser });
          
          // Update localStorage
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
      },

      clearError: () => {
        set({ error: null });
      },

      // State setters
      setUser: (user: AuthUser | null) => {
        set({ 
          user, 
          isAuthenticated: !!user 
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);

// Selectors for better performance
export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useAuthLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);

// Actions - use individual hooks to avoid object recreation
export const useLogin = () => useAuthStore((state) => state.login);
export const useRegister = () => useAuthStore((state) => state.register);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useRefreshUser = () => useAuthStore((state) => state.refreshUser);
export const useUpdateProfile = () => useAuthStore((state) => state.updateProfile);
export const useClearError = () => useAuthStore((state) => state.clearError);
