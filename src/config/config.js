import 'dotenv/config';

export const config = {
    PORT: process.env.PORT || 5000,
    MONGO_DEV_URI: process.env.MONGO_DEV_URI,
    MONGO_PROD_URI: process.env.MONGO_PROD_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    DB_NAME: process.env.DB_NAME,
};

