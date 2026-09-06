"""
India's medically significant snake species database.
Treatment protocols sourced from WHO Guidelines for the Management of Snakebites (2016)
and Indian National Health Mission snakebite management protocols.

This data is embedded so the app works offline / without grounding in worst case.
Grounding supplements this with live updates.
"""

SPECIES_DB = {
    "Russell's Viper": {
        "scientific": "Daboia russelii",
        "family": "Viperidae",
        "venom_type": "hemotoxic",
        "venom_severity": "CRITICAL",
        "antivenom": "Polyvalent Snake Antivenom (PSAV)",
        "initial_dose": "10 vials IV slow infusion over 30 minutes",
        "repeat_dose": "10 vials every 6 hours if symptoms persist",
        "max_dose": "No upper limit — give until symptoms controlled",
        "complications": ["DIC (clotting failure)", "Acute kidney failure", "Local tissue necrosis", "Thrombocytopenia"],
        "first_aid": [
            "Immobilize bitten limb at or below heart level",
            "Remove rings, watches, tight clothing near bite",
            "Mark bite site with pen, note time",
            "Do NOT cut, suck, tourniquet — these worsen outcome",
            "Transport to hospital IMMEDIATELY",
        ],
        "treatment_window": "6 hours optimal, up to 24h effective",
        "identifying_features": [
            "Elliptical keeled scales",
            "Triangular head clearly distinct from neck",
            "Three rows of spots on brown/gray body",
            "Chain-link or oval spot pattern on dorsal side",
            "Adult length 90-150cm",
        ],
        "regional_prevalence": {
            "Maharashtra": 45, "Karnataka": 40, "Andhra Pradesh": 42,
            "Tamil Nadu": 35, "Gujarat": 38, "Rajasthan": 30,
            "West Bengal": 25, "Odisha": 35, "Uttar Pradesh": 28,
        },
        "emergency_call": "108",
    },
    "Indian Cobra": {
        "scientific": "Naja naja",
        "family": "Elapidae",
        "venom_type": "neurotoxic",
        "venom_severity": "CRITICAL",
        "antivenom": "Polyvalent Snake Antivenom (PSAV)",
        "initial_dose": "10 vials IV",
        "repeat_dose": "10 vials every 1-2 hours if neurotoxicity progresses",
        "complications": ["Respiratory paralysis", "Ptosis", "Dysphagia", "Cardiac arrest"],
        "first_aid": [
            "Watch for respiratory failure — most dangerous complication",
            "Be ready to perform rescue breathing if needed",
            "Immobilize and transport immediately",
            "No tourniquet",
        ],
        "treatment_window": "1-2 hours critical for neuro symptoms",
        "identifying_features": [
            "Spectacle/monocle marking on back of hood",
            "Hood expands when threatened",
            "Smooth round head not as triangular as vipers",
            "Uniform brown/black coloring",
            "Adult length 100-200cm",
        ],
        "regional_prevalence": {
            "Tamil Nadu": 40, "Kerala": 35, "Karnataka": 38,
            "Maharashtra": 30, "Andhra Pradesh": 35, "West Bengal": 30,
            "Odisha": 28, "Rajasthan": 25, "Uttar Pradesh": 32,
        },
        "emergency_call": "108",
    },
    "Common Krait": {
        "scientific": "Bungarus caeruleus",
        "family": "Elapidae",
        "venom_type": "neurotoxic",
        "venom_severity": "CRITICAL",
        "antivenom": "Polyvalent Snake Antivenom (PSAV)",
        "initial_dose": "10 vials IV",
        "repeat_dose": "Repeat every 1-2 hours — krait neurotoxin notoriously resistant",
        "complications": ["Respiratory failure (often while sleeping)", "Ascending paralysis", "May require ventilator"],
        "first_aid": [
            "CRITICAL: Krait bites are often painless — victim may not realize they were bitten",
            "If found unconscious after sleeping near ground — suspect krait bite",
            "Immediate hospitalization even without obvious symptoms",
            "Monitor breathing every 15 minutes",
        ],
        "treatment_window": "Act immediately — symptoms may be delayed but severe",
        "identifying_features": [
            "Shiny black/dark blue body",
            "White crossbands (60+ pairs)",
            "Vertebral scales enlarged and hexagonal",
            "Small head, not distinct from body",
            "Adult length 75-125cm",
        ],
        "regional_prevalence": {
            "West Bengal": 35, "Odisha": 30, "Uttar Pradesh": 30,
            "Rajasthan": 28, "Maharashtra": 15, "Tamil Nadu": 15,
            "Andhra Pradesh": 20, "Karnataka": 18,
        },
        "emergency_call": "108",
    },
    "Saw-scaled Viper": {
        "scientific": "Echis carinatus",
        "family": "Viperidae",
        "venom_type": "hemotoxic",
        "venom_severity": "HIGH",
        "antivenom": "Polyvalent Snake Antivenom (PSAV) or Saw-scaled Viper specific",
        "initial_dose": "10 vials IV",
        "repeat_dose": "Repeat 6-hourly based on clotting tests",
        "complications": ["Coagulopathy", "Local necrosis", "Renal failure"],
        "first_aid": [
            "Immobilize limb",
            "Rush to hospital — often underestimated",
            "Multiple bites common as this species is aggressive",
        ],
        "treatment_window": "6-12 hours",
        "identifying_features": [
            "Pear-shaped head",
            "Rough, keeled scales that make rasping sound when rubbed",
            "Undulating pale pattern on brown body",
            "Small size — 20-60cm",
            "Lateral undulating movement",
        ],
        "regional_prevalence": {
            "Rajasthan": 45, "Gujarat": 40, "Maharashtra": 20,
            "Karnataka": 18, "Tamil Nadu": 15, "Andhra Pradesh": 22,
        },
        "emergency_call": "108",
    },
    "King Cobra": {
        "scientific": "Ophiophagus hannah",
        "family": "Elapidae",
        "venom_type": "neurotoxic + cytotoxic",
        "venom_severity": "EXTREME",
        "antivenom": "King Cobra Antivenom (RARE — contact nearest major hospital immediately)",
        "initial_dose": "Contact hospital — dose varies; may need 20+ vials",
        "complications": ["Respiratory failure within hours", "Massive venom volume", "Extremely fast acting"],
        "first_aid": [
            "EXTREME EMERGENCY — death can occur within hours",
            "Call 108 immediately",
            "King Cobra antivenom is rare — the patient needs a major hospital",
            "Do not waste time with first aid — get to hospital NOW",
        ],
        "treatment_window": "1-2 hours — EXTREME urgency",
        "identifying_features": [
            "World's longest venomous snake — 3-5 meters",
            "Olive/tan coloring with pale yellow crossbands",
            "Chevron pattern on neck",
            "Hood narrower than Indian cobra",
            "Eats other snakes — found near forested areas",
        ],
        "regional_prevalence": {
            "Kerala": 30, "Karnataka": 25, "Tamil Nadu": 20,
            "Northeast India": 40, "West Bengal": 15,
        },
        "emergency_call": "108",
    },
    "Non-venomous": {
        "scientific": "Various species",
        "family": "Various",
        "venom_type": "none",
        "venom_severity": "LOW",
        "antivenom": "None required",
        "initial_dose": "Not applicable",
        "complications": ["Infection at bite site", "Psychological distress"],
        "first_aid": [
            "Clean wound with soap and water",
            "Apply antiseptic",
            "Watch for infection signs over 24-48 hours",
            "Tetanus vaccination if not up to date",
            "Visit clinic — not emergency unless allergic reaction",
        ],
        "treatment_window": "Not time-critical — within 24 hours",
        "identifying_features": [
            "Round pupils (not vertical slit)",
            "Rounded head not distinct from body",
            "No triangular viper head",
            "Uniform coloring typically",
        ],
        "regional_prevalence": {
            "All regions": 50,  # ~50% of all bites are non-venomous
        },
        "emergency_call": "Local clinic or 108 if unsure",
    },
}

# Regional species probability priors for Bayesian identification
REGIONAL_PRIORS = {
    "Maharashtra":      {"Russell's Viper": 45, "Indian Cobra": 30, "Common Krait": 15, "Saw-scaled Viper": 20, "Non-venomous": 50},
    "Tamil Nadu":       {"Indian Cobra": 40, "Russell's Viper": 35, "Common Krait": 15, "King Cobra": 10, "Non-venomous": 50},
    "Kerala":           {"King Cobra": 30, "Indian Cobra": 35, "Common Krait": 20, "Russell's Viper": 25, "Non-venomous": 50},
    "Karnataka":        {"Indian Cobra": 38, "Russell's Viper": 40, "King Cobra": 25, "Common Krait": 18, "Non-venomous": 50},
    "Andhra Pradesh":   {"Russell's Viper": 42, "Indian Cobra": 35, "Common Krait": 20, "Non-venomous": 50},
    "West Bengal":      {"Common Krait": 35, "Indian Cobra": 30, "Russell's Viper": 25, "Non-venomous": 50},
    "Odisha":           {"Russell's Viper": 35, "Common Krait": 30, "Indian Cobra": 28, "Non-venomous": 50},
    "Rajasthan":        {"Saw-scaled Viper": 45, "Russell's Viper": 30, "Indian Cobra": 25, "Non-venomous": 50},
    "Gujarat":          {"Saw-scaled Viper": 40, "Russell's Viper": 38, "Indian Cobra": 25, "Non-venomous": 50},
    "Uttar Pradesh":    {"Russell's Viper": 28, "Common Krait": 30, "Indian Cobra": 32, "Non-venomous": 50},
    "Madhya Pradesh":   {"Russell's Viper": 35, "Indian Cobra": 30, "Common Krait": 20, "Non-venomous": 50},
    "Bihar":            {"Common Krait": 32, "Indian Cobra": 30, "Russell's Viper": 28, "Non-venomous": 50},
    "Assam":            {"King Cobra": 20, "Common Krait": 28, "Indian Cobra": 30, "Non-venomous": 50},
    "Default":          {"Russell's Viper": 35, "Indian Cobra": 32, "Common Krait": 25, "Saw-scaled Viper": 20, "Non-venomous": 50},
}

def get_species_info(species_name: str) -> dict:
    """Get full treatment protocol for a species."""
    for key in SPECIES_DB:
        if key.lower() in species_name.lower() or species_name.lower() in key.lower():
            return SPECIES_DB[key]
    return SPECIES_DB["Non-venomous"]

def get_regional_priors(state: str) -> dict:
    return REGIONAL_PRIORS.get(state, REGIONAL_PRIORS["Default"])

def get_top_priors_text(state: str) -> str:
    priors = get_regional_priors(state)
    venomous = {k: v for k, v in priors.items() if k != "Non-venomous"}
    sorted_priors = sorted(venomous.items(), key=lambda x: x[1], reverse=True)
    return "\n".join([f"  - {sp}: {pct}% of venomous bites in this region" for sp, pct in sorted_priors[:4]])
