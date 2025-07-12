#!/bin/bash

echo "🚀 HealEase Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin <your-github-repo-url>"
    echo "   git push -u origin main"
    exit 1
fi

# Check if remote is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Git remote not set. Please add your GitHub repository:"
    echo "   git remote add origin <your-github-repo-url>"
    exit 1
fi

echo "✅ Git repository found"
echo ""

echo "📋 Deployment Checklist:"
echo "1. ✅ Git repository ready"
echo "2. ⏳ MongoDB Atlas setup required"
echo "3. ⏳ Render.com account needed"
echo "4. ⏳ Vercel account needed"
echo ""

echo "🔗 Quick Links:"
echo "- MongoDB Atlas: https://mongodb.com/atlas"
echo "- Render: https://render.com"
echo "- Vercel: https://vercel.com"
echo ""

echo "📖 Follow the detailed guide in DEPLOYMENT.md"
echo ""

# Check if all required files exist
echo "🔍 Checking deployment files..."

if [ -f "backend/Procfile" ]; then
    echo "✅ backend/Procfile found"
else
    echo "❌ backend/Procfile missing"
fi

if [ -f "backend/vercel.json" ]; then
    echo "✅ backend/vercel.json found"
else
    echo "❌ backend/vercel.json missing"
fi

if [ -f "frontend/vercel.json" ]; then
    echo "✅ frontend/vercel.json found"
else
    echo "❌ frontend/vercel.json missing"
fi

if [ -f "backend/env.example" ]; then
    echo "✅ backend/env.example found"
else
    echo "❌ backend/env.example missing"
fi

if [ -f "frontend/env.example" ]; then
    echo "✅ frontend/env.example found"
else
    echo "❌ frontend/env.example missing"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Set up MongoDB Atlas database"
echo "2. Deploy backend to Render.com"
echo "3. Deploy frontend to Vercel"
echo "4. Update environment variables"
echo "5. Test your live application"
echo ""
echo "📚 See DEPLOYMENT.md for detailed instructions" 