import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Roadmaps } from './pages/Roadmaps';
import { MockInterview } from './pages/MockInterview';
import { ResumeBuilder } from './pages/ResumeBuilder';
import { JobBoard } from './pages/JobBoard';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-400 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 flex flex-col items-center justify-center overflow-hidden relative" style={{perspective:'1200px'}}>
            {/* 3D floating background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              <div className="floating-element depth-layer-1 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl absolute left-10 top-20"></div>
              <div className="floating-element depth-layer-2 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl absolute right-20 top-40"></div>
              <div className="floating-element depth-layer-3 w-24 h-24 bg-pink-300/30 rounded-full blur-2xl absolute left-1/2 bottom-10"></div>
            </div>
            <div className="relative z-10 w-full">
              <Navbar />
              <main className="pt-32 max-w-6xl mx-auto">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/roadmaps" element={
                    <ProtectedRoute>
                      <Roadmaps />
                    </ProtectedRoute>
                  } />
                  <Route path="/interview" element={
                    <ProtectedRoute>
                      <MockInterview />
                    </ProtectedRoute>
                  } />
                  <Route path="/resume" element={
                    <ProtectedRoute>
                      <ResumeBuilder />
                    </ProtectedRoute>
                  } />
                  <Route path="/jobs" element={
                    <ProtectedRoute>
                      <JobBoard />
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
// ...existing code...