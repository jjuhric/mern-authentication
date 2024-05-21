# MERN Authentication Project

## Project setup
```npm install```
cd back to the root directory
cd into the frontend directory
```npm install```
cd back to the root directory
```npm run dev```  This will run the backend and frontend concurrently.


## Project Description
This is a MERN stack authentication project

## Technologies Used
I have used the following technologies:
- Node.js
- Express
- MongoDB
- JWT
- React
- Redux (RTK)
- Mongoose
- Bcrypt

## API Endpoints
I have created the following API endpoints:
 - POST /api/users
 - POST /api/users/auth
 - POST /api/users/logout
 - GET /api/users/profile
 - PUT /api/users/profile

## POSTMAN
I have also included the POSTMAN environment file and Collections file. You can import them in your POSTMAN and test the APIs.

## Summary
This application uses JWT to authenticate a user login and stores the login token in a HTTPOnly cookie. The user can log in, log out, and view/update their profile. I have used protected routes for both FE and BE to ensure that only authenticated users can access the profile page. The application is fully functional and can be used as a boilerplate for any MERN stack project.