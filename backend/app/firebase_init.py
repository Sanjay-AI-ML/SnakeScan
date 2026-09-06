import os
import firebase_admin
from firebase_admin import credentials, auth, firestore

if not firebase_admin._apps:
    cred_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    if cred_path and os.path.exists(cred_path):
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)
    else:
        # Default initialization for Cloud Run / GCP environment
        firebase_admin.initialize_app()

def get_firestore():
    return firestore.client()

def verify_token(request):
    # Fallback helper if called directly
    pass

async def get_current_user_optional(request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        return {"uid": "anonymous"}
    
    token = auth_header.split(" ")[1]
    if not token or token == "[object Object]" or len(token.split('.')) != 3:
        return {"uid": "anonymous"}
        
    try:
        decoded = auth.verify_id_token(token)
        return decoded
    except Exception:
        return {"uid": "anonymous"}
