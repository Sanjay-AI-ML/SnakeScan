FROM python:3.10-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code except any local dist folders
COPY . .

# Force a clean dist directory containing ONLY the new light-themed files
RUN rm -rf frontend/dist && mkdir -p frontend/dist
RUN cp frontend/index.html frontend/dist/index.html
RUN cp frontend/public/scan.html frontend/dist/scan.html 2>/dev/null || cp frontend/index.html frontend/dist/scan.html

WORKDIR /app/backend

EXPOSE 8080

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
