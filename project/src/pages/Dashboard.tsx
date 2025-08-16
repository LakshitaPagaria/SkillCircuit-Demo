import { useAuth } from '../contexts/AuthContext';
import { 
  Target, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  MessageSquare,
  FileText,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      icon: Target,
      title: 'Current Streak',
      value: '12 days',
      change: '+2 from last week',
      positive: true
    },
    {
      icon: BookOpen,
      title: 'Skills Mastered',
      value: '8',
      change: '+3 this month',
      positive: true
    },
    {
      icon: MessageSquare,
      title: 'Interviews Completed',
      value: '15',
      change: '+5 this week',
      positive: true
    },
    {
      icon: Briefcase,
      title: 'Applications Sent',
      value: '23',
      change: '+8 this week',
      positive: true
    }
  ];

  const recentActivity = [
    {
      type: 'interview',
      title: 'Completed React Technical Interview',
      time: '2 hours ago',
      score: 85
    },
    {
      type: 'roadmap',
      title: 'Advanced JavaScript Concepts',
      time: '1 day ago',
      progress: 75
    },
    {
      type: 'resume',
      title: 'Updated Resume for Senior Developer Role',
      time: '2 days ago',
      ats_score: 92
    },
    {
      type: 'job',
      title: 'Applied to 3 Software Engineer positions',
      time: '3 days ago',
      count: 3
    }
  ];

  const quickActions = [
    {
      title: 'Practice Interview',
      description: 'Get ready with AI mock interviews',
      icon: MessageSquare,
      link: '/interview',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Continue Roadmap',
      description: 'Resume your learning path',
      icon: BookOpen,
      link: '/roadmaps',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Optimize Resume',
      description: 'Improve your ATS score',
      icon: FileText,
      link: '/resume',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Browse Jobs',
      description: 'Find your next opportunity',
      icon: Briefcase,
      link: '/jobs',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (

    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 perspective-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 relative">
          <div className="floating-element absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl depth-layer-1"></div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 transition-colors depth-layer-2 drop-shadow-lg" style={{textShadow:'0 8px 32px rgba(0,0,0,0.18)'}}>
            Welcome back, {user?.name}! <span className="inline-block animate-bounce">👋</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 transition-colors depth-layer-1">
            {user?.targetRole && `Target Role: ${user.targetRole} • `}
            {user?.experienceLevel && `Experience: ${user.experienceLevel}`}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card-3d bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 p-8 shadow-2xl backdrop-blur-md depth-layer-2 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/40 dark:to-purple-900/40 rounded-xl flex items-center justify-center transition-colors depth-layer-3 shadow-lg">
                    <Icon className="w-8 h-8 text-blue-600 drop-shadow-md" />
                  </div>
                  <div className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'} font-medium`}>{stat.change}</div>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">{stat.value}</div>
                <div className="text-base text-slate-600 dark:text-slate-400 transition-colors">{stat.title}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={index}
                    to={action.link}
                    className="group card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 hover:border-slate-200 dark:hover:border-slate-600"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform depth-layer-2 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors">{action.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">{action.description}</p>
                  </Link>
                );
              })}
            </div>

            {/* Today's Goals */}
            <div className="card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors">Today's Goals</h3>
              <div className="space-y-3">
                {[
                  { task: 'Complete System Design Mock Interview', completed: false },
                  { task: 'Study 2 LeetCode Problems', completed: true },
                  { task: 'Update LinkedIn Profile', completed: false },
                  { task: 'Apply to 3 New Positions', completed: false }
                ].map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shadow-md ${
                      goal.completed 
                        ? 'bg-green-100 border-green-500' 
                        : 'border-slate-300'
                    }`}>
                      {goal.completed && <CheckCircle className="w-3 h-3 text-green-500" />}
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 transition-colors">
                      {goal.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Recent Activity</h2>
            <div className="card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 transition-colors">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-slate-100 dark:border-slate-700 last:border-b-0 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors depth-layer-1 shadow-sm">
                      {activity.type === 'interview' && <MessageSquare className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'roadmap' && <BookOpen className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'resume' && <FileText className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'job' && <Briefcase className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-white transition-colors">{activity.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 transition-colors">{activity.time}</p>
                      {activity.score && (
                        <div className="text-xs text-green-600 font-medium">Score: {activity.score}%</div>
                      )}
                      {activity.progress && (
                        <div className="text-xs text-blue-600 font-medium">Progress: {activity.progress}%</div>
                      )}
                      {activity.ats_score && (
                        <div className="text-xs text-purple-600 font-medium">ATS Score: {activity.ats_score}%</div>
                      )}
                      {activity.count && (
                        <div className="text-xs text-orange-600 font-medium">{activity.count} applications</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="mt-6 card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors">Weekly Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">Interview Prep</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors">75%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 transition-colors shadow-inner">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full shadow-sm" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">Skill Building</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors">60%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 transition-colors shadow-inner">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full shadow-sm" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">Job Applications</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 transition-colors shadow-inner">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full shadow-sm" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}