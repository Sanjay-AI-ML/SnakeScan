import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ProfileSetup() {
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  const handleComplete = () => {
    // Force set local flags so the app knows setup is finished
    localStorage.setItem('setupComplete', 'true');
    localStorage.setItem('preferredLanguage', language);
    
    toast.success('Welcome to SnakeScan!');
    
    // Force full reload to main dashboard route
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-center">Response language</h2>
        <p className="text-sm text-slate-400 text-center">Patient-facing messages will be in this language</p>
        
        <div className="grid grid-cols-2 gap-4">
          {['Hindi', 'English', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Gujarati', 'Kannada', 'Malayalam', 'Odia'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`p-4 rounded-xl border text-left transition ${language === lang ? 'border-emerald-500 bg-emerald-950/20 text-white font-bold' : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'}`}
            >
              {lang}
            </button>
          ))}
        </div>

        <button
          onClick={handleComplete}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition shadow-lg shadow-emerald-950/40 text-center text-white"
        >
          Start SnakeScan
        </button>
      </div>
    </div>
  );
}
