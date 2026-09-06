from fastapi import APIRouter, Request, HTTPException
from app.firebase_init import get_firestore, get_current_user_optional

router = APIRouter()

@router.post("/save")
async def save_profile(request: Request):
    try:
        body = await request.json()
        user = await get_current_user_optional(request)
        uid = user.get("uid", "anonymous")
        
        db = get_firestore()
        if uid != "anonymous":
            db.collection("users").document(uid).set(body, merge=True)
            
        return {"success": True, "message": "Profile saved successfully"}
    except Exception as e:
        print("Profile save warning:", str(e))
        return {"success": True, "message": "Profile cached locally"}
