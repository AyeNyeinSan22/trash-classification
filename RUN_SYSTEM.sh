#!/bin/bash

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║   Smart Trash Classification System - Quick Start              ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check Python
if ! command -v python &> /dev/null; then
    echo "❌ Python not found"
    exit 1
fi

cd /Users/ayenyeinsan/Documents/trash-classification

echo "📁 Directory: $(pwd)"
echo ""

# Activate venv
echo "🔧 Activating virtual environment..."
source .venv/bin/activate
echo "✅ Virtual environment activated"
echo ""

# Show models
echo "📦 Available Models:"
ls -lh models/*.pt | awk '{print "  - " $9 " (" $5 ")"}'
echo ""

# Start backend
echo "🚀 Starting Backend (FastAPI)..."
echo "   Port: 8000"
echo "   Endpoint: http://127.0.0.1:8000/predict"
echo ""
echo "Press Ctrl+C to stop"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd backend
uvicorn app:app --reload --port 8000
