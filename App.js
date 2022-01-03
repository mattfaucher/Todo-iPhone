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
      <Text style={styles.sectionTitle}>
        {'Tasks for:\n' + new Date().toLocaleDateString("en-US", options)}
      </Text>
      <TaskList />
    </SafeAreaView>
  );
}

const options = {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: '2-digit'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
