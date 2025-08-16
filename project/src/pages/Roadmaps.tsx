import React, { useState } from 'react';
import { 
  Map, 
  Code, 
  Shield, 
  Database, 
  Coins, 
  ChevronRight, 
  CheckCircle,
  Clock,
  Star,
  Users,
  BookOpen,
  Play,
  MessageSquare
} from 'lucide-react';

export function Roadmaps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const roadmaps = [
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      description: 'Master full-stack development with modern frameworks and tools',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      duration: '6-12 months',
      difficulty: 'Intermediate',
      enrolled: '12.5K',
      rating: 4.8,
      topics: [
        'Programming Fundamentals',
        'Data Structures & Algorithms',
        'System Design',
        'Web Development',
        'Backend Development',
        'Database Management',
        'DevOps & Deployment',
        'Testing & Quality Assurance'
      ]
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Learn machine learning, statistics, and data analysis techniques',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      duration: '8-14 months',
      difficulty: 'Advanced',
      enrolled: '8.9K',
      rating: 4.7,
      topics: [
        'Python Programming',
        'Statistics & Mathematics',
        'Data Analysis & Visualization',
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Big Data Technologies',
        'MLOps & Deployment'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect systems and data with comprehensive security knowledge',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      duration: '5-10 months',
      difficulty: 'Intermediate',
      enrolled: '6.3K',
      rating: 4.6,
      topics: [
        'Network Security',
        'Ethical Hacking',
        'Cryptography',
        'Security Architecture',
        'Incident Response',
        'Compliance & Governance',
        'Penetration Testing',
        'Security Tools & Technologies'
      ]
    },
    {
      id: 'web3-blockchain',
      title: 'Web3 & Blockchain',
      description: 'Build decentralized applications and smart contracts',
      icon: Coins,
      color: 'from-yellow-500 to-orange-600',
      duration: '4-8 months',
      difficulty: 'Advanced',
      enrolled: '4.1K',
      rating: 4.5,
      topics: [
        'Blockchain Fundamentals',
        'Smart Contract Development',
        'Solidity Programming',
        'DApp Development',
        'DeFi Protocols',
        'NFTs & Tokenization',
        'Web3 Integration',
        'Security Best Practices'
      ]
    }
  ];

  const handleAskAI = async (roadmapId: string, question: string) => {
    setIsLoading(true);
    try {
      // Simulate API call to Perplexity
      const response = await fetch('/api/ai/perplexity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          roadmap: roadmapId, 
          question,
          context: 'career_roadmap'
        }),
      });
      
      const data = await response.json();
      setAiResponse(data.response);
    } catch (error) {
      // Mock response for demo
      setAiResponse(`Based on current industry trends, here's what you should know about ${question.toLowerCase()}:

This topic is crucial for your career development because it directly impacts your ability to solve real-world problems. Here are the key learning resources I recommend:

1. **Start with fundamentals**: Begin with the official documentation and basic tutorials
2. **Practice projects**: Build 2-3 small projects to reinforce your understanding
3. **Advanced concepts**: Once comfortable, dive into advanced patterns and optimization
4. **Community engagement**: Join relevant communities and contribute to open-source projects

The estimated time to master this topic is 2-4 weeks with consistent daily practice. Focus on building practical projects rather than just theoretical knowledge.`);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 perspective-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="floating-element absolute top-0 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-xl"></div>
          <div className="floating-element absolute top-8 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-full blur-xl"></div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            AI-Curated Career Roadmaps
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors">
            Follow structured, up-to-date learning paths powered by AI insights and industry expertise
          </p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;
            return (
              <div
                key={roadmap.id}
                className="group card-3d bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${roadmap.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform depth-layer-3 shadow-xl`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{roadmap.rating}</span>
                      </div>
                      <div className="text-xs text-slate-500">{roadmap.enrolled} enrolled</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{roadmap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 transition-colors">{roadmap.description}</p>

                  <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500 dark:text-slate-400 transition-colors">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{roadmap.difficulty}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    {roadmap.topics.slice(0, 4).map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-slate-700 dark:text-slate-300 transition-colors">{topic}</span>
                      </div>
                    ))}
                    <div className="text-xs text-slate-500 dark:text-slate-400 ml-6 transition-colors">
                      +{roadmap.topics.length - 4} more topics
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedRoadmap(roadmap.id)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Start Learning
                    </button>
                    <button className="px-4 py-3 glass-morphism text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:scale-105 shadow-md">
                      <BookOpen className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Assistant Section */}
        <div className="card-3d bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-8 transition-colors">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center transition-colors depth-layer-2 shadow-lg">
              <Map className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">AI Career Assistant</h2>
              <p className="text-slate-600 dark:text-slate-300 transition-colors">Ask questions about any roadmap topic and get detailed, up-to-date guidance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors">Popular Questions</h3>
              <div className="space-y-3">
                {[
                  'What are the best resources for learning React?',
                  'How long does it take to become job-ready?',
                  'What projects should I build for my portfolio?',
                  'Which skills are most in-demand right now?'
                ].map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleAskAI('software-engineering', question)}
                    className="w-full text-left p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-all group transform hover:scale-102 hover:translateZ-2 shadow-md hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700 dark:text-slate-300 transition-colors">{question}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors">AI Response</h3>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 min-h-[200px] transition-colors shadow-inner">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : aiResponse ? (
                  <div className="prose prose-sm text-slate-700 dark:text-slate-300 transition-colors">
                    {aiResponse.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-3">{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-slate-500 dark:text-slate-400 h-full flex items-center justify-center transition-colors">
                    <div>
                      <MessageSquare className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3 transition-colors" />
                      <p>Click on a question above to get AI-powered guidance</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}