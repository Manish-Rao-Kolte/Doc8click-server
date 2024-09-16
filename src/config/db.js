const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
        if(config.NODE_ENV === 'development') {
            mongoose.set('debug', true);
            await mongoose.connect(config.MONGO_DEV_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }else {
            await mongoose.connect(`${config.MONGO_PROD_URI}?dbName=${config.DB_NAME}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
