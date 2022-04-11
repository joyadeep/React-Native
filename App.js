import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[number,setNumber]=useState(0);

  const handlePlus=()=>{
    setNumber(number+1);
  }
  const handleMinus=()=>{
    if(number>0)
    {
      setNumber(number-1)
    }
    else{
      setNumber(number)
    }
  }

  return (
    <View style={styles.container}>
     <View style={styles.number}>
       <Text style={styles.numberText}>{number}</Text>
     </View>
     <View style={styles.buttons}>
       <TouchableOpacity style={styles.minusTouch} onPress={handleMinus} >
       <View>
            <Text style={styles.minus}>-</Text>
          </View>
       </TouchableOpacity>
       <TouchableOpacity style={styles.plusTouch} onPress={handlePlus}>
          <View>
            <Text style={styles.plus}>+</Text>
          </View>
       </TouchableOpacity>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number:{

  },
  numberText:{
    fontSize:80
  },
  plus:{
    fontSize:50,
    color:'#fff'
  },
  minus:{
    fontSize:50,
    color:'#fff',
  },
  buttons:{
    width:'50%',
    // backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  plusTouch:{
    backgroundColor:'#2BA8D0',
    width:70,
    alignItems:'center',
    borderRadius:10,
  },
  minusTouch:{
    backgroundColor:'#D70F0F',
    width:70,
    alignItems:'center',
    borderRadius:10,
  }
});
