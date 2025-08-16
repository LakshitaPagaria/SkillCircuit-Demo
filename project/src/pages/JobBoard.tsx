import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Briefcase, 
  Building,
  ExternalLink,
  Heart,
  Filter,
  Zap,
  CheckCircle,
  Send,
  Bookmark
} from 'lucide-react';

export function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    jobType: 'all',
    experience: 'all',
    salary: 'all',
    remote: false
  });
  const [autoApplyEnabled, setAutoApplyEnabled] = useState(false);

  const jobs = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      remote: true,
      description: 'We are looking for a senior software engineer to join our growing team...',
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS'],
      posted: '2 days ago',
      logo: '🏢',
      applied: false,
      saved: false,
      matchScore: 92
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80k - $120k',
      remote: false,
      description: 'Join our innovative startup as a frontend developer...',
      requirements: ['React', 'JavaScript', 'CSS', 'Git'],
      posted: '1 day ago',
      logo: '🚀',
      applied: true,
      saved: false,
      matchScore: 87
    },
    {
      id: '3',
      title: 'Full Stack Engineer',
      company: 'DevCompany',
      location: 'Remote',
      type: 'Contract',
      salary: '$70 - $90/hr',
      remote: true,
      description: 'Looking for a versatile full stack engineer for a 6-month project...',
      requirements: ['Python', 'Django', 'React', 'PostgreSQL'],
      posted: '3 days ago',
      logo: '💻',
      applied: false,
      saved: true,
      matchScore: 78
    },
    {
      id: '4',
      title: 'Backend Engineer',
      company: 'DataFlow Inc',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$100k - $140k',
      remote: true,
      description: 'Build scalable backend systems for our data processing platform...',
      requirements: ['Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
      posted: '5 days ago',
      logo: '⚡',
      applied: false,
      saved: false,
      matchScore: 84
    }
  ];

  const handleQuickApply = (jobId: string) => {
    // Simulate quick apply with AI-generated cover letter
    console.log(`Quick applying to job ${jobId}`);
  };

  const handleSaveJob = (jobId: string) => {
    console.log(`Saving job ${jobId}`);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 perspective-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="floating-element absolute top-0 left-1/5 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full blur-xl"></div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Smart Job Board
          </h1>
          <p className="text-xl text-slate-600">
            Find your perfect role with AI-powered matching and automated applications
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card-3d bg-white rounded-xl border border-slate-100 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search jobs, titles, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm focus:shadow-md"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm focus:shadow-md"
                />
              </div>
            </div>
            <div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Search Jobs
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <select 
                value={filters.jobType}
                onChange={(e) => setFilters({...filters, jobType: e.target.value})}
                className="px-3 py-2 border border-slate-200 rounded-lg text-sm shadow-sm hover:shadow-md transition-all"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
                <option value="part-time">Part-time</option>
              </select>
            </div>
            <select 
              value={filters.experience}
              onChange={(e) => setFilters({...filters, experience: e.target.value})}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm shadow-sm hover:shadow-md transition-all"
            >
              <option value="all">All Levels</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
            <select 
              value={filters.salary}
              onChange={(e) => setFilters({...filters, salary: e.target.value})}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm shadow-sm hover:shadow-md transition-all"
            >
              <option value="all">All Salaries</option>
              <option value="0-50k">$0 - $50k</option>
              <option value="50k-100k">$50k - $100k</option>
              <option value="100k-150k">$100k - $150k</option>
              <option value="150k+">$150k+</option>
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.remote}
                onChange={(e) => setFilters({...filters, remote: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 shadow-sm"
              />
              <span className="text-sm text-slate-700">Remote Only</span>
            </label>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Auto-Apply Settings */}
            <div className="card-3d bg-white rounded-xl border border-slate-100 p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h3 className="font-semibold text-slate-900">Auto-Apply</h3>
              </div>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={autoApplyEnabled}
                    onChange={(e) => setAutoApplyEnabled(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 shadow-sm"
                  />
                  <span className="text-sm text-slate-700">Enable Auto-Apply</span>
                </label>
                {autoApplyEnabled && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 shadow-sm depth-layer-1">
                    <p className="text-xs text-yellow-800">
                      AI will generate personalized cover letters and apply to matching jobs automatically
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Application Stats */}
            <div className="card-3d bg-white rounded-xl border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Your Applications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Applied This Week</span>
                  <span className="font-semibold text-slate-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Response Rate</span>
                  <span className="font-semibold text-green-600">18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Interviews Scheduled</span>
                  <span className="font-semibold text-blue-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Saved Jobs</span>
                  <span className="font-semibold text-purple-600">7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="card-3d bg-white rounded-xl border border-slate-100 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl depth-layer-2 shadow-lg">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.posted}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-green-600">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-medium">{job.salary}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4 text-blue-600" />
                              <span>{job.type}</span>
                            </div>
                            {job.remote && (
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium shadow-sm">
                                Remote
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-2">
                          <span className="text-sm font-medium text-slate-600">Match:</span>
                          <span className={`text-sm font-bold ${
                            job.matchScore >= 90 ? 'text-green-600' :
                            job.matchScore >= 80 ? 'text-blue-600' : 'text-yellow-600'
                          }`}>
                            {job.matchScore}%
                          </span>
                        </div>
                        <div className="w-16 bg-slate-200 rounded-full h-2 shadow-inner">
                          <div 
                            className={`h-2 rounded-full shadow-sm ${
                              job.matchScore >= 90 ? 'bg-green-500' :
                              job.matchScore >= 80 ? 'bg-blue-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${job.matchScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium shadow-sm transform hover:scale-105 transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-3">
                        {job.applied ? (
                          <div className="flex items-center space-x-2 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Applied</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleQuickApply(job.id)}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Send className="w-4 h-4" />
                            <span>Quick Apply</span>
                          </button>
                        )}
                        
                        <button
                          onClick={() => handleSaveJob(job.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 shadow-md ${
                            job.saved 
                              ? 'bg-purple-100 text-purple-700' 
                              : 'glass-morphism text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${job.saved ? 'fill-current' : ''}`} />
                          <span>{job.saved ? 'Saved' : 'Save'}</span>
                        </button>
                      </div>

                      <button className="flex items-center space-x-2 text-slate-500 hover:text-slate-700 text-sm transition-all transform hover:scale-105">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="glass-morphism text-slate-600 px-6 py-3 rounded-lg hover:bg-slate-50 transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}