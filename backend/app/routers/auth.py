from fastapi import APIRouter, HTTPException
from app.firebase_init import verify_token, get_firestore
from pydantic import BaseModel

router = APIRouter(prefix="/api/auth", tags=["auth"])

class TokenVerify(BaseModel):
    id_token: str

@router.post("/verify")
async def verify(body: TokenVerify):
    try:
        decoded = verify_token(body.id_token)
        uid = decoded["uid"]
        db  = get_firestore()
        exists = db.collection("users").document(uid).collection("profile").document("data").get().exists
        return {"uid": uid, "email": decoded.get("email",""), "name": decoded.get("name",""), "profile_exists": exists}
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))
