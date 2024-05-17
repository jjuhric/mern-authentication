import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/* Routes used for this project */
/* 
    -- **POST /api/users** -- Register a new user
    -- **POST /api/users/auth** -- Authenticate and get token for user
    -- **POST /api/users/logout** -- Logout user and clear cookie
    -- **GET /api/users/profile** -- Get user profile
    -- **PUT /api/users/profile** -- Update user profile

*/