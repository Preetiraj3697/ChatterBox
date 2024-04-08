# API Documentation

This document provides an overview of the API endpoints, features, and usage of the Chatterbox API.

## Table of Contents

- [API Documentation](#api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Authentication](#authentication)
  - [Endpoints](#endpoints)
    - [User Routes](#user-routes)
    - [Chat Routes](#chat-routes)
    - [Admin Routes](#admin-routes)

## Introduction

[Your API Name] is a RESTful API designed to provide [brief description of your API's purpose and target audience].

## Features

- User registration and authentication
- Chat creation and management
- Attachment sending in chats
- Friend management and notifications
- Admin functionalities for monitoring and statistics

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication
- Multer for file uploading
- Other relevant technologies...

## Authentication

Chatterbox uses JWT (JSON Web Tokens) for authentication. Users need to obtain a JWT token by logging in before accessing protected endpoints. The token should be included in the `Authorization` header of each request.

## Endpoints

### User Routes

- **POST /user/new**: Register a new user.
- **POST /user/login**: Login an existing user.
- **GET /user/me**: Get current user profile.
- **GET /user/logout**: Logout the current user.
- **GET /user/search**: Search for users.
- **PUT /user/sendrequest**: Send a friend request.
- **PUT /user/acceptrequest**: Accept a friend request.
- **GET /user/notifications**: Get user notifications.
- **GET /user/friends**: Get user's friends list.

### Chat Routes

- **POST /chat/new**: Create a new group chat.
- **GET /chat/my**: Get user's chats.
- **GET /chat/my/groups**: Get user's group chats.
- **PUT /chat/addmembers**: Add members to a group chat.
- **PUT /chat/removemember**: Remove a member from a group chat.
- **DELETE /chat/leave/:id**: Leave a group chat.
- **POST /chat/message**: Send attachments in a chat.
- **GET /chat/message/:id**: Get messages in a chat.
- **GET /chat/:id**: Get chat details.
- **PUT /chat/:id**: Rename a chat.
- **DELETE /chat/:id**: Delete a chat.

### Admin Routes

- **POST /admin/verify**: Admin login.
- **GET /admin/logout**: Admin logout.
- **GET /admin**: Get admin data.
- **GET /admin/users**: Get all users.
- **GET /admin/chats**: Get all chats.
- **GET /admin/messages**: Get all messages.
- **GET /admin/stats**: Get dashboard statistics.

