from fastapi import APIRouter, File, UploadFile, Form, HTTPException
from app.services.gemini_service import identify_snake, find_hospitals

router = APIRouter(prefix="/api", tags=["Identify"])

@router.post("/identify")
@router.post("/identify/")
async def identify(
    file: UploadFile = File(...),
    location: str = Form("Tamil Nadu")
):
    try:
        image_bytes = await file.read()
        mime_type = file.content_type or "image/jpeg"
        
        result = identify_snake(image_bytes, mime_type, location)
        return {"success": True, "data": result}
    except Exception as e:
        print(f"Identification Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/hospitals")
@router.get("/hospitals/")
async def get_hospitals(location: str = "Tamil Nadu"):
    hospitals = find_hospitals(location)
    return {"success": True, "hospitals": hospitals}
