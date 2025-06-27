import React, { useState } from 'react';
// Importing basic UI components and utilities from React Native
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Define the props that this component expects: a function to add a task
type TaskFormProps = {
  onAddTask: (title: string) => void;
};

// Declare the component as a React Functional Component
const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  // Local state to store the input text (task title)
  const [taskTitle, setTaskTitle] = useState('');

  // Function to handle when the "Add Task" button is pressed
  const handleSubmit = () => {
    // If the input is empty or just spaces, show an alert
    if (taskTitle.trim().length === 0) {
      Alert.alert('Please enter a task title.');
      return;
    }

    // Call the parent component's onAddTask function with the title
    onAddTask(taskTitle);

    // Clear the input field after adding the task
    setTaskTitle('');
  };

  // Return the JSX layout of the form
  return (
    <View style={styles.container}>
      {/* Text input field for the task title */}
      <TextInput
        placeholder="Enter task title"    // Placeholder text inside the input
        value={taskTitle}                 // Binds input to taskTitle state
        onChangeText={setTaskTitle}       // Updates state when user types
        style={styles.input}              // Applies styles from StyleSheet
      />

      {/* Button to trigger handleSubmit when pressed */}
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;

// Define styles using StyleSheet.create for consistency and reuse
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,          // Adds spacing below the form
    paddingHorizontal: 20,     // Padding on the left and right sides
    width: '100%',             // Make the form take full width
  },
  input: {
    borderWidth: 1,            // Thin border around the input
    borderColor: '#ccc',       // Light grey border color
    padding: 10,               // Inner spacing
    marginBottom: 10,          // Space below the input before the button
    borderRadius: 6,           // Rounded corners
    backgroundColor: '#fff',   // White background for contrast
  },
});
