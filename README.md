# MaaKitchen - Food Delivery Application

A full-stack food delivery application built with React frontend and Node.js backend, featuring secure payments and AI-powered customer support.

## 🏗️ Project Structure

```
maakitchen/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React Context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── config/          # Configuration files
│   │   ├── chatbot/         # AI chatbot components
│   │   └── assets/          # Images, fonts, etc.
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
│
├── backend/                  # Node.js backend API
│   ├── config/              # Database and app configuration
│   ├── controllers/         # Business logic
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── package.json
│   ├── server.js
│   └── .env.example
│
├── package.json             # Root package.json for monorepo
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Razorpay account for payments
- Google AI API key for chatbot

### 1. Install Dependencies

```bash
# Install all dependencies (frontend + backend)
npm run install:all

# Or install individually
npm run install:frontend
npm run install:backend
```

### 2. Environment Setup

#### Backend Environment
```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
```

#### Frontend Environment
```bash
cd frontend
cp .env.example .env
# Edit .env with your configuration
```

### 3. Development

```bash
# Start both frontend and backend in development mode
npm run dev

# Or start individually
npm run dev:backend  # Backend only
npm run dev:frontend # Frontend only
```

- Backend: `http://localhost:8080`
- Frontend: `http://localhost:5173`

## 🔧 Environment Configuration

### Backend (.env)
```env
# Server Configuration
NODE_ENV=development
PORT=8080
FRONTEND_URL=http://localhost:5173

# Database
MONGO_CONN=mongodb://localhost:27017/maakitchen

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Razorpay Configuration
RAZORPAY_API_KEY=your-razorpay-key-id
RAZORPAY_API_SECRET=your-razorpay-key-secret

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Logging
LOG_LEVEL=info
```

### Frontend (.env)
```env
# API Configuration
VITE_API_URL=http://localhost:8080/api

# Razorpay Configuration (Public Key Only)
VITE_RAZORPAY_KEY_ID=your-razorpay-key-id

# Google AI Configuration (for chatbot)
VITE_GOOGLE_AI_API_KEY=your-google-ai-api-key
VITE_API_KEY=your-google-ai-api-key

# App Configuration
VITE_APP_NAME=MaaKitchen
VITE_APP_VERSION=1.0.0

# Environment
VITE_NODE_ENV=development
```

## 🌟 Features

### Frontend
- **Modern React App**: Built with React 18 and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Authentication**: JWT-based user authentication
- **Payment Integration**: Razorpay payment gateway
- **AI Chatbot**: Google AI-powered customer support
- **Smooth Animations**: Framer Motion animations
- **State Management**: Context API for global state

### Backend
- **RESTful API**: Express.js with proper REST conventions
- **Authentication**: JWT-based secure authentication
- **Payment Processing**: Razorpay integration with verification
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, rate limiting, input validation
- **Error Handling**: Comprehensive error handling and logging
- **Validation**: Joi-based request validation

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Payment Endpoints
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify-payment` - Verify payment signature
- `GET /api/payments/history` - Get payment history (protected)
- `GET /api/payments/key` - Get Razorpay public key

### Health Check Endpoints
- `GET /health` - Server health status
- `GET /ping` - Simple ping endpoint

## 🛠️ Development Scripts

```bash
# Development
npm run dev                  # Start both frontend and backend
npm run dev:frontend         # Start frontend only
npm run dev:backend          # Start backend only

# Building
npm run build               # Build both frontend and backend
npm run build:frontend      # Build frontend only
npm run build:backend       # Build backend only

# Production
npm start                   # Start both in production mode
npm run start:frontend      # Start frontend in production
npm run start:backend       # Start backend in production

# Testing
npm test                    # Run all tests
npm run test:frontend       # Run frontend tests
npm run test:backend        # Run backend tests

# Linting
npm run lint                # Lint all code
npm run lint:frontend       # Lint frontend code
npm run lint:backend        # Lint backend code
```

## 🚀 Deployment

### Production Environment Variables

#### Backend Production (.env)
```env
NODE_ENV=production
PORT=8080
FRONTEND_URL=https://your-frontend-domain.com
MONGO_CONN=mongodb+srv://username:password@cluster.mongodb.net/maakitchen
JWT_SECRET=your-production-jwt-secret
RAZORPAY_API_KEY=your-production-razorpay-key
RAZORPAY_API_SECRET=your-production-razorpay-secret
```

#### Frontend Production (.env)
```env
VITE_API_URL=https://your-backend-domain.com/api
VITE_RAZORPAY_KEY_ID=your-production-razorpay-key
VITE_GOOGLE_AI_API_KEY=your-production-google-ai-key
VITE_NODE_ENV=production
```

### Deployment Options

#### Backend Deployment
- **Heroku**: `git subtree push --prefix backend heroku main`
- **Railway**: Connect backend folder
- **DigitalOcean**: Deploy backend folder
- **AWS EC2**: Deploy backend with PM2

#### Frontend Deployment
- **Netlify**: Deploy frontend/dist folder
- **Vercel**: Connect frontend folder
- **AWS S3 + CloudFront**: Upload frontend/dist
- **GitHub Pages**: Deploy frontend/dist

### Docker Deployment (Optional)

#### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
```

#### Frontend Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs with salt rounds
- **Input Validation**: Joi schema validation
- **Rate Limiting**: Prevent API abuse
- **CORS Configuration**: Secure cross-origin requests
- **Security Headers**: Helmet.js for security headers
- **Payment Security**: Razorpay signature verification

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interface
- Mobile-optimized chatbot
- Progressive Web App ready

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
# Test health endpoints
curl http://localhost:8080/health
```

### Frontend Testing
```bash
cd frontend
npm run lint
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/new-feature`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Akshat Sonker** - Full Stack Developer
- **MaaKitchen Team** - Development Team

## 📞 Support

For support, email contact@maakitchen.com

---

**Happy Coding! 🍕**