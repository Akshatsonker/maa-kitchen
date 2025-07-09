import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({ 
                message: "User already exists - please login", 
                success: false 
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ 
            firstname, 
            lastname, 
            email, 
            password: hashedPassword 
        });
        
        await newUser.save();
        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Authentication failed - invalid email or password';
        
        if (!user) {
            return res.status(403).json({ 
                message: errorMsg, 
                success: false 
            });
        }
        
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ 
                message: errorMsg, 
                success: false 
            });
        }
        
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.status(200).json({
            message: "Signin successful",
            success: true,
            jwtToken,
            email
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export { signUp, signIn };
