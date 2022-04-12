import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AddTask = ({todos,setTodos}) => {

  const[newtodo,setNewtodo]= useState('');
  const handleAdd=()=>{
    newtodo && 
    setTodos([...todos,{todo:newtodo,id:Math.floor(Math.random()*9999)}])
    setNewtodo('');
  }

  return (
    <View style={styles.addtaskcontainer}>
    
      <TextInput
        style={styles.input}
        placeholder='Add task'
        onChangeText={val=>setNewtodo(val)}
         defaultValue={newtodo}  />
     
      <TouchableOpacity style={styles.addbtn} onPress={()=>{handleAdd()}}>
            <Text style={styles.addicon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    addtaskcontainer:{
        width:'100%',
        position:'absolute',
        bottom:0,
        height:60,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    input:{
        backgroundColor:'white',
        width:'85%',
        height:50,
        borderRadius:10,
        paddingHorizontal:10,
        fontSize:20,
        borderColor:'#F0F0F0',
        borderWidth:2
    },
    addbtn:{
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:60,
        width:'13%',
        height:50,   
    },
    addicon:{
      color:'#fff',
      fontSize:30,
    }
})