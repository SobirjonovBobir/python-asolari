FROM python:3.12-slim

WORKDIR /app

COPY backend/requirements.txt backend/requirements-postgres.txt /app/backend/
RUN pip install --no-cache-dir -r /app/backend/requirements-postgres.txt

COPY backend /app/backend
COPY index.html login.html admin.html /app/
COPY css /app/css
COPY js /app/js

ENV PYTHONPATH=/app
WORKDIR /app

EXPOSE 8000
CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
