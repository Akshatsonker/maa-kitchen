import UserModel from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ 
                message: "User already exists - please login", 
                success: false 
            });
        }
        
        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Create new user
        const newUser = new UserModel({ 
            firstname, 
            lastname, 
            email, 
            password: hashedPassword 
        });
        
        await newUser.save();
        
        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: newUser._id, 
                email: newUser.email,
                role: newUser.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.status(201).json({
            message: "Account created successfully",
            success: true,
            token,
            user: {
                id: newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                role: newUser.role
            }
        });
    } catch (err) {
        console.error('Signup error:', err);
        
        // Handle validation errors
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({
                message: "Validation failed",
                success: false,
                errors
            });
        }
        
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await UserModel.findOne({ email, isActive: true });
        if (!user) {
            return res.status(401).json({ 
                message: "Invalid email or password", 
                success: false 
            });
        }
        
        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                message: "Invalid email or password", 
                success: false 
            });
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.email,
                role: user.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.status(200).json({
            message: "Login successful",
            success: true,
            token,
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Signin error:', err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId).select('-password');
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }
        
        res.status(200).json({
            success: true,
            user
        });
    } catch (err) {
        console.error('Get profile error:', err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export { signUp, signIn, getProfile };