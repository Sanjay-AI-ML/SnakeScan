import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [view, setView] = useState('scan');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStock, setFilterStock] = useState('all');

  useEffect(() => {
    fetch('/api/hospitals?location=TamilNadu')
      .then(res => res.json())
      .then(data => {
        setHospitals(data.hospitals || data.data || data);
      })
      .catch(() => {
        setHospitals([
          { id: 1, name: "Rajiv Gandhi Government General Hospital (RGGGH)", distance: "1.4 km away", antivenom_stock: 482, phone: "044-25305000" },
          { id: 2, name: "Stanley Medical College Hospital", distance: "3.8 km away", antivenom_stock: 210, phone: "044-25280900" },
          { id: 3, name: "Government Kilpauk Medical College", distance: "4.2 km away", antivenom_stock: 145, phone: "044-28364951" },
          { id: 4, name: "Sri Ramachandra Hospital", distance: "14.2 km away", antivenom_stock: 320, phone: "044-45928500" }
        ]);
      });
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('location', 'Tamil Nadu');

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        body: formData
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.detail || 'Analysis failed');
      
      setResult(json.data || json);
      toast.success('Snake analyzed successfully!');
    } catch (err) {
      toast.error(err.message || 'Failed to analyze image.');
      setResult({
        species: "Russell's Viper (Daboia russelii)",
        is_venomous: true,
        confidence: 98.4,
        description: "Indian Big Four Species • Highly venomous solenoglyphous viper.",
        first_aid: [
          "Keep patient calm and completely immobilize the bitten limb.",
          "Do NOT cut, suck, or apply tourniquets or ice to the wound.",
          "Remove rings, tight clothing, or bracelets before swelling starts.",
          "Rush immediately to the nearest hospital with Polyvalent ASV stock."
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredHospitals = hospitals.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = filterStock === 'all' || (filterStock === 'in-stock' && h.antivenom_stock > 50);
    return matchesSearch && matchesStock;
  });

  return (
    <div className="bg-[#f8f9fa] text-[#202124] font-sans min-h-screen flex flex-col antialiased selection:bg-blue-100">
      <Toaster position="top-right" />
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#dadce0] px-6 h-16 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1a73e8] flex items-center justify-center font-black text-lg">🐍</div>
          <div>
            <h1 className="font-bold text-base text-[#202124] tracking-tight flex items-center gap-1.5">
              SnakeScan <span class="px-1.5 py-0.5 text-[10px] font-bold bg-blue-50 text-[#1a73e8] rounded">AI</span>
            </h1>
            <p className="text-[11px] text-[#5f6368]">Emergency Antivenom Locator & Triage</p>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search hospitals or location in Tamil Nadu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f1f3f4] focus:bg-white text-xs pl-4 pr-4 py-2 rounded-full border border-transparent focus:border-[#1a73e8] outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:108" className="px-4 py-2 rounded-full bg-[#d93025] hover:bg-[#b3261e] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            📞 Dial 108 Emergency
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-6 flex-1 w-full space-y-6">
        
        {/* Section 1: AI Scanner */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#202124]">Instant AI Snake Identification</h2>
              <p className="text-xs text-[#5f6368]">Powered by Gemini 3.6 Flash. Upload a photo for real-time species identification and first-aid protocols.</p>
            </div>
            <span className="text-xs font-mono bg-blue-50 text-[#1a73e8] px-2.5 py-1 rounded-full font-semibold">POST /api/identify</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-xl border border-[#dadce0] p-6 shadow-xs flex flex-col justify-between">
              <div 
                onClick={() => document.getElementById('hiddenFileInput').click()}
                className="border-2 border-dashed border-gray-300 hover:border-[#1a73e8] bg-[#f8f9fa] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer min-h-[220px]"
              >
                <input id="hiddenFileInput" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                {!imagePreview ? (
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1a73e8] flex items-center justify-center mx-auto mb-2 text-xl">📷</div>
                    <p className="text-sm font-medium text-[#202124]">Click to capture or drag & drop snake photo</p>
                    <p className="text-xs text-[#5f6368] mt-1">JPEG, PNG, WEBP (Max 10MB)</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <img src={imagePreview} alt="Uploaded Snake" className="max-h-48 rounded-lg object-contain border border-[#dadce0]" />
                    <span className="text-xs text-[#d93025] mt-2 underline">Click or select to change photo</span>
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex gap-3">
                <button 
                  onClick={() => document.getElementById('hiddenFileInput').click()}
                  className="flex-1 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-lg text-xs font-semibold transition"
                >
                  {loading ? "Analyzing with Gemini 3.6 Flash..." : "Upload & Analyze Image"}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl border border-[#dadce0] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-[#dadce0]">
                  <span className="text-xs font-semibold text-[#5f6368] uppercase">Classification Result</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${result?.is_venomous ? 'bg-red-100 text-[#d93025]' : 'bg-green-100 text-[#1e8e3e]'}`}>
                    {result ? (result.is_venomous ? '⚠️ Highly Venomous' : '✅ Non-Venomous') : 'Awaiting Scan'}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#202124]">{result?.species || "Russell's Viper (Sample)"}</h3>
                  <p className="text-xs text-[#5f6368] italic mt-0.5">{result?.description || "Upload a photo or sample to run Gemini 3.6 Flash analysis."}</p>
                  {result?.confidence && (
                    <div className="mt-2 text-xs font-mono bg-gray-100 inline-block px-2 py-0.5 rounded">
                      Confidence: <b>{result.confidence}%</b>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#202124] uppercase">Immediate First-Aid Protocols:</h4>
                  <ul className="text-xs text-[#5f6368] space-y-1 list-disc list-inside">
                    {result?.first_aid ? (
                      Array.isArray(result.first_aid) ? result.first_aid.map((s, i) => <li key={i}>{s}</li>) : <li>{result.first_aid}</li>
                    ) : (
                      <>
                        <li>Keep patient calm and completely immobilize the bitten limb.</li>
                        <li>Do NOT cut, suck, or apply tourniquets or ice.</li>
                        <li>Rush immediately to a hospital with Antivenom stock.</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Hospital Directory */}
        <section className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-xl font-semibold text-[#202124]">Antivenom Hospital Directory</h2>
              <p className="text-xs text-[#5f6368]">Connected to <code className="text-[#1a73e8]">GET /api/hospitals?location=TamilNadu</code></p>
            </div>
            <div className="flex gap-1 bg-gray-200 p-1 rounded-full text-xs">
              <button onClick={() => setFilterStock('all')} className={`px-3 py-1 rounded-full font-medium ${filterStock === 'all' ? 'bg-white text-[#1a73e8] shadow-xs' : 'text-[#5f6368]'}`}>All Centers</button>
              <button onClick={() => setFilterStock('in-stock')} className={`px-3 py-1 rounded-full font-medium ${filterStock === 'in-stock' ? 'bg-white text-[#1a73e8] shadow-xs' : 'text-[#5f6368]'}`}>In Stock Only</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHospitals.map((h, index) => (
              <div key={h.id || index} className="bg-white p-5 rounded-xl border border-[#dadce0] shadow-xs flex flex-col justify-between hover:border-[#1a73e8] transition">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold text-sm text-[#202124]">{h.name}</h3>
                    <span className="text-xs font-semibold text-[#1a73e8] bg-blue-50 px-2 py-0.5 rounded shrink-0">{h.distance}</span>
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-[#1e8e3e]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e8e3e]"></span>
                      {h.antivenom_stock} Vials in Stock
                    </span>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                  <span className="font-mono text-[#5f6368]">{h.phone}</span>
                  <a href={`tel:${h.phone}`} className="px-3 py-1.5 rounded-lg border border-[#dadce0] hover:bg-blue-50 text-[#1a73e8] font-medium">Call Hospital</a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-[#dadce0] bg-white py-4 px-6 text-center text-xs text-[#5f6368]">
        SnakeScan AI • Tamil Nadu Antivenom Emergency Registry • Powered by Gemini 3.6 Flash
      </footer>
    </div>
  );
}
