import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';

const Task = ({item,todos,setTodos}) => {
    const handleDelete=(id)=>{
        setTodos(todos.filter((item)=>item.id!==id))
    }
    const handlePress=(id)=>{
       
        let edited=todos.map((item)=>{
            if(item.id===id)
            {
                // console.log(item)
                return {...item,completed:true}
            }
            else{
                // console.log("else wala")
                return item
            }
        })
        setTodos(edited);
    }
    
  return (
      <TouchableOpacity style={ item.completed?styles.taskContainer:styles.taskContainerf} onPress={()=>{handlePress(item.id)}}    >
        <Text style={ item.completed?styles.taskTextt:styles.taskText}>{item.todo}</Text>
        <View style={styles.buttons}>
            {!item.completed && <TouchableOpacity style={styles.edit}>
                <Text style={styles.editText}>
                    <MaterialIcons name="edit" size={24} color="#55C2FF" />
                </Text>
            </TouchableOpacity>
}
            { !item.completed && <TouchableOpacity style={styles.delete} onPress={()=>{handleDelete(item.id)}} >
                <Text style={styles.deleteText}>
                <MaterialCommunityIcons name="delete" size={24} color="#FF5555" />
                </Text>
            </TouchableOpacity>
}
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
        backgroundColor:'#8DC994',
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        marginBottom:5,
    },
    taskContainerf:{
        width:'95%',
        alignSelf:'center',
        paddingHorizontal:10,
        backgroundColor:'#D2E8EC',
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
    taskTextt:{
        color:'#F7F7F7',
        fontSize:23,
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        width:'25%',
        borderColor:'red',
        borderRadius:2,
        justifyContent:'space-between',
    },
    edit:{
        backgroundColor:'#fff',
        padding:7,
        borderRadius:10,
    },
    editText:{
        // fontSize:18
    },
    deleteText:{
        // color:'#fff',
        // fontSize:18,
    },
    delete:{
        backgroundColor:'#fff',
        padding:7,
        borderRadius:10,
    }
})