import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasklist from './components/Tasklist';

export default function App() {
  const[todos,setTodos]=useState([]);
  return (
    <SafeAreaView style={styles.container}>
     <Header/>
    <Tasklist todos={todos} setTodos={setTodos}/>
    <AddTask todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
   
  },
});
