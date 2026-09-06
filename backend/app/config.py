import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    gemini_api_key: str = os.getenv("GEMINI_API_KEY", "")
    firebase_project_id: str = os.getenv("FIREBASE_PROJECT_ID", "")
    storage_bucket: str = os.getenv("STORAGE_BUCKET", "")
    environment: str = os.getenv("ENVIRONMENT", "production")
    class Config:
        env_file = ".env"

settings = Settings()
