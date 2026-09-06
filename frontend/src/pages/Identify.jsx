import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import toast from 'react-hot-toast';

export default function Identify() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [showHospitals, setShowHospitals] = useState(false);

  useEffect(() => {
    fetch('/api/hospitals')
      .then(res => res.json())
      .then(data => setHospitals(data.hospitals || []))
      .catch(() => console.error("Could not load hospitals"));
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setLoading(true);
    setResult(null); // Clear old results

    const formData = new FormData();
    formData.append('file', file);
    formData.append('location', 'Tamil Nadu');

    try {
      const token = localStorage.getItem('token');
      const res = await api.identifySnake(formData, token);
      
      const data = res.data || res.result || res;
      
      // Ensure the response actually has snake data
      if (!data || !data.species) {
         throw new Error("Invalid response format from AI");
      }
      
      setResult(data);
      toast.success('Snake analyzed successfully!');
    } catch (err) {
      console.error('Scan error:', err);
      setResult(null); // CRITICAL: Ensure card stays hidden on error
      toast.error(err.message || 'Vertex AI Error: Could not identify snake.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setImagePreview(null);
    setShowHospitals(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 text-white space-y-6">
      {!imagePreview && !loading && (
        <div className="border-2 border-dashed border-emerald-500/40 bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[320px]">
          <h2 className="text-2xl font-bold mb-2">Upload or Capture Snake Photo</h2>
          <label className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl transition mt-4">
            Select Snake Image
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        </div>
      )}

      {loading && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
          <p className="text-lg font-semibold text-emerald-400">Analyzing image with Vertex AI Gemini 1.5 Flash...</p>
        </div>
      )}

      {imagePreview && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center">
            <div className="w-full h-80 rounded-xl overflow-hidden bg-black border border-slate-800">
              <img src={imagePreview} alt="Uploaded" className="w-full h-full object-contain" />
            </div>
            <button onClick={handleReset} className="mt-4 w-full py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-bold text-slate-300">
              Upload Different Image
            </button>
          </div>

          {result && (
            <div className={`p-6 rounded-2xl border ${result.is_venomous ? 'bg-red-950/30 border-red-800/80' : 'bg-emerald-950/30 border-emerald-800/80'} space-y-5 flex flex-col justify-between`}>
              <div>
                <div className="flex justify-between items-start gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                      {result.confidence}% Confidence
                    </span>
                    <h2 className="text-2xl font-extrabold text-white mt-1">
                      {result.species}
                    </h2>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full font-bold text-xs ${result.is_venomous ? 'bg-red-600' : 'bg-emerald-600'}`}>
                    {result.is_venomous ? '⚠️ Venomous' : '✅ Non-venomous'}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-slate-300 leading-relaxed">{result.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
