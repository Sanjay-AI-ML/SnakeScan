# SnakeScan — AI Snakebite Response System
### Google Gen AI Academy APAC Ideathon | #AccelerateAIwithCloudRun

---

## One Line

**Photograph a snake. Get the correct antivenom and nearest hospital in 30 seconds.**

---

## The Problem

India has 58,000 snakebite deaths per year. The primary cause is not the venom — it is the wrong antivenom, given by doctors who cannot identify the species.

There are 300+ snake species in India. Each requires a different treatment protocol. A rural MBBS doctor sees a bite victim with no description of the snake. They guess. The patient dies.

SnakeScan eliminates the guess.

---

## How It Uses Google Technologies

### Firebase Authentication
Google OAuth and email sign-in. Role-based profiles: doctors get full clinical protocol, ASHA workers get simplified guidance, general public get life-saving basics. Every API endpoint verifies Firebase ID tokens.

### Firestore
Per-user storage:
- `profile/data` — role, state, language (drives Bayesian priors)
- `profile/system_prompt` — per-region, per-role AI persona (regenerated on profile change)
- `identifications/{id}` — every snake photo result, thinking chain, treatment given
- `corrections/{id}` — expert corrections that improve the system

Global anonymized datasets (no PII):
- `global_dataset/` — anonymized identification results for population-level learning
- `global_corrections/` — expert corrections for model improvement

### Gemini API (AI Studio) — ALL 6 FEATURES

**1. Vision** — Snake photograph → species identification  
Analyzes: scale pattern, head shape, dorsal pattern, body proportions, coloration

**2. Thinking Mode** — The killer demo feature  
Users SEE the AI reason through the identification: "Scale pattern = keeled elliptical → pit viper family... Head shape = triangular → venomous confirmed... Chain dorsal pattern + Maharashtra region = Russell's Viper 94%..."  
Doctors trust a system that shows its work.

**3. Custom Instructions (System Instructions)**  
Per-user AI persona from Firestore: regional Bayesian species priors (Russell's Viper is 45% of bites in Maharashtra but only 25% in Kerala), user role, output language. Every user's SnakeScan is calibrated to their region.

**4. Google Search Grounding**  
Live hospital antivenom stock, WHO treatment protocol updates, regional species distribution data, government health advisories.

**5. Function Calling**  
`find_hospitals(state, antivenom_type)` — finds nearest hospitals with stock  
`get_emergency_number(state)` — state-specific ambulance numbers

**6. Structured Output**  
Returns: `{species, confidence, venom_severity, antivenom, dose, complications[], first_aid[], thinking_steps[], nearest_hospitals[], time_critical}`

### Cloud Run
Single containerized FastAPI + React. Multi-stage Docker build. Public HTTPS URL. Auto-scales to zero.

---

## Architecture

```
User (Doctor / ASHA Worker / Public)
         │
         ▼
Cloud Run (FastAPI + React)
         │
         ├── Firebase Auth ──── token verify per request, role-based access
         │
         ├── Firestore ─────────┬── users/{uid}/profile/data
         │                      ├── users/{uid}/profile/system_prompt  ← Bayesian priors
         │                      ├── users/{uid}/identifications/{id}   ← thinking chain
         │                      └── global_dataset/{id}               ← anonymized
         │
         ├── Firebase Storage ── snakes/{uid}/{id}.jpg
         │
         └── Gemini API (AI Studio)
               ├── Vision: snake photo → species ID
               ├── Thinking: visible reasoning chain
               ├── Custom Instructions: regional Bayesian priors per user
               ├── Grounding: live hospital data + WHO protocols
               ├── Function calling: nearest hospital lookup
               └── Structured output: full treatment JSON
```

---

## Species Database (Embedded)

The 5 medically significant species that cause 95% of India's snakebite deaths, with WHO-sourced treatment protocols:

| Species | Venom | Antivenom | Window |
|---|---|---|---|
| Russell's Viper | Hemotoxic | Polyvalent (PSAV) 10 vials | 6h |
| Indian Cobra | Neurotoxic | Polyvalent (PSAV) 10 vials | 1-2h |
| Common Krait | Neurotoxic | Polyvalent — often painless bite! | Immediate |
| Saw-scaled Viper | Hemotoxic | Polyvalent (PSAV) 10 vials | 6-12h |
| King Cobra | Neuro+Cytotoxic | King Cobra specific (rare) | 1-2h |

---

## Local Development

```bash
git clone https://github.com/YOUR_USERNAME/snakescan
cd snakescan

# Backend
cd backend
pip install -r requirements.txt
# .env: GEMINI_API_KEY, FIREBASE_PROJECT_ID, STORAGE_BUCKET, GOOGLE_APPLICATION_CREDENTIALS
uvicorn app.main:app --reload --port 8000

# Frontend
cd frontend && npm install
# Edit src/firebase.config.js
npm run dev
```

---

## Deploy

```bat
REM Edit PROJECT_ID and GEMINI_API_KEY at top of file
deploy.bat
```

Add Cloud Run URL to Firebase Auth → Authorized Domains after deploy.

---

## Submission Description

SnakeScan identifies venomous snakes from a photograph and provides the correct antivenom protocol and nearest hospital in 30 seconds — addressing India's 58,000 annual snakebite deaths, most caused by wrong treatment. Each authenticated user (doctor, ASHA worker, or general public) gets a personalized AI identification system (system instruction in Firestore) with regional Bayesian species priors calibrated to their state — Russell's Viper is 45% of bites in Maharashtra, different species dominate in Kerala and West Bengal. Gemini's Thinking Mode generates a visible step-by-step reasoning chain as it analyzes scale patterns, head shape, dorsal markings, and regional probability — doctors see the AI reason, which builds the trust needed for medical decisions. Google Search grounding finds live hospital antivenom stock and WHO protocol updates. Function calling locates nearest hospitals. Every identification is stored in Firestore with its full thinking chain. An anonymized global dataset builds with each use, creating India's first snakebite AI database. Firebase Authentication gates all access. Cloud Run serves the full-stack container.

Built with: Firebase Authentication, Cloud Firestore, Firebase Storage, Gemini 2.0 Flash Thinking + Vision + Custom Instructions + Grounding + Function Calling + Structured Output (AI Studio), Google Cloud Run, Secret Manager.

**Live:** [Cloud Run URL] | **Demo:** [LinkedIn/X post] | **Code:** [GitHub repo]

#AccelerateAIwithCloudRun
