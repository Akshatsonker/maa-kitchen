# Deployment Guide

## Environment Setup

### Development
1. Copy `.env.example` to `.env` in both frontend and backend
2. Fill in your development credentials
3. Run `npm run dev` from root

### Production

#### Backend Deployment (Heroku Example)
```bash
# Create Heroku app
heroku create maakitchen-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGO_CONN=your-production-mongodb-url
heroku config:set JWT_SECRET=your-production-jwt-secret
heroku config:set RAZORPAY_API_KEY=your-razorpay-key
heroku config:set RAZORPAY_API_SECRET=your-razorpay-secret
heroku config:set FRONTEND_URL=https://your-frontend-domain.com

# Deploy
git subtree push --prefix backend heroku main
```

#### Frontend Deployment (Netlify Example)
```bash
# Build frontend
cd frontend
npm run build

# Deploy dist folder to Netlify
# Or connect GitHub repo and set build command: npm run build
# And publish directory: frontend/dist
```

## Environment Variables

### Required Backend Variables
- `NODE_ENV`: production
- `PORT`: 8080 (or Heroku assigned)
- `MONGO_CONN`: MongoDB connection string
- `JWT_SECRET`: Strong secret key
- `RAZORPAY_API_KEY`: Razorpay key ID
- `RAZORPAY_API_SECRET`: Razorpay secret
- `FRONTEND_URL`: Frontend domain

### Required Frontend Variables
- `VITE_API_URL`: Backend API URL
- `VITE_RAZORPAY_KEY_ID`: Razorpay public key
- `VITE_GOOGLE_AI_API_KEY`: Google AI API key

## Deployment Checklist

### Backend
- [ ] Environment variables set
- [ ] MongoDB connection working
- [ ] Razorpay credentials valid
- [ ] CORS configured for frontend domain
- [ ] Health endpoints responding

### Frontend
- [ ] API URL pointing to production backend
- [ ] Razorpay key configured
- [ ] Build successful
- [ ] Static files served correctly
- [ ] Routing working (SPA configuration)

## Monitoring

### Backend Health Check
```bash
curl https://your-backend-domain.com/health
```

### Frontend Health Check
```bash
curl https://your-frontend-domain.com
```