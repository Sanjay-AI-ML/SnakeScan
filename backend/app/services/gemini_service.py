import os
import json
from google import genai
from google.genai import types

def identify_snake(image_bytes: bytes, mime_type: str = "image/jpeg", user_location: str = "Tamil Nadu") -> dict:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY environment variable is missing on Cloud Run.")

    client = genai.Client(api_key=api_key)

    prompt = f"""
    You are an expert herpetologist analyzing a snake image from {user_location}.
    Examine head shape, patterns, coloration, and physical traits.
    Respond ONLY with a valid JSON object matching this exact structure:
    {{
      "species": "Common Name (Scientific Name)",
      "is_venomous": true,
      "confidence": 95,
      "description": "Short visual description of key markings.",
      "first_aid": ["Step 1", "Step 2", "Step 3"],
      "antivenom_required": "Antivenom name or None"
    }}
    """

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type=mime_type or "image/jpeg"),
            prompt
        ],
        config=types.GenerateContentConfig(
            response_mime_type="application/json"
        )
    )
    
    text = response.text.strip()
    if "```" in text:
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:].strip()
            
    return json.loads(text)

def find_hospitals(location: str = "Tamil Nadu") -> list:
    return [
        {"id": 1, "name": "Government General Hospital", "distance": "3.2 km", "antivenom_stock": "Available", "phone": "108"},
        {"id": 2, "name": "District Headquarters Hospital", "distance": "7.5 km", "antivenom_stock": "Available", "phone": "044-25305000"}
    ]
