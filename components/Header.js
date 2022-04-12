import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Todo</Text>
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
    },
    text:{
        fontSize:40,
        color:'#fff',

    }
})