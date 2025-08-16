import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  targetRole?: string;
  experienceLevel?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, verify token with backend
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call - replace with actual backend call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const { token, user: userData } = await response.json();
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      // For demo purposes, simulate successful login
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0],
        targetRole: 'Software Engineer',
        experienceLevel: 'Mid-Level'
      };
      localStorage.setItem('token', 'demo-token');
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call - replace with actual backend call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      
      if (response.ok) {
        const { token, user: userData } = await response.json();
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      // For demo purposes, simulate successful registration
      const mockUser = {
        id: '1',
        email,
        name,
        targetRole: 'Software Engineer',
        experienceLevel: 'Entry Level'
      };
      localStorage.setItem('token', 'demo-token');
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}