@echo off

:: Open the first command prompt and execute a command
start "Command Prompt 1" cmd /k "npm install"


:: Wait for a few seconds to allow the command prompts to open and execute
timeout /t 5 /nobreak

:: Open the default web browser to localhost:3000
