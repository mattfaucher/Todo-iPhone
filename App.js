import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>{'Tasks for ' + new Date().toLocaleDateString()}</Text>
      <TaskList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3FF',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
