import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (!token) {
        res.status(401);
        throw new Error('No token found, authorization denied');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401);
        throw new Error('Invalid token, authorization denied');
    }
});

export { protect };