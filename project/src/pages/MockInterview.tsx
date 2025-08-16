import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Settings,
  Clock,
  Star,
  TrendingUp,
  User,
  Bot
} from 'lucide-react';

export function MockInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [interviewType, setInterviewType] = useState('technical');
  const [difficulty, setDifficulty] = useState('intermediate');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState<Array<{
    type: 'bot' | 'user';
    content: string;
    timestamp: Date;
    feedback?: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const interviewTypes = [
    { value: 'technical', label: 'Technical Interview', description: 'Coding problems and system design' },
    { value: 'behavioral', label: 'Behavioral Interview', description: 'Soft skills and experience' },
    { value: 'system-design', label: 'System Design', description: 'Architecture and scalability' },
    { value: 'leadership', label: 'Leadership', description: 'Management and team skills' }
  ];

  const sampleQuestions = {
    technical: [
      'Explain the difference between let, const, and var in JavaScript.',
      'How would you implement a function to reverse a linked list?',
      'What is the time complexity of quicksort and when might you use it?'
    ],
    behavioral: [
      'Tell me about a time when you had to work with a difficult team member.',
      'Describe a challenging project you worked on and how you overcame obstacles.',
      'How do you handle tight deadlines and competing priorities?'
    ],
    'system-design': [
      'Design a URL shortening service like bit.ly.',
      'How would you design a chat messaging system?',
      'Explain how you would scale a web application to handle millions of users.'
    ]
  };

  const mockResponses = [
    "Great question! Let me think about this for a moment...",
    "That's an excellent answer! I particularly liked how you explained the concept with a real-world example. Your understanding of the fundamentals is solid.",
    "Good approach, but let me give you some feedback on how to make your answer even stronger...",
    "Perfect! You demonstrated both technical knowledge and practical application. This shows you can think beyond just the code."
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startInterview = () => {
    const questions = sampleQuestions[interviewType as keyof typeof sampleQuestions] || sampleQuestions.technical;
    const welcomeMessage = {
      type: 'bot' as const,
      content: `Hello! I'm your AI interview coach. Today we'll be conducting a ${interviewType} interview. I'll ask you questions and provide real-time feedback. Let's start with our first question: ${questions[0]}`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    setCurrentQuestion(0);
    setIsPlaying(true);
  };

  const handleUserResponse = (response: string) => {
    const userMessage = {
      type: 'user' as const,
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const feedback = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const questions = sampleQuestions[interviewType as keyof typeof sampleQuestions] || sampleQuestions.technical;
      const nextQuestion = currentQuestion + 1;
      
      const botResponse = {
        type: 'bot' as const,
        content: feedback + (nextQuestion < questions.length ? ` Let's move to the next question: ${questions[nextQuestion]}` : ' That completes our interview session. Great job today!'),
        timestamp: new Date(),
        feedback: 'Strong technical explanation with good examples'
      };

      setMessages(prev => [...prev, botResponse]);
      setCurrentQuestion(nextQuestion);
      setIsLoading(false);
    }, 2000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate user speaking and then providing a response
      setTimeout(() => {
        setIsRecording(false);
        handleUserResponse("In JavaScript, let and const are block-scoped while var is function-scoped. const creates immutable bindings, meaning you can't reassign the variable, while let allows reassignment. var has some quirks like hoisting that can lead to unexpected behavior, which is why modern JavaScript prefers let and const.");
      }, 3000);
    }
  };

  const resetInterview = () => {
    setMessages([]);
    setCurrentQuestion(0);
    setIsPlaying(false);
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 perspective-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="floating-element absolute top-0 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-xl"></div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            AI Mock Interview Coach
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors">
            Practice with AI-powered interviews and get real-time feedback
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 mb-6 transition-colors">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                <h3 className="font-semibold text-slate-900 dark:text-white transition-colors">Interview Settings</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                    Interview Type
                  </label>
                  <select
                    value={interviewType}
                    onChange={(e) => setInterviewType(e.target.value)}
                    className="w-full p-3 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition-all shadow-md focus:shadow-lg"
                  >
                    {interviewTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors">
                    {interviewTypes.find(t => t.value === interviewType)?.description}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                    Difficulty Level
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full p-3 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition-all shadow-md focus:shadow-lg"
                  >
                    <option value="junior">Junior Level</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="senior">Senior Level</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 transition-colors">
                <div className="flex space-x-2">
                  {!isPlaying ? (
                    <button
                      onClick={startInterview}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start Interview</span>
                    </button>
                  ) : (
                    <button
                      onClick={resetInterview}
                      className="flex-1 glass-morphism text-slate-600 dark:text-slate-300 px-4 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-md"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 transition-colors">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 transition-colors">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Interviews Completed</span>
                  <span className="font-semibold text-slate-900 dark:text-white transition-colors">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Average Score</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-slate-900 dark:text-white transition-colors">4.2</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Improvement</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">+12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Interview Area */}
          <div className="lg:col-span-3">
            <div className="card-3d bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 border-b border-slate-200 dark:border-slate-700 transition-colors depth-layer-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center depth-layer-2 shadow-lg">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white transition-colors">AI Interview Coach</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
                        {interviewType.charAt(0).toUpperCase() + interviewType.slice(1)} Interview • {difficulty} level
                      </p>
                    </div>
                  </div>
                  {isPlaying && (
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 transition-colors">
                      <Clock className="w-4 h-4" />
                      <span>Question {currentQuestion + 1}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-slate-500 dark:text-slate-400 h-full flex items-center justify-center transition-colors">
                    <div>
                      <MessageSquare className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3 transition-colors" />
                      <p>Click "Start Interview" to begin your practice session</p>
                    </div>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-sm rounded-lg p-4 shadow-lg transform hover:scale-102 transition-all ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white depth-layer-2'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white transition-colors depth-layer-1'
                        }`}
                      >
                        <div className="flex items-start space-x-2 mb-2">
                          {message.type === 'bot' ? (
                            <Bot className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <User className="w-4 h-4 text-blue-100 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            {message.feedback && (
                              <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-xs text-green-700 dark:text-green-400 transition-colors shadow-sm">
                                <strong>Feedback:</strong> {message.feedback}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`text-xs ${message.type === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white max-w-sm rounded-lg p-4 transition-colors shadow-lg depth-layer-1">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Voice Input */}
              {isPlaying && (
                <div className="p-6 border-t border-slate-200 dark:border-slate-700 glass-morphism transition-colors">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={toggleRecording}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-xl transform hover:scale-110 depth-layer-3 ${
                        isRecording
                          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isRecording ? (
                        <MicOff className="w-6 h-6 text-white" />
                      ) : (
                        <Mic className="w-6 h-6 text-white" />
                      )}
                    </button>
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                        {isRecording ? 'Recording...' : 'Click to speak your answer'}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                        Voice input will be transcribed automatically
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}