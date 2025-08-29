# RunTogether Project

RunTogether is a mobile application designed to connect runners and facilitate participation in running events. The application provides features for users to find nearby runners, register for events, and track their running statistics.

## Features

- **User Registration and Profile Management**: Users can create accounts, manage their profiles, and view their running statistics.
- **Event Management**: Users can view upcoming running events, register for them, and see details about each event.
- **Statistics Tracking**: Users can track their running statistics, including distance, pace, and heart rate.
- **Google Maps Integration**: The application integrates with Google Maps to display nearby runners and events on an interactive map.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React Native and includes the following key components:

- **App.js**: The entry point for the React Native application.
- **Screens**: 
  - HomeScreen: Displays nearby runners and events.
  - EventScreen: Allows users to view and register for running events.
  - StatsScreen: Shows user statistics and history.
- **Components**: 
  - GoogleMapExample: Integrates with the Google Maps API to display an interactive map.

### Backend

The backend is built using Node.js and Express, with a PostgreSQL database. It includes:

- **Controllers**: Handle user, event, and statistics-related requests.
- **Models**: Define the schemas for users, events, and statistics in the PostgreSQL database.
- **Routes**: Set up API endpoints for user, event, and statistics management.
- **Services**: Interact with the Google Maps API for fetching nearby runners and events.

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Start the React Native application:
   ```
   npm start
   ```

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Set up the PostgreSQL database and configure the connection in `src/config/database.js`.
4. Start the Node.js server:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.