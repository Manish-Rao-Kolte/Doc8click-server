import mongoose from 'mongoose';
import { config } from './config.js';


export const connectDB = async () => {
    try {
        if(config.NODE_ENV === 'development') {
            mongoose.set('debug', true);
            await mongoose.connect(config.MONGO_DEV_URI);
        }else {
            await mongoose.connect(`${config.MONGO_PROD_URI}?dbName=${config.DB_NAME}`);
        }
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

