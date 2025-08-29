# RunTogether Backend

## Overview
RunTogether is a mobile application designed to connect runners, allowing them to find events, track their statistics, and interact with other runners in their area. This backend serves as the API for the application, handling user management, event organization, and statistics tracking.

## Features
- User registration and authentication
- Event creation and management
- User statistics tracking
- Integration with Google Maps API for location-based services

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd RunTogether/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the PostgreSQL database:
   - Create a new database for the application.
   - Update the database configuration in `src/config/database.js` with your database credentials.

4. Run the application:
   ```
   npm start
   ```

### API Endpoints
- **User Routes**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - User login
  - `GET /api/users/:id` - Get user profile

- **Event Routes**
  - `POST /api/events` - Create a new event
  - `GET /api/events` - Get all events
  - `GET /api/events/:id` - Get event details

- **Statistics Routes**
  - `GET /api/stats/:userId` - Get user statistics
  - `POST /api/stats` - Update user statistics

## Database Schema
- **User**
  - id
  - name
  - email
  - password
  - profilePicture
  - statistics (foreign key)

- **Event**
  - id
  - name
  - location
  - date
  - participantLimit

- **Statistics**
  - id
  - userId (foreign key)
  - averageDistance
  - pace
  - heartRate

## Google Maps Integration
The backend includes a service for interacting with the Google Maps API, allowing the application to fetch nearby runners and events based on user location.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.