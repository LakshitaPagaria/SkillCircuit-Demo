import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  ArrowRight, 
  Map, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  TrendingUp,
  Users,
  Award,
  Zap,
  CheckCircle
} from 'lucide-react';

export function Home() {
  const { user } = useAuth();

  const features = [
    {
      icon: Map,
      title: 'Dynamic Roadmaps',
      description: 'AI-curated learning paths for Data Science, Software Engineering, Cybersecurity, and Web3',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'AI Mock Interviews',
      description: 'Practice with AI agents that provide real-time feedback and personalized coaching',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Resume Optimization',
      description: 'ATS scoring and AI-powered suggestions to perfect your resume for any role',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Briefcase,
      title: 'Smart Job Board',
      description: 'Aggregated listings with auto-apply features and personalized cover letters',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: TrendingUp, value: '94%', label: 'Success Rate' },
    { icon: Award, value: '10K+', label: 'Jobs Landed' },
    { icon: Zap, value: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-40 pb-20 perspective-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="floating-element absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="floating-element absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-xl"></div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Career
              </span> Journey Starts Here
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto transition-colors">
              Master your skills, ace interviews, optimize your resume, and land your dream job with 
              our AI-powered platform designed for tech professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center depth-layer-2">
              {user ? (
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-all transform hover:scale-105 hover:translateZ-4 shadow-2xl"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-all transform hover:scale-105 hover:translateZ-4 shadow-2xl"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center px-8 py-4 glass-morphism text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 dark:bg-slate-800/50 transition-colors perspective-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center tilt-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl mb-4 transition-colors shadow-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 perspective-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors">
              Our comprehensive platform combines the latest AI technology with proven career 
              development strategies to accelerate your tech career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group card-3d p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform depth-layer-2 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors perspective-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
                Why Choose SkillCircuit?
              </h2>
              <div className="space-y-4">
                {[
                  'AI-powered personalized learning paths',
                  'Real-time interview feedback and coaching',
                  'ATS-optimized resume building tools',
                  'Automated job application workflows',
                  'Progress tracking across multiple platforms',
                  'Industry-specific career guidance'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 tilt-card">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative perspective-container">
              <div className="card-3d bg-white dark:bg-slate-800 rounded-2xl p-8 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg depth-layer-2 shadow-lg"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2 transition-colors"></div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded w-2/3 transition-colors"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded transition-colors"></div>
                    <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded w-5/6 transition-colors"></div>
                    <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded w-4/6 transition-colors"></div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <div className="flex-1 h-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800/30 dark:to-blue-700/30 rounded transition-colors depth-layer-1 shadow-md"></div>
                    <div className="flex-1 h-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-800/30 dark:to-purple-700/30 rounded transition-colors depth-layer-1 shadow-md"></div>
                  </div>
                </div>
              </div>
              <div className="floating-element absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-sm"></div>
              <div className="floating-element absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 perspective-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 transition-colors">
            Join thousands of tech professionals who have accelerated their careers with SkillCircuit.
          </p>
          {!user && (
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-all transform hover:scale-105 card-3d depth-layer-3"
            >
              Start Free Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}