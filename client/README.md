# Frontend README

This document provides an overview of the frontend application associated with the Chatterbox project.

## Project Information

- **Name:** client
- **Version:** 0.0.0
- **Type:** Module

## Technologies Used

- React.js
- React Router
- Material-UI
- Emotion (for styling)
- Redux Toolkit
- Axios (for HTTP requests)
- Socket.io-client (for real-time communication)
- Chart.js (for data visualization)
- Framer Motion (for animations)
- React Helmet Async (for managing document head)
- React Hot Toast (for toast notifications)

## Scripts

- **dev:** Start the development server using Vite.
- **build:** Build the project for production.
- **lint:** Lint the project using ESLint.
- **preview:** Preview the built project locally using Vite.

## Features

- User authentication and authorization
- Real-time chat functionality
- Group chat management
- Admin dashboard with user and chat management features
- Responsive design for various screen sizes
- Error handling and notifications

## Project Structure

The project structure follows a modular approach, with components organized into logical folders:

- **Components:** Contains reusable UI components.
- **Constants:** Stores configuration constants.
- **Hooks:** Custom React hooks used across the application.
- **Pages:** Top-level components representing different pages/routes.
- **Redux:** Contains Redux-related files, including reducers, actions, and API slices.
- **Styles:** Global and theme-related styles.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

- Users can register and log in to access the application features.
- Once logged in, users can navigate to different pages such as the home page, chat page, and groups page.
- Admin users have access to additional features such as the admin dashboard for managing users and chats.
