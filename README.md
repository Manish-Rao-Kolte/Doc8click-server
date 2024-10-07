# Doc8click Server Configuration

## Overview

This repository contains the server-side code for the **Doc8click** application. It is built using Node.js and Express, and it serves as the backend for managing user authentication and data.

## Features

-   User registration and authentication
-   Secure API endpoints
-   Middleware for request validation
-   MongoDB for data storage
-   Environment configuration using `.env` files

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose (for MongoDB object modeling)
-   JSON Web Token (JWT) for authentication
-   dotenv (for environment variable management)
-   Cors (for Cross-Origin Resource Sharing)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Manish-Rao-Kolte/Doc8click-server
    cd Doc8click-server
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Set up the environment variables:**
   Create a `.env` file in the root directory of the project and add the following environment variables:
    ```env
    PORT=5000
    MONGO_DEV_URI=<your_mongodb_uri>
    MONGO_PROD_URI=<your_mongodb_uri>
    DB_NAME=<your_database>
    JWT_SECRET=<your_jwt_secret_key>
    NODE_ENV=<production or development>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_clouddinary_api_secret>
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on port `5000` by default. You can change the port by modifying the `PORT` environment variable in the `.env` file.

2. **API Endpoints:**

    - **POST /api/auth/register:** Register a new user
    - **POST /api/auth/login:** Login an existing user
    - **GET /api/auth/user:** Get the current user
    - **PATCH /api/auth/reset-password:** Reset the user's password
    - **GET /api/doctor** Get all doctors by speciality
    - **PUT /api/auth/update:** Update the user's profile

3. **Testing:**

    You can use tools like Postman or cURL to test the API endpoints.

## Middleware

    The server uses middleware functions for request validation and authentication. The middleware functions are defined in the `middleware` directory.

## Project Structure

    The project structure is as follows:

    ```
    Doc8click-server/
    ├── config/
    │   ├── config.js
    │   ├── multerConfig.js
    │   ├── cloudinaryConfig.js
    │   └── db.js
    ├── controllers/
    │   ├── authController.js
    │   ├── doctorController.js
    │   └── userController.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   └──validationMiddleware.js
    ├── models/
    │   ├── Doctor.js
    │   ├── User.js
    │   └── appointment.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── doctorRoutes.js
    │   └── userRoutes.js
    ├── .env
    ├── index.js
    ├── config.js
    ├── package.json
    └── README.md
    ```

## Contributing

    Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or want to suggest an improvement.

