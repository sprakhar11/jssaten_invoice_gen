@echo off

:: Open the first command prompt and execute a command
start "Command Prompt 5" cmd /k "git pull"


:: Wait for a few seconds to allow the command prompts to open and execute
timeout /t 5 /nobreak

