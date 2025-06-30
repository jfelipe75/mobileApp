## To-Do App (React Native + TypeScript)
This is a simple mobile to-do list application built with React Native and TypeScript. It allows users to add, complete, and delete tasks, and it stores tasks locally on the user's device using AsyncStorage.

### Project Structure

/App.tsx - Root component with app logic and UI
/components/ - (Optional) Folder to hold reusable UI components
├─ TaskItem.tsx - Renders individual task items with toggle/delete
└─ TaskForm.tsx - Input field and button for adding new tasks

### Prerequisites

Before running this app, make sure you have the following installed:

Node.js (v14 or higher)

npm or Yarn

React Native CLI or Expo CLI


### Setup Instructions

Clone the repository:

git clone https://github.com/your-username/todo-app.git
cd frontend

Install dependencies:

npm install
or
yarn install

Install AsyncStorage:

npm install @react-native-async-storage/async-storage
npx pod-install

Run the app:

npx react-native run-android
or
npx react-native run-ios

If using Expo:

npx expo start

API Endpoints

This project does not connect to an external API.
All data is stored locally on the device using AsyncStorage.

Frontend Features

Add new tasks using a simple input form

Tap a task to mark it as complete/incomplete

Delete tasks using a button

Tasks persist across app restarts using AsyncStorage

Clean mobile-friendly UI using built-in React Native components

Technologies Used

React Native – Mobile app framework

TypeScript – Strongly typed JavaScript

AsyncStorage – Local key-value storage for React Native

React Native CLI – For running and managing the app

License

This project is open-source and available under the MIT License.
