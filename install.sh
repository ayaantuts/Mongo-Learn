#!/bin/bash
npm --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
	# If npm is not installed, the script prints an error message and exits.
	echo "npm is not installed. Please install Node.js and npm."
	exit 1
fi
# If npm is installed, the script proceeds to install the required packages.
echo "npm is installed. Proceeding with installation."
# The script installs the required packages for the project.
npm install
# Prefix the frontend and backend directories with npm install to install their dependencies.
npm install --prefix frontend
npm install --prefix backend
# The script prints a message indicating that the installation is complete.
echo "Installation complete."