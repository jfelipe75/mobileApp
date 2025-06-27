import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import TaskForm from '../../components/TaskForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Type definition for each task
type Task = {
  id: string;
  title: string;
  completed: boolean; // true = task is done
};

export default function HomeScreen() {
  // Task list state
  const [tasks, setTasks] = useState<Task[]>([]);  // type <Task[]> ensures tasks is an array of Task objects

  // Load tasks from AsyncStorage when app starts
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  // Save tasks to AsyncStorage whenever tasks change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  // Add a new task
  const handleAddTask = (title: string) => {  // takes a string as input, title is the task itself
    const newTask: Task = {  // create a new task object
      // Generate a unique ID using current timestamp
      id: Date.now().toString(),
      title, 
      completed: false, // new tasks are not completed by default
    };
    setTasks(prev => [newTask, ...prev]);
  };

  // Toggle a task's completed state
  const toggleTaskCompleted = (id: string) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  // Delete a task by filtering it out
  const deleteTask = (id: string) => { // find the task by id and remove it
    const filtered = tasks.filter(task => task.id !== id); // as long as the id does not match, keep the task
    // Update state with the filtered tasks
    setTasks(filtered);
  };

  // AsyncStorage save
  const saveTasksToStorage = async (tasksToSave: Task[]) => { // data is save asynchronously in order to not block the UI
    try {
      // Convert tasks array to JSON string for storage
      const json = JSON.stringify(tasksToSave);
      // Save the JSON string to AsyncStorage under the key '@tasks'
      await AsyncStorage.setItem('@tasks', json);
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  // AsyncStorage load
  const loadTasksFromStorage = async () => {
    try {
      const json = await AsyncStorage.getItem('@tasks');
      if (json !== null) {
        setTasks(JSON.parse(json));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  // UI for each individual task
  const renderTaskItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleTaskCompleted(item.id)} style={{ flex: 1 }}>
        <Text style={[styles.taskText, item.completed && styles.taskCompleted]}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <Button title="🗑️" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Task creation form */}
      <TaskForm onAddTask={handleAddTask} />

      {/* List of tasks */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No tasks yet. Add one above!</Text>
        }
      />
    </View>
  );
}

// Styles for the entire app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
  },
  taskItem: {
    flexDirection: 'row', // row layout for text + delete button
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontStyle: 'italic',
  },
});
