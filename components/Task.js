import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = ({item,todos,setTodos}) => {
    const handleDelete=(id)=>{
        setTodos(todos.filter((item)=>item.id!==id))
    }
  return (
      <TouchableOpacity style={styles.taskContainer}>
        <Text style={styles.taskText}>{item.todo}</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.edit}>
                <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={()=>{handleDelete(item.id)}} >
                <Text style={styles.deleteText}>Del.</Text>
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
  )
}

export default Task

const styles = StyleSheet.create({
    taskContainer:{
        width:'95%',
        alignSelf:'center',
        paddingHorizontal:10,
        backgroundColor:'#D2E9EA',
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        marginBottom:5,
    },
    taskText:{
        fontSize:23,
        maxWidth:'70%',
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        width:'30%',
        borderColor:'red',
        borderRadius:2,
        justifyContent:'space-between',
    },
    edit:{
        backgroundColor:'#83BEDD',
        padding:7,
        borderRadius:10,
    },
    editText:{
        color:'#fff',
        fontSize:18
    },
    deleteText:{
        color:'#fff',
        fontSize:18,
    },
    delete:{
        backgroundColor:'#E47076',
        padding:7,
        borderRadius:10,
    }
})