const express = require('express');
const connectDB = require('./config/db');
const config = require('./config/config');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// Start Server
const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
