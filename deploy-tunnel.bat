@echo off
cd /d "%~dp0"
echo Server ishlayotganiga ishonch hosil qiling (server.bat) — port 8000
echo.
tools\cloudflared.exe tunnel --url http://127.0.0.1:8000
pause
