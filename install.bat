@REM This script installs the required packages for the project, using the npm package
@REM Check if npm is installed
@echo off
npm --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
	@REM If npm is not installed, the script prints an error message and exits.
	echo "npm is not installed. Please install Node.js and npm."
	exit /b 1
)
@REM If npm is installed, the script proceeds to install the required packages.
echo "npm is installed. Proceeding with installation."
@REM The script installs the required packages for the project.
npm install
@REM Prefix the frontend and backend directories with npm install to install their dependencies.
npm install --prefix frontend
npm install --prefix backend
@REM The script prints a message indicating that the installation is complete.
echo "Installation complete."