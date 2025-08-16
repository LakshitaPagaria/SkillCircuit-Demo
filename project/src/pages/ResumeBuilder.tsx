import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Download, 
  Star, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Zap,
  Eye,
  RefreshCw
} from 'lucide-react';

export function ResumeBuilder() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setIsAnalyzing(true);
      
      // Simulate API call for resume analysis
      setTimeout(() => {
        setAnalysisResult({
          atsScore: 78,
          overallGrade: 'B+',
          strengths: [
            'Strong technical skills section',
            'Quantified achievements',
            'Relevant experience highlighted',
            'Good use of action verbs'
          ],
          weaknesses: [
            'Missing keywords for target role',
            'Some formatting inconsistencies',
            'Could use more industry-specific terms',
            'Contact information could be more prominent'
          ],
          suggestions: [
            'Add more React and Node.js keywords',
            'Include cloud computing experience',
            'Highlight leadership and team collaboration',
            'Add metrics to demonstrate impact'
          ],
          keywordAnalysis: {
            present: ['JavaScript', 'Python', 'Git', 'Agile'],
            missing: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
            score: 65
          }
        });
        setIsAnalyzing(false);
      }, 3000);
    }
  };

  const optimizeResume = async () => {
    setIsOptimizing(true);
    // Simulate AI optimization
    setTimeout(() => {
      setAnalysisResult(prev => ({
        ...prev,
        atsScore: 92,
        overallGrade: 'A',
        optimized: true
      }));
      setIsOptimizing(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 perspective-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="floating-element absolute top-0 right-1/4 w-20 h-20 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-xl"></div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            AI Resume Builder & Optimizer
          </h1>
          <p className="text-xl text-slate-600">
            Get ATS scores, AI-powered suggestions, and optimize your resume for any role
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <div className="card-3d bg-white rounded-xl border border-slate-100 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Upload Resume</h2>
              
              {!resumeFile ? (
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-all transform hover:scale-102 shadow-inner">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">Click to upload your resume</p>
                    <p className="text-xs text-slate-500">Supports PDF, DOC, DOCX</p>
                  </label>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 shadow-md depth-layer-1">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">{resumeFile.name}</p>
                      <p className="text-xs text-blue-600">
                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isAnalyzing && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 shadow-md depth-layer-1">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="w-5 h-5 text-yellow-600 animate-spin" />
                    <div>
                      <p className="text-sm font-medium text-yellow-900">Analyzing Resume</p>
                      <p className="text-xs text-yellow-600">This may take a few moments...</p>
                    </div>
                  </div>
                </div>
              )}

              {analysisResult && !isAnalyzing && (
                <div className="mt-6">
                  <div className="gradient-border rounded-lg mb-4">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">ATS Score</span>
                      <span className={`text-2xl font-bold ${
                        analysisResult.atsScore >= 80 ? 'text-green-600' : 
                        analysisResult.atsScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {analysisResult.atsScore}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-2 shadow-inner">
                      <div 
                        className={`h-2 rounded-full shadow-sm ${
                          analysisResult.atsScore >= 80 ? 'bg-green-500' : 
                          analysisResult.atsScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${analysisResult.atsScore}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-600">Overall Grade: {analysisResult.overallGrade}</p>
                    </div>
                  </div>

                  {!analysisResult.optimized && (
                    <button
                      onClick={optimizeResume}
                      disabled={isOptimizing}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {isOptimizing ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Optimizing...</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          <span>AI Optimize</span>
                        </>
                      )}
                    </button>
                  )}

                  {analysisResult.optimized && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 shadow-md depth-layer-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-900">
                          Resume Optimized Successfully!
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            {analysisResult && (
              <div className="card-3d bg-white rounded-xl border border-slate-100 p-6 mt-6">
                <h3 className="font-semibold text-slate-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all transform hover:scale-102 shadow-sm hover:shadow-md">
                    <Download className="w-5 h-5 text-slate-600" />
                    <span className="text-sm text-slate-700">Download Optimized</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all transform hover:scale-102 shadow-sm hover:shadow-md">
                    <Eye className="w-5 h-5 text-slate-600" />
                    <span className="text-sm text-slate-700">Preview Changes</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all transform hover:scale-102 shadow-sm hover:shadow-md">
                    <FileText className="w-5 h-5 text-slate-600" />
                    <span className="text-sm text-slate-700">Create New Version</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Results */}
          <div className="lg:col-span-2">
            {analysisResult ? (
              <div className="space-y-6">
                {/* Strengths & Weaknesses */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-3d bg-white rounded-xl border border-slate-100 p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-slate-900">Strengths</h3>
                    </div>
                    <div className="space-y-3">
                      {analysisResult.strengths.map((strength: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                          <p className="text-sm text-slate-700">{strength}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-3d bg-white rounded-xl border border-slate-100 p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <h3 className="font-semibold text-slate-900">Areas to Improve</h3>
                    </div>
                    <div className="space-y-3">
                      {analysisResult.weaknesses.map((weakness: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                          <p className="text-sm text-slate-700">{weakness}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Suggestions */}
                <div className="card-3d bg-white rounded-xl border border-slate-100 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-slate-900">AI Optimization Suggestions</h3>
                  </div>
                  <div className="space-y-4">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <div key={index} className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm depth-layer-1">
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-purple-900 font-medium">{suggestion}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keyword Analysis */}
                <div className="card-3d bg-white rounded-xl border border-slate-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Keyword Analysis</h3>
                    <div className="text-sm text-slate-600">
                      Score: <span className="font-bold text-blue-600">{analysisResult.keywordAnalysis.score}%</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-green-600 mb-3">Present Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.keywordAnalysis.present.map((keyword: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium shadow-sm transform hover:scale-105 transition-all">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-red-600 mb-3">Missing Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.keywordAnalysis.missing.map((keyword: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium shadow-sm transform hover:scale-105 transition-all">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-3d bg-white rounded-xl border border-slate-100 p-12">
                <div className="text-center text-slate-500">
                  <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No Resume Uploaded</h3>
                  <p className="text-slate-600 mb-6">
                    Upload your resume to get detailed analysis, ATS scoring, and AI-powered optimization suggestions.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg tilt-card shadow-md">
                      <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-blue-900">ATS Scoring</p>
                      <p className="text-blue-600">Get scored by the same systems used by employers</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg tilt-card shadow-md">
                      <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <p className="font-medium text-purple-900">AI Optimization</p>
                      <p className="text-purple-600">Receive personalized suggestions for improvement</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg tilt-card shadow-md">
                      <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="font-medium text-green-900">Keyword Analysis</p>
                      <p className="text-green-600">Ensure you have the right keywords for your target role</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}