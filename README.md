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

## Additional Notes

- Ensure MongoDB is running and accessible to the backend server.
- Customize and extend the application as per project requirements.