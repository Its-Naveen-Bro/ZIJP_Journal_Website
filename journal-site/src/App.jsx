import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SubmitResearch from './pages/SubmitResearch';
import ResearchGuidelines from './pages/ResearchGuidelines';
import PublicationCharges from './pages/PublicationCharges';
import UploadDocuments from './pages/UploadDocuments';
import Issues2026 from './pages/Issues2026';
import Issues2025 from './pages/Issues2025';
import Issues2024 from './pages/Issues2024';
import CurrentIssue from './pages/CurrentIssue';
import './App.css';












function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/submit-research" element={<SubmitResearch />} />
            <Route path="/research-guidelines" element={<ResearchGuidelines />} />
            <Route path="/publication-charges" element={<PublicationCharges />} />
            <Route path="/upload-documents" element={<UploadDocuments />} />
            <Route path="/2026-issues" element={<Issues2026 />} />
            <Route path="/2025-issues" element={<Issues2025 />} />
            <Route path="/2024-issues" element={<Issues2024 />} />
            <Route path="/volume-10-issue-1" element={<CurrentIssue />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;