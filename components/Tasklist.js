import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Task from './Task'

const Tasklist = ({todos,setTodos}) => {
  return (
    <View style={styles.tasklistcontainer}>
      {!todos.length>0?<View style={styles.emptyView}><Text style={styles.emptyText}>Nothing to show !!</Text></View>:
      <FlatList
      data={todos}
      keyExtractor={(item)=>item.id}
      renderItem={
        ({item})=>{
          return <Task item={item} todos={todos} setTodos={setTodos} />
        }
      }
      />
      }
    </View>
  )
}

export default Tasklist

const styles = StyleSheet.create({
    tasklistcontainer:{
        marginTop:20,
        flex:1,
        maxHeight:500,
    },
    emptyView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    emptyText:{
      fontSize:30,
      color:'#000',
    }
})