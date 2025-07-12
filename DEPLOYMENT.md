# 🚀 Free Deployment Guide for HealEase

This guide will help you deploy HealEase for free using:
- **Backend**: Render.com (free tier)
- **Frontend**: Vercel (free tier)
- **Database**: MongoDB Atlas (free tier)

## 📋 Prerequisites

1. **GitHub Account**: Push your code to GitHub
2. **Render Account**: [Sign up here](https://render.com)
3. **Vercel Account**: [Sign up here](https://vercel.com)
4. **MongoDB Atlas Account**: [Sign up here](https://mongodb.com/atlas)

## 🗄️ Step 1: Set up MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Create a free account
3. Create a new project
4. Build a free cluster (M0 tier)
5. Choose your preferred cloud provider and region
6. Click "Create Cluster"

### 1.2 Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a username and password (save these!)
4. Select "Read and write to any database"
5. Click "Add User"

### 1.3 Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### 1.4 Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `healease`

**Example connection string:**
```
mongodb+srv://username:password@cluster.mongodb.net/healease?retryWrites=true&w=majority
```

## 🔧 Step 2: Deploy Backend to Render

### 2.1 Prepare Your Code
1. Push your code to GitHub
2. Make sure your backend folder contains:
   - `server.js`
   - `package.json`
   - `Procfile` (already created)

### 2.2 Deploy on Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `healease-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

### 2.3 Set Environment Variables
In your Render service settings, add these environment variables:
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healease?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 2.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Copy your service URL (e.g., `https://healease-backend.onrender.com`)

## 🌐 Step 3: Deploy Frontend to Vercel

### 3.1 Prepare Your Code
1. Make sure your frontend folder contains:
   - `package.json`
   - `vite.config.js`
   - `vercel.json` (already created)

### 3.2 Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3.3 Set Environment Variables
In your Vercel project settings, add:
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your app will be available at `https://your-project.vercel.app`

## 🔄 Step 4: Update Frontend API URL

After deploying the backend, update your frontend environment variable with the actual backend URL.

## 🧪 Step 5: Test Your Deployment

1. **Test Backend**: Visit `https://your-backend-url.onrender.com/api/test`
2. **Test Frontend**: Visit your Vercel URL
3. **Test Registration**: Try creating a new account
4. **Test Login**: Try logging in with the created account

## 🔧 Troubleshooting

### Common Issues:

1. **Backend not connecting to database**
   - Check MongoDB Atlas network access
   - Verify connection string format
   - Ensure database user has correct permissions

2. **Frontend can't connect to backend**
   - Verify `VITE_API_URL` environment variable
   - Check CORS settings in backend
   - Ensure backend URL is correct

3. **Build failures**
   - Check package.json for correct scripts
   - Verify all dependencies are listed
   - Check for syntax errors in code

### Environment Variables Checklist:

**Backend (Render):**
- ✅ `NODE_ENV=production`
- ✅ `PORT=10000`
- ✅ `MONGODB_URI=your-mongodb-connection-string`
- ✅ `JWT_SECRET=your-secret-key`

**Frontend (Vercel):**
- ✅ `VITE_API_URL=https://your-backend-url.onrender.com/api`

## 📱 Your Live Application

Once deployed, your application will be available at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend API**: `https://your-backend-url.onrender.com`

## 🔒 Security Notes

1. **Change JWT Secret**: Use a strong, random string for production
2. **Database Security**: Consider restricting MongoDB Atlas IP access
3. **Environment Variables**: Never commit sensitive data to Git
4. **HTTPS**: Both Render and Vercel provide HTTPS by default

## 💰 Cost Breakdown

All services used in this deployment are **completely free**:

- **Render**: Free tier includes 750 hours/month
- **Vercel**: Free tier includes unlimited deployments
- **MongoDB Atlas**: Free tier includes 512MB storage

## 🚀 Next Steps

1. **Custom Domain**: Add a custom domain to your Vercel deployment
2. **Monitoring**: Set up error tracking with Sentry
3. **CI/CD**: Configure automatic deployments on Git push
4. **Backup**: Set up database backups in MongoDB Atlas

## 📞 Support

If you encounter issues:
1. Check the service logs in Render/Vercel dashboards
2. Verify all environment variables are set correctly
3. Test locally with the same environment variables
4. Check the troubleshooting section above

---

**🎉 Congratulations! Your HealEase application is now live and accessible worldwide!** 