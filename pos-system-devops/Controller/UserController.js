const User = require('../model/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, resp) => {
    try {
        const { fullName, email, password } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(409).json({ 'message': 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //  Map 'hashedPassword' (variable) to 'passwordHash' (database field)
        const savedUser = await User.create({ 
            fullName, 
            email, 
            passwordHash: hashedPassword 
        });

        return resp.status(201).json({ 'message': 'User created successfully', data: savedUser });

    } catch (e) {
        return resp.status(500).json({ 'message': 'signup error', error: e });
    }
};

const login = async (req, resp) => {
    try {
        const { email, password } = req.body;

        const selectedUser = await User.findOne({ email });
        
        if (!selectedUser) {
            return resp.status(404).json({ 'message': 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, selectedUser.passwordHash);
        
        if (!isPasswordValid) {
            return resp.status(401).json({ 'message': 'Invalid password' });
        }

        const token = jwt.sign({ email: selectedUser.email }, JWT_SECRET, { expiresIn: '10h' });
        return resp.status(200).json({ 'message': 'Success', token: token });

    } catch (e) {
        return resp.status(500).json({ 'message': 'login error', error: e });
    }
};

module.exports = { signup, login };