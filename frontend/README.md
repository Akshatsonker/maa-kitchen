# MaaKitchen Frontend

A modern React frontend for the MaaKitchen food delivery application.

## 🚀 Features

- **Modern UI**: Built with React 18 and Tailwind CSS
- **Authentication**: JWT-based user authentication
- **Payment Integration**: Razorpay payment gateway
- **Responsive Design**: Mobile-first responsive design
- **AI Chatbot**: Google AI-powered customer support
- **State Management**: Context API for global state
- **Routing**: React Router for navigation
- **Animations**: Framer Motion for smooth animations

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running on port 8080

## 🛠️ Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
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
   - API URL (backend server)
   - Razorpay public key
   - Google AI API key (for chatbot)

4. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── header/         # Navigation header
│   │   ├── footer/         # Footer with chatbot
│   │   ├── body/           # Hero section
│   │   └── About/          # About page components
│   ├── pages/              # Page components
│   │   ├── cart.jsx        # Menu/products page
│   │   ├── login.jsx       # Login page
│   │   └── productDetails.jsx
│   ├── payment/            # Payment related components
│   │   └── frontend/
│   ├── signFrontend/       # Authentication components
│   ├── chatbot/            # AI chatbot components
│   ├── context/            # React Context providers
│   │   └── AuthContext.jsx
│   ├── hooks/              # Custom React hooks
│   │   └── usePayment.js
│   ├── config/             # Configuration files
│   │   └── api.js          # API configuration
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
└── .env.example
```

## 🔧 Key Components

### Authentication
- **SignupPage**: User registration with validation
- **Login**: User login functionality
- **AuthContext**: Global authentication state management

### Payment System
- **ProductDetails**: Product view with payment integration
- **usePayment**: Custom hook for payment processing
- **Razorpay Integration**: Secure payment gateway

### UI Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Contact info and chatbot integration
- **TypedText**: Animated hero section
- **ProductCard**: Product display cards

### Chatbot
- **AI-powered**: Google Generative AI integration
- **Context-aware**: Knows about MaaKitchen services
- **Responsive**: Mobile-friendly chat interface

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable styled components
- **Animations**: Framer Motion for smooth transitions

## 🔐 Authentication Flow

1. User signs up/logs in
2. JWT token stored in localStorage
3. Token included in API requests
4. Auto-logout on token expiration
5. Protected routes require authentication

## 💳 Payment Flow

1. User selects product and quantity
2. Order created via backend API
3. Razorpay payment modal opens
4. Payment processed securely
5. Payment verification on backend
6. Success/failure handling

## 🤖 Chatbot Features

- **Project-aware**: Knows about MaaKitchen
- **Context preservation**: Maintains conversation history
- **Error handling**: Graceful error responses
- **Mobile optimized**: Works on all devices

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Tablet support**: Medium screen adaptations
- **Desktop**: Full desktop experience
- **Touch-friendly**: Large tap targets

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API URL | Yes |
| `VITE_RAZORPAY_KEY_ID` | Razorpay public key | Yes |
| `VITE_GOOGLE_AI_API_KEY` | Google AI API key | Yes |
| `VITE_APP_NAME` | Application name | No |

## 🧪 Testing

```bash
# Run linting
npm run lint

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.