#!/bin/bash

# YogaVerse - Quick Start Guide
# This guide will help you get the YogaVerse platform running

echo "🧘 YogaVerse - Premium Yoga Community Platform"
echo "=============================================="
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
echo "📂 Setting up project..."
cd yoga 2>/dev/null || {
    echo "⚠️  yoga directory not found. Creating symlink to current directory..."
}

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check your internet connection."
    exit 1
fi

echo ""
echo "🚀 Starting development server..."
echo ""
echo "Your YogaVerse platform will be available at:"
echo "  🌐 http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
