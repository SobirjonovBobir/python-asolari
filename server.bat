@echo off
cd /d "%~dp0"
if not exist .env copy .env.example .env >nul
set PYTHONPATH=%cd%
echo http://127.0.0.1:8000/login
echo Admin: admin / Malr1ne
python -m uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
pause
