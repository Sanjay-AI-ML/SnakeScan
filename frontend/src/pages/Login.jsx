<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>SnakeScan - Emergency Snake Identification &amp; Antivenom Locator</title>
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "google-blue": "#1a73e8",
            "google-blue-hover": "#1557b0",
            "google-red": "#d93025",
            "google-red-hover": "#b3261e",
            "google-green": "#1e8e3e",
            "google-green-hover": "#188038",
            "google-border": "#dadce0",
            "google-text-primary": "#202124",
            "google-text-secondary": "#5f6368",
            "google-bg": "#f8f9fa",
            "google-surface": "#ffffff",
          },
          fontFamily: {
            sans: ['Roboto', 'Arial', 'sans-serif'],
          },
          boxShadow: {
            'google-card': '0 1px 3px 0 rgba(60,64,67,0.08), 0 4px 8px 3px rgba(60,64,67,0.04)',
            'google-sm': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
          }
        }
      }
    };
  </script>
<style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
    }
  </style>
</head>
<body class="bg-google-bg text-google-text-primary min-h-screen flex flex-col justify-between antialiased selection:bg-[#c2e7ff] selection:text-google-text-primary">
<!-- Top Minimal Utility Bar -->
<header class="w-full px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-google-border/70 bg-google-surface sticky top-0 z-30 shadow-sm"><div class="flex items-center gap-3"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-lg overflow-hidden shadow-sm border border-google-blue/25 shrink-0 flex items-center justify-center bg-white"><img src="https://lh3.googleusercontent.com/aida/AEtjO1VW76eXLT8v964HFT8OJQnsbwLAz1_DLz74O9_KhDIIakehgkKibSGdMUBA7mmRnicW1We3hiJn9B5vH0cypi4hVgCMhlFLaI4Biocd6OgJ34eSryvyXgAqE9Qc__-iJld-cbHDhjBrwsehq6OfMr6zs6g1CT6ShEecFz_fqtLoOCXllvpiC_GAV6P8PF42vLPS4YHEvHJXFLWSFXXmR80Lk3lBgeckAvkAnnKlPDcVK9ToDIVXF6KFbg" alt="SnakeScan Logo" class="w-full h-full object-cover"></div><div class="flex flex-col"><div class="flex items-center gap-1.5"><span class="font-bold text-lg sm:text-xl text-google-text-primary tracking-tight">SnakeScan</span><span class="px-1.5 py-0.5 text-[10px] font-bold bg-google-blue/10 text-google-blue rounded border border-google-blue/25 leading-none uppercase">AI</span></div><span class="text-xs text-google-text-secondary font-normal truncate max-w-[260px] sm:max-w-none" id="header-subtitle">Instant Snake Identification &amp; Antivenom Locator</span></div></div></div>
<div class="flex items-center gap-3 sm:gap-4">
  <a class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fce8e6] text-[#a51d24] border border-[#f5c6cb] hover:bg-[#fad2cf] transition-colors text-xs font-semibold shadow-sm" href="tel:108">
    <span class="material-symbols-outlined text-base animate-pulse">call</span>
    <span class="font-bold">Emergency: Dial 108</span>
  </a>
  <div class="inline-flex items-center border border-google-border rounded-full p-0.5 bg-google-bg text-xs shadow-sm">
    <button class="px-3 py-1 rounded-full font-medium transition-colors bg-white text-google-blue shadow-sm" id="lang-en" onclick="setLanguage('en')">English</button>
    <button class="px-3 py-1 rounded-full font-medium transition-colors text-google-text-secondary hover:text-google-text-primary" id="lang-ta" onclick="setLanguage('ta')">தமிழ்</button>
  </div>
</div></header>
<!-- Main Container -->
<main class="flex-1 flex items-center justify-center px-4 py-6 sm:py-10"><div class="w-full max-w-[540px] space-y-4">
  <!-- Clean Emergency High-Contrast Action Banner -->
  <section aria-label="Emergency Access" class="bg-[#fce8e6] border border-[#f5c6cb] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
    <div class="flex items-start gap-3.5">
      <div class="w-10 h-10 rounded-xl bg-google-red/10 flex items-center justify-center text-google-red shrink-0 border border-google-red/20">
        <span class="material-symbols-outlined text-[24px]">emergency</span>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-[#a51d24]" id="emergency-banner-title">Emergency?</h2>
        <p class="text-xs text-[#5c1d24] mt-0.5 leading-relaxed" id="emergency-banner-sub">Identify a snake bite instantly without signing in. Instant triage &amp; antivenom lookup.</p>
      </div>
    </div>
    <button class="w-full sm:w-auto shrink-0 px-4 py-2.5 bg-google-red hover:bg-google-red-hover text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-google-red focus:ring-offset-2 flex items-center justify-center gap-1.5 active:scale-[0.98]" id="emergency-btn-text" onclick="triggerGuestScan()">
      <span class="">Start Emergency Scan</span>
      <span class="material-symbols-outlined text-base">photo_camera</span>
    </button>
  </section>

  <!-- Main Sign-In Card -->
  <div class="bg-google-surface border border-google-border rounded-2xl p-6 sm:p-7 shadow-google-card">
    <div class="mb-5">
      <h1 class="text-2xl font-normal text-google-text-primary tracking-tight" id="card-title">Sign in to SnakeScan</h1>
      <p class="text-xs sm:text-sm text-google-text-secondary mt-1" id="card-subtitle">Access your scan history and saved hospital alerts</p>
    </div>

    <!-- Clean Tabs: Sign In / Create Account -->
    <div class="flex border-b border-google-border mb-6 gap-2">
      <button class="pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 border-google-blue text-google-blue transition-colors flex items-center gap-1.5" id="tab-signin" onclick="switchAuthTab('signin')">
        <span class="material-symbols-outlined text-[18px]">login</span>
        <span id="tab-signin-text" class="">Sign In</span>
      </button>
      <button class="pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 border-transparent text-google-text-secondary hover:text-google-text-primary transition-colors flex items-center gap-1.5" id="tab-signup" onclick="switchAuthTab('signup')">
        <span class="material-symbols-outlined text-[18px]">person_add</span>
        <span id="tab-signup-text" class="">Create Account</span>
      </button>
    </div>

    <!-- Streamlined Auth Form -->
    <form class="space-y-4" onsubmit="event.preventDefault(); handleAuthSubmit();">
      <div id="name-field-wrapper" class="hidden">
        <label class="block text-xs font-medium text-google-text-secondary mb-1.5" for="auth-name">Full Name</label>
        <input class="w-full px-3.5 py-2.5 bg-white border border-google-border rounded-lg text-sm text-google-text-primary placeholder:text-google-text-secondary/60 focus:border-google-blue focus:ring-1 focus:ring-google-blue focus:outline-none transition-colors" id="auth-name" placeholder="Enter your name" type="text">
      </div>

      <div>
        <label class="block text-xs font-medium text-google-text-secondary mb-1.5" for="auth-email" id="lbl-email">Email or Mobile Number</label>
        <input class="w-full px-3.5 py-2.5 bg-white border border-google-border rounded-lg text-sm text-google-text-primary placeholder:text-google-text-secondary/60 focus:border-google-blue focus:ring-1 focus:ring-google-blue focus:outline-none transition-colors" id="auth-email" placeholder="name@example.com or 10-digit mobile" required="" type="text">
      </div>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label class="text-xs font-medium text-google-text-secondary" for="auth-password" id="lbl-password">Password</label>
          <button class="text-xs font-medium text-google-blue hover:underline flex items-center gap-1" id="eye-text" onclick="togglePasswordVisibility()" type="button">Show</button>
        </div>
        <input class="w-full px-3.5 py-2.5 bg-white border border-google-border rounded-lg text-sm text-google-text-primary placeholder:text-google-text-secondary/60 focus:border-google-blue focus:ring-1 focus:ring-google-blue focus:outline-none transition-colors" id="auth-password" placeholder="Enter your password" required="" type="password">
      </div>

      <div class="flex items-center justify-between pt-1" id="remember-row">
        <label class="flex items-center gap-2 cursor-pointer select-none">
          <input checked="" class="rounded border-google-border text-google-blue focus:ring-google-blue h-4 w-4" type="checkbox">
          <span class="text-xs text-google-text-secondary" id="chk-session">Remember me</span>
        </label>
        <a class="text-xs font-medium text-google-blue hover:underline" href="#" id="forgot-link" onclick="alert('A password reset link will be sent to your email.'); return false;">Forgot password?</a>
      </div>

      <button class="w-full py-2.5 bg-google-blue hover:bg-google-blue-hover text-white rounded-lg text-sm font-medium tracking-normal transition-colors shadow-google-sm flex items-center justify-center gap-1.5" id="btn-submit" type="submit">
        <span id="btn-submit-text" class="">Sign In</span>
        <span class="material-symbols-outlined text-base">arrow_forward</span>
      </button>

      <!-- Divider -->
      <div class="relative flex py-1 items-center">
        <div class="flex-grow border-t border-google-border"></div>
        <span class="flex-shrink mx-3 text-xs text-google-text-secondary font-medium uppercase tracking-wider">or continue as guest</span>
        <div class="flex-grow border-t border-google-border"></div>
      </div>

      <!-- Continue as Guest Secondary Button -->
      <button class="w-full py-2.5 px-4 bg-white border border-google-border hover:bg-google-bg text-google-text-primary rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm" onclick="triggerGuestScan()" type="button">
        <span class="material-symbols-outlined text-[18px] text-google-blue">person</span>
        <span class="">Continue as Guest</span>
      </button>

      <!-- 1-Tap Google Sign-in -->
      <button class="w-full py-2.5 px-4 bg-white border border-google-border hover:bg-google-bg text-google-text-primary rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2.5 shadow-sm" onclick="handleGoogleSignIn()" type="button">
        <svg class="w-4 h-4" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
        </svg>
        <span class="">Continue with Google</span>
      </button>
    </form>

    <!-- Quick Link to Antivenom Hospitals -->
    <div class="mt-5 pt-3.5 border-t border-google-border/60 flex items-center justify-between text-xs">
      <button class="font-medium text-google-blue hover:underline flex items-center gap-1.5" onclick="toggleDirectoryPreview()" type="button">
        <span class="material-symbols-outlined text-[18px] text-google-blue">local_hospital</span>
        <span class="">Find Antivenom Stock (/api/hospitals)</span>
      </button>
      <span class="text-google-text-secondary text-[11px] font-medium flex items-center gap-1">
        <span class="inline-block w-2 h-2 rounded-full bg-google-green"></span> Live Stock Available
      </span>
    </div>
  </div>

  <!-- ASV Directory Modal/Card (Clean Light Table) -->
  <div class="hidden bg-google-surface border border-google-border rounded-2xl p-5 shadow-google-card" id="directory-modal">
    <div class="flex items-center justify-between pb-3 border-b border-google-border">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-google-blue/10 flex items-center justify-center text-google-blue">
          <span class="material-symbols-outlined text-[18px]">local_hospital</span>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-google-text-primary">Antivenom Stock Locator</h3>
          <p class="text-[11px] text-google-text-secondary">Near your current location via /api/hospitals</p>
        </div>
      </div>
      <button class="text-google-text-secondary hover:text-google-text-primary text-xs font-semibold p-1" onclick="toggleDirectoryPreview()">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
    <div class="mt-3 space-y-2 max-h-56 overflow-y-auto pr-1">
      <div class="p-2.5 rounded-lg border border-google-border bg-google-bg flex items-center justify-between text-xs">
        <div>
          <div class="font-semibold text-google-text-primary">City Medical Center</div>
          <div class="text-[11px] text-google-text-secondary">Emergency Casualty Block • 1.4 km away</div>
        </div>
        <div class="text-right">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-800">142 Vials</span>
          <div class="text-[10px] text-google-text-secondary mt-0.5">Verified 12m ago</div>
        </div>
      </div>
      <div class="p-2.5 rounded-lg border border-google-border bg-google-bg flex items-center justify-between text-xs">
        <div>
          <div class="font-semibold text-google-text-primary">District General Hospital</div>
          <div class="text-[11px] text-google-text-secondary">Trauma Care Center • 14.8 km away</div>
        </div>
        <div class="text-right">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-800">86 Vials</span>
          <div class="text-[10px] text-google-text-secondary mt-0.5">Verified 45m ago</div>
        </div>
      </div>
    </div>
  </div>
</div></main>
<!-- Clean Google-style Footer -->
<footer class="w-full border-t border-google-border bg-google-surface px-4 sm:px-6 py-4 mt-6"><div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-google-text-secondary">
  <div class="flex flex-wrap items-center gap-2">
    <span class="font-medium text-google-text-primary">Emergency Helplines:</span>
    <a class="font-bold text-google-red hover:underline inline-flex items-center gap-1" href="tel:108">
      <span class="material-symbols-outlined text-[15px]">emergency</span> Ambulance: 108
    </a>
    <span class="">•</span>
    <a class="font-medium text-google-blue hover:underline inline-flex items-center gap-1" href="tel:104">
      <span class="material-symbols-outlined text-[15px]">call</span> Snakebite Helpline: 104
    </a>
  </div>
  <div class="flex items-center gap-4">
    <a class="hover:text-google-text-primary transition-colors" href="#">About</a>
    <a class="hover:text-google-text-primary transition-colors" href="#" onclick="toggleDirectoryPreview(); return false;">Antivenom Directory</a>
    <a class="hover:text-google-text-primary transition-colors" href="#">First Aid Protocols</a>
  </div>
  <div class="text-[11px] text-google-text-secondary flex items-center gap-1">
    <span class="">FastAPI Backend • Powered by <strong>Gemini 3.6 Flash</strong></span>
  </div>
</div></footer>
<script>
  let currentLang = 'en';

  const translations = {
    en: {
      headerSub: "Instant Snake Identification & Antivenom Locator",
      bannerTitle: "Emergency?",
      bannerSub: "Identify a snake bite instantly without signing in. Instant triage & antivenom lookup.",
      bannerBtn: "Start Emergency Scan",
      cardTitle: "Sign in to SnakeScan",
      cardSubtitle: "Access your scan history and saved hospital alerts"
    },
    ta: {
      headerSub: "அவசர பாம்பு அடையாளம் மற்றும் நச்சுமுறிவு தேடல்",
      bannerTitle: "அவசரமா?",
      bannerSub: "உள்நுழைவு இல்லாமல் பாம்புக்கடியை உடனடியாக அடையாளம் காணவும்.",
      bannerBtn: "அவசர ஸ்கேன்",
      cardTitle: "உள்நுழையவும்",
      cardSubtitle: "உங்கள் ஸ்கேன் வரலாற்றை அணுகவும்"
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    const enBtn = document.getElementById('lang-en');
    const taBtn = document.getElementById('lang-ta');

    if (lang === 'en') {
      enBtn.className = "px-3 py-1 rounded-full font-medium transition-colors bg-white text-google-blue shadow-sm";
      taBtn.className = "px-3 py-1 rounded-full font-medium transition-colors text-google-text-secondary hover:text-google-text-primary";
    } else {
      taBtn.className = "px-3 py-1 rounded-full font-medium transition-colors bg-white text-google-blue shadow-sm";
      enBtn.className = "px-3 py-1 rounded-full font-medium transition-colors text-google-text-secondary hover:text-google-text-primary";
    }

    const t = translations[lang];
    document.getElementById('header-subtitle').innerText = t.headerSub;
    document.getElementById('emergency-banner-title').innerText = t.bannerTitle;
    document.getElementById('emergency-banner-sub').innerText = t.bannerSub;
    document.getElementById('emergency-btn-text').querySelector('span').innerText = t.bannerBtn;
    document.getElementById('card-title').innerText = t.cardTitle;
    document.getElementById('card-subtitle').innerText = t.cardSubtitle;
  }

  function switchAuthTab(mode) {
    const signInBtn = document.getElementById('tab-signin');
    const signUpBtn = document.getElementById('tab-signup');
    const nameWrapper = document.getElementById('name-field-wrapper');
    const submitText = document.getElementById('btn-submit-text');

    if (mode === 'signup') {
      signInBtn.className = "pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 border-transparent text-google-text-secondary hover:text-google-text-primary transition-colors flex items-center gap-1.5";
      signUpBtn.className = "pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 border-google-blue text-google-blue transition-colors flex items-center gap-1.5";
      nameWrapper.classList.remove('hidden');
      submitText.innerText = currentLang === 'en' ? "Create Account" : " கணக்கை உருவாக்கு";
    } else {
      signUpBtn.className = "pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 border-transparent text-google-text-secondary hover:text-google-text-primary transition-colors flex items-center gap-1.5";
      signInBtn.className = "pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 border-google-blue text-google-blue transition-colors flex items-center gap-1.5";
      nameWrapper.classList.add('hidden');
      submitText.innerText = currentLang === 'en' ? "Sign In" : "உள்நுழைய";
    }
  }

  function togglePasswordVisibility() {
    const passField = document.getElementById('auth-password');
    const eyeText = document.getElementById('eye-text');
    if (passField.type === 'password') {
      passField.type = 'text';
      eyeText.innerText = 'Hide';
    } else {
      passField.type = 'password';
      eyeText.innerText = 'Show';
    }
  }

  function triggerGuestScan() {
    window.location.href = "/scan.html";
  }

  function handleAuthSubmit() {
    alert("Authenticated successfully! Loading Emergency Camera & Antivenom Locator.");
    window.location.href = "/scan.html";
  }

  function handleGoogleSignIn() {
    alert("Connecting to Google Health Services account...");
    window.location.href = "/scan.html";
  }

  function toggleDirectoryPreview() {
    const modal = document.getElementById('directory-modal');
    modal.classList.toggle('hidden');
  }
</script>
</body></html>
