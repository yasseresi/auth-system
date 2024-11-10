# Auth System

A secure authentication system built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Clone the repository
```bash
git clone <repository-url>
cd auth-system
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory (see Environment Variables section)

4. Start the server
```bash
npm start
```

## API Documentation

### Authentication Endpoints

#### Register User
- **POST** `/api/auth/register`
- **Body:** 
    ```json
    {
        "username": "string",
        "email": "string",
        "password": "string",
        "fullName": "string"
    }
    ```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```

#### Get User Profile
- **GET** `/api/auth/profile`
- **Headers:** `Authorization: <token>`

## Environment Variables

Create a `.env` file with the following variables:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `PORT`: Server port (default: 3000)

## Dependencies

- express: ^4.21.1
- mongoose: ^8.8.1
- bcryptjs: ^2.4.3
- jsonwebtoken: ^9.0.2
- express-validator: ^7.2.0
- dotenv: ^16.4.5

## .env.example
```
MONGO_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_jwt_secret_key
PORT=3000
```