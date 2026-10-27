@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  Python o'rganish sayti ochilmoqda...
echo  Brauzerda:  http://127.0.0.1:8080
echo  To'xtatish: Ctrl+C
echo.
start "" "http://127.0.0.1:8080"
python -m http.server 8080
if errorlevel 1 (
  echo.
  echo  Python topilmadi. Cursor yoki VS Code orqali index.html ni ochib ko'ring.
  pause
)
