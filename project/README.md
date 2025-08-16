# SkillCircuit - Tech Career Development Platform

A comprehensive, AI-powered platform for tech professionals to accelerate their career development through structured roadmaps, mock interviews, resume optimization, and smart job applications.

## 🚀 Features

### Dynamic AI-Curated Roadmaps
- **Personalized Learning Paths**: Data Science, Software Engineering, Cybersecurity, and Web3/Blockchain
- **AI-Powered Guidance**: Interactive roadmaps powered by Perplexity API for up-to-date industry insights
- **Progress Tracking**: Monitor your learning journey with detailed analytics

### AI Mock Interview Coach
- **Realistic Interview Practice**: Technical, behavioral, system design, and leadership interviews
- **Real-time Feedback**: AI-powered coaching using Gemini Pro API
- **Performance Analytics**: Track improvement and identify areas for growth

### Resume Builder & Optimizer
- **ATS Scoring**: Get scored by the same systems used by employers
- **AI Optimization**: Personalized suggestions for improvement using Gemini Pro API
- **Keyword Analysis**: Ensure your resume contains the right keywords for your target role

### Smart Job Board
- **AI-Powered Matching**: Find roles that match your skills and preferences
- **Auto-Apply Feature**: AI-generated cover letters and automated applications
- **Application Tracking**: Monitor your job search progress and success rate

### Personalized Dashboard
- **Progress Tracking**: Daily streaks, skill mastery, and goal completion
- **Analytics**: Comprehensive insights into your career development journey
- **Quick Actions**: Easy access to all platform features

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for modern, responsive styling
- **Lucide React** for beautiful icons
- **React Router** for seamless navigation

### Backend (Ready for Integration)
- **Node.js & Express.js** REST API architecture
- **JWT Authentication** for secure user sessions
- **MongoDB** for flexible data storage
- **File Upload** support for resume processing

### AI Integrations
- **Perplexity API**: Dynamic roadmap content and career guidance
- **Gemini Pro API**: Mock interview coaching and resume optimization
- **Resume Parser API**: ATS scoring and keyword analysis
- **Job Aggregation API**: Real-time job listings from multiple sources

## 📝 API Configuration

The application requires several API keys for full functionality:

```env
# AI Services
PERPLEXITY_API_KEY=your_perplexity_api_key
GEMINI_PRO_API_KEY=your_gemini_pro_api_key

# Resume Processing
RESUME_PARSER_API_KEY=your_resume_parser_api_key

# Job Services
JOB_AGGREGATION_API_KEY=your_job_aggregation_api_key

# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skillcircuit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your API keys and configuration

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   └── layout/         # Layout components (Navbar, etc.)
├── contexts/           # React contexts (Auth, etc.)
├── pages/              # Page components
│   ├── auth/          # Login/Register pages
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Roadmaps.tsx   # Learning roadmaps
│   ├── MockInterview.tsx # Interview practice
│   ├── ResumeBuilder.tsx # Resume optimization
│   └── JobBoard.tsx   # Job search and applications
├── hooks/             # Custom React hooks
├── services/          # API services
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563EB) to Purple (#7C3AED) gradient
- **Secondary**: Teal (#0D9488)
- **Accent**: Orange (#F97316)
- **Success**: Green (#059669)
- **Warning**: Yellow (#D97706)
- **Error**: Red (#DC2626)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: 150% line height for readability
- **Code**: Monospace for technical content

### Layout
- **8px spacing system** for consistent alignment
- **Responsive grid** with mobile-first approach
- **Card-based design** with subtle shadows and hover states

## 🔒 Security Features

- **JWT-based authentication** with secure token handling
- **Protected routes** for authenticated users only
- **Input validation** and sanitization
- **Secure file uploads** with type checking
- **HTTPS enforcement** in production

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile devices** (320px - 767px)
- **Tablets** (768px - 1023px)
- **Desktops** (1024px and above)

## 🧪 Testing

Run the test suite with:
```bash
npm run test
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Cloud Platforms
The application is ready for deployment on:
- **Vercel** (Recommended for frontend)
- **Netlify**
- **AWS Amplify**
- **Heroku** (Full-stack with backend)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for AI-powered features
- **Perplexity** for dynamic content generation
- **Tailwind CSS** for the design system
- **React team** for the amazing framework
- **Lucide** for beautiful icons

## 📞 Support

For support and questions:
- 📧 Email: support@skillcircuit.com
- 💬 Discord: [Join our community](https://discord.gg/skillcircuit)
- 📚 Documentation: [docs.skillcircuit.com](https://docs.skillcircuit.com)

---

Built with ❤️ for the tech community