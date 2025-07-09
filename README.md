# MaaKitchen - Food Delivery Application

A full-stack food delivery application built with React frontend and Node.js backend, featuring secure payments and AI-powered customer support.

## 🏗️ Project Structure

```
maakitchen/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React Context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── config/          # Configuration files
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Node.js backend API
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── config/          # Configuration files
│   ├── package.json
│   └── server.js
│
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Razorpay account for payments

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Start backend server
npm run dev
```

Backend will run on `http://localhost:8080`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Start frontend development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🔧 Environment Configuration

### Backend (.env)
```env
NODE_ENV=development
PORT=8080
MONGO_CONN=mongodb://localhost:27017/maakitchen
JWT_SECRET=your-super-secret-jwt-key
RAZORPAY_API_KEY=your-razorpay-key-id
RAZORPAY_API_SECRET=your-razorpay-key-secret
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:8080/api
VITE_RAZORPAY_KEY_ID=your-razorpay-key-id
VITE_GOOGLE_AI_API_KEY=your-google-ai-api-key
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

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run dev  # Starts with nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm run dev  # Starts Vite dev server with HMR
```

### Building for Production

#### Backend
```bash
cd backend
npm start  # Production mode
```

#### Frontend
```bash
cd frontend
npm run build  # Creates optimized build in dist/
npm run preview  # Preview production build
```

## 🚀 Deployment

### Backend Deployment
1. Set environment variables for production
2. Use PM2 or similar process manager
3. Deploy to platforms like Heroku, AWS, or DigitalOcean

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy `dist/` folder to:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Any static hosting service

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs with salt rounds
- **Input Validation**: Joi schema validation
- **Rate Limiting**: Prevent API abuse
- **CORS Configuration**: Secure cross-origin requests
- **Security Headers**: Helmet.js for security headers
- **Payment Security**: Razorpay signature verification

## 🧪 Testing

### Backend Testing
```bash
cd backend
# Test health endpoints
curl http://localhost:8080/health
curl http://localhost:8080/ping
```

### Frontend Testing
```bash
cd frontend
npm run lint  # ESLint checking
```

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interface
- Mobile-optimized chatbot
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/new-feature`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Akshat Sonker** - Full Stack Developer
- **MaaKitchen Team** - Development Team

## 📞 Support

For support, email contact@maakitchen.com or join our Slack channel.

---

**Happy Coding! 🍕**