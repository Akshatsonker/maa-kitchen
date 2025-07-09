# MaaKitchen Backend API

A Node.js/Express backend API for the MaaKitchen food delivery application.

## 🚀 Features

- **Authentication**: JWT-based user registration and login
- **Payment Processing**: Razorpay integration for secure payments
- **Security**: Helmet, CORS, rate limiting, input validation
- **Database**: MongoDB with Mongoose ODM
- **Error Handling**: Comprehensive error handling and logging
- **Validation**: Joi-based request validation

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Razorpay account for payment processing

## 🛠️ Installation

1. **Clone and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   - MongoDB connection string
   - JWT secret key
   - Razorpay API credentials

4. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📚 API Endpoints

### Authentication (`/api/auth`)
- `POST /signup` - User registration
- `POST /signin` - User login
- `GET /profile` - Get user profile (protected)

### Payments (`/api/payments`)
- `POST /create-order` - Create Razorpay order
- `POST /verify-payment` - Verify payment signature
- `GET /history` - Get payment history (protected)
- `GET /key` - Get Razorpay public key

### Health Checks
- `GET /health` - Server health status
- `GET /ping` - Simple ping endpoint

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Prevent abuse
- **Input Validation**: Joi schema validation
- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   └── paymentController.js # Payment processing
├── middleware/
│   ├── auth.js             # JWT authentication
│   ├── validation.js       # Request validation
│   ├── errorHandler.js     # Error handling
│   └── notFound.js         # 404 handler
├── models/
│   ├── User.js             # User schema
│   └── Payment.js          # Payment schema
├── routes/
│   ├── signUpRoutes.js     # Auth routes
│   └── paymentRoutes.js    # Payment routes
├── server.js               # Main server file
├── package.json
└── .env.example
```

## 🧪 Testing

```bash
# Test server health
curl http://localhost:8080/health

# Test ping
curl http://localhost:8080/ping
```

## 🚀 Deployment

1. Set `NODE_ENV=production` in your environment
2. Update `FRONTEND_URL` to your production frontend URL
3. Use a production MongoDB instance
4. Deploy to your preferred platform (Heroku, AWS, DigitalOcean, etc.)

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment (development/production) | Yes |
| `PORT` | Server port | No (default: 8080) |
| `MONGO_CONN` | MongoDB connection string | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `RAZORPAY_API_KEY` | Razorpay key ID | Yes |
| `RAZORPAY_API_SECRET` | Razorpay key secret | Yes |
| `FRONTEND_URL` | Frontend URL for CORS | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.