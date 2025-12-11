#!/bin/bash
# Quick local server script for testing the website

echo "🚀 Starting local server..."
echo ""
echo "Your website will be available at:"
echo "  http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python 3 first, then Python 2, then PHP
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "❌ Error: No suitable server found!"
    echo "Please install Python 3, Python 2, or PHP"
    echo ""
    echo "Or use one of these alternatives:"
    echo "  - Node.js: npx http-server -p 8000"
    echo "  - VS Code: Install 'Live Server' extension"
    exit 1
fi

