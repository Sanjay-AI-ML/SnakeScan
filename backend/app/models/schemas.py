from pydantic import BaseModel
from typing import Optional, List

class ProfileCreate(BaseModel):
    name: str
    role: str          # "doctor" | "asha_worker" | "general"
    location: str
    state: str
    language: str
    language_name: str

class IdentifyRequest(BaseModel):
    image_base64: str
    image_mime: str = "image/jpeg"
    location_lat: Optional[float] = None
    location_lon: Optional[float] = None
    bite_already_occurred: bool = False
    symptoms: Optional[str] = ""

class ExpertCorrection(BaseModel):
    identification_id: str
    correct_species: str
    expert_notes: str = ""

class Hospital(BaseModel):
    name: str
    address: str
    distance_km: float
    phone: str
    antivenom_available: bool
    antivenom_types: List[str] = []
