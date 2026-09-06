@echo off
REM ═══════════════════════════════════════════════════════════
REM SnakeScan — Windows One-Command Deploy to Google Cloud Run
REM ═══════════════════════════════════════════════════════════

REM ── CONFIGURE THESE ──────────────────────────────────────
SET PROJECT_ID=your-gcp-project-id
SET REGION=asia-south1
SET SERVICE_NAME=snakescan
SET IMAGE_NAME=gcr.io/%PROJECT_ID%/%SERVICE_NAME%
SET GEMINI_API_KEY=your-gemini-api-key-from-ai-google-dev
SET FIREBASE_PROJECT_ID=%PROJECT_ID%
SET STORAGE_BUCKET=%PROJECT_ID%.appspot.com
REM ─────────────────────────────────────────────────────────

echo.
echo ══════════════════════════════════════════════════
echo  SnakeScan — Cloud Run Deployment
echo  AI Snakebite Response System
echo  58,000 lives at stake. Let's fix that.
echo ══════════════════════════════════════════════════
echo.

echo [1/6] Setting project...
gcloud config set project %PROJECT_ID%

echo [2/6] Enabling APIs...
gcloud services enable run.googleapis.com cloudbuild.googleapis.com secretmanager.googleapis.com --quiet

echo [3/6] Storing Gemini API key...
echo %GEMINI_API_KEY%| gcloud secrets create snakescan-gemini-key --data-file=- --replication-policy=automatic 2>nul || echo %GEMINI_API_KEY%| gcloud secrets versions add snakescan-gemini-key --data-file=-

echo [4/6] Building with Cloud Build...
gcloud builds submit --tag %IMAGE_NAME%:latest --timeout=25m .

echo [5/6] Setting permissions...
FOR /F "tokens=*" %%i IN ('gcloud projects describe %PROJECT_ID% --format=value(projectNumber)') DO SET PN=%%i
SET SA=%PN%-compute@developer.gserviceaccount.com
gcloud secrets add-iam-policy-binding snakescan-gemini-key --member="serviceAccount:%SA%" --role="roles/secretmanager.secretAccessor" --quiet
gcloud projects add-iam-policy-binding %PROJECT_ID% --member="serviceAccount:%SA%" --role="roles/datastore.user" --quiet
gcloud projects add-iam-policy-binding %PROJECT_ID% --member="serviceAccount:%SA%" --role="roles/storage.objectAdmin" --quiet

echo [6/6] Deploying to Cloud Run...
gcloud run deploy %SERVICE_NAME% ^
  --image %IMAGE_NAME%:latest ^
  --platform managed ^
  --region %REGION% ^
  --allow-unauthenticated ^
  --set-secrets="GEMINI_API_KEY=snakescan-gemini-key:latest" ^
  --set-env-vars="FIREBASE_PROJECT_ID=%FIREBASE_PROJECT_ID%,STORAGE_BUCKET=%STORAGE_BUCKET%,ENVIRONMENT=production" ^
  --memory=1Gi ^
  --cpu=1 ^
  --min-instances=0 ^
  --max-instances=10 ^
  --timeout=300 ^
  --quiet

FOR /F "tokens=*" %%i IN ('gcloud run services describe %SERVICE_NAME% --region %REGION% --format=value(status.url)') DO SET URL=%%i

echo.
echo ══════════════════════════════════════════════════
echo  SnakeScan LIVE: %URL%
echo  Health: %URL%/health
echo  Add to Firebase Auth → Authorized Domains
echo ══════════════════════════════════════════════════
pause
