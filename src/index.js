import cors from 'cors';
import express from 'express';
import { config } from './config/config.js';
import { connectDB } from './config/db.js';


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes imports
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import doctorRouter from './routes/doctorRoutes.js';

//routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/doctor', doctorRouter);

// Start Server
const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
