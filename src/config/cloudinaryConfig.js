import cloudinary from 'cloudinary';
import {config} from './config.js';

// Configure Cloudinary
cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET
});

// Upload image to Cloudinary
export const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                resource_type: 'image',
                folder: 'profile-images',
                public_id: file.originalname.split('.')[0]
            },
            (error, result) => {
                if (error) {
                    console.error('Failed to upload image to Cloudinary:', error); 
                    return reject(new Error('Failed to upload image to Cloudinary'));
                }
                resolve(result.secure_url); // Return the URL of the uploaded image
            }
        ).end(file.buffer);
    });
};