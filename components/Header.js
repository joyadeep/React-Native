import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({todos,setTodos}) => {

  const handleClear=()=>{
    let temp=todos.filter(item=>item.completed===false)
    setTodos(temp);
  }


  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Todo</Text>
      <Text style={styles.texts} onPress={()=>{handleClear()}}><MaterialCommunityIcons name="filter-variant-remove" size={32} color="white" /></Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#A3B3E2',
        width:'100%',
        justifyContent:'center',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{
        fontSize:40,
        color:'#fff',

    },
    texts:{
      // backgroundColor:'red',
      marginTop:20,
      // fontSize:32,
    }
})