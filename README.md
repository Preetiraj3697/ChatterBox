# Chatterbox

This document provides comprehensive information about the Chatterbox application, covering both the frontend and backend aspects.

## Project Overview

Chatterbox is a fullstack messaging application that allows users to communicate in real-time through individual and group chats. It provides features for user authentication, creating and managing chat groups, sending messages with attachments, and more.

## Technologies Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** Provides routing functionality for single-page applications.
- **Material-UI:** A React UI framework for building responsive and accessible web applications.
- **Emotion:** A library for styling React components with CSS-in-JS.
- **Redux Toolkit:** A library for managing state in React applications.
- **Axios:** A promise-based HTTP client for making API requests.
- **Socket.io-client:** A client-side library for WebSocket-based real-time communication.
- **Chart.js:** A JavaScript library for creating charts and graphs.
- **Framer Motion:** A library for adding animations and gestures to React components.
- **React Helmet Async:** A library for managing document head in React applications.
- **React Hot Toast:** A toast notification library for React applications.

### Backend

- **Node.js:** A JavaScript runtime environment for building server-side applications.
- **Express:** A minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing application data.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens):** A standard for securely transmitting information between parties.
- **Socket.io:** A library for building WebSocket-based real-time applications.
- **Multer:** A middleware for handling multipart/form-data, primarily used for file uploads.
- **Express Validator:** A set of validation and sanitization middleware functions for Express.

## Features

- User authentication and authorization with JSON Web Tokens (JWT)
- Real-time messaging using WebSocket-based communication
- Creation and management of individual and group chats
- Sending messages with attachments (images, files, etc.)
- Admin dashboard for managing users, chats, and messages

## Project Structure

### Frontend

- **Components:** Reusable UI components.
- **Constants:** Configuration constants.
- **Hooks:** Custom React hooks.
- **Pages:** Top-level components representing different pages/routes.
- **Redux:** Redux-related files (reducers, actions, slices).
- **Styles:** Global and theme-related styles.

### Backend

- **Controllers:** Logic for handling HTTP requests and responses.
- **Middleware:** Functions executed before reaching the route handler.
- **Models:** Data models for MongoDB documents.
- **Routes:** Route definitions for the API endpoints.
- **Utils:** Utility functions used across the backend.

## Getting Started

1. Clone the repository.
2. Install dependencies for both frontend and backend using `npm install`.
3. Start the frontend development server with `npm run dev` in the `client` directory.
4. Start the backend server with `npm start` in the root directory.
5. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

- Register and log in to access the application features.
- Create new chats or join existing ones to start messaging.
- Upload attachments, send messages, and interact with other users in real-time.
- Admin users can access the admin dashboard to manage users, chats, and messages.
## ScreenShots
![Screenshot (60)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/395a645f-b77b-4b28-86c4-6f2272f90374)
![Screenshot (59)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/fb49e87f-6bfd-4490-8eeb-9cd276c23691)
![Screenshot (58)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/63117757-a54a-484f-97f2-0613c6e0e269)
![Screenshot (57)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/08b2971f-bd9a-400b-a2b1-373a1b81e2c7)
![Screenshot (56)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/7b4481a5-9e46-4137-abb1-8765e3a9ea2a)
![Screenshot (55)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/21ff7648-be30-4c21-aa61-fae2ed3ee75b)
![Screenshot (54)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/80f37561-7b13-40f7-8ba0-a4ea8ff3e112)
![Screenshot (53)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/882dfda9-2943-45c3-98ae-29e64c34632e)
![Screenshot (52)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/cee5138f-e868-4464-991d-a0d1d5524b73)
![Screenshot (51)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/895dfeee-ad58-4df8-abf9-a65a578de453)
![Screenshot (50)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/f0f023fa-e702-4272-b4cf-d7bfa5780920)
![Screenshot (61)](https://github.com/Preetiraj3697/ChatterBox/assets/107460745/6f6b2695-6090-47a7-a3c8-9f4853f9731c)

## Additional Notes

- Ensure MongoDB is running and accessible to the backend server.
- Customize and extend the application as per project requirements.
