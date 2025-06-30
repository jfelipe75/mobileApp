## To-Do App (React Native + Expo + TypeScript)
This is a mobile to-do list app built using React Native with Expo and TypeScript. Users can add, complete, and delete tasks, which are stored locally using AsyncStorage. Navigation is handled with Expo Router.

### Project Structure
bash
Copy
Edit
/app/                    - File-based routing using Expo Router
/components/             - (Optional) Reusable UI components (e.g., TaskItem, TaskForm)
/App.tsx or /index.ts    - App entry point

### Prerequisites
Before running the app, make sure you have:

Node.js (v14 or later)

Expo CLI — no need to install globally

Android Studio or Xcode (for emulator/simulator use)

A physical device with the Expo Go app (optional for testing)

### Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/todo-app.git
cd todo-app
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npx expo start
Then press a to open on Android, i for iOS, or w for web

You can also scan the QR code using the Expo Go app on your phone

### API Endpoints
This project does not use an external API.
All data is stored locally on the device using AsyncStorage.

### Frontend Features
Add new tasks via an input form

Tap tasks to mark them as complete or incomplete

Delete tasks with a button

Persist data locally using AsyncStorage (tasks stay after app restarts)

Responsive UI using React Native's built-in styling

Page-based navigation with Expo Router

### Technologies Used
Expo SDK 53

React Native 0.79

TypeScript

Expo Router (file-based navigation)

AsyncStorage (@react-native-async-storage/async-storage)

Core React Native components (View, Text, TouchableOpacity, etc.)


