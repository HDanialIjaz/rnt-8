import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({data}) => (
  <View style={style.button}>
    <TouchableOpacity style={style.buttoncantainer}>
      <Text style={style.newButtonText}>{data.buttonName}</Text>
    </TouchableOpacity>
  </View>
);

export default Button;

const style = StyleSheet.create({
  button:{
    alignItems: 'flex-start', 
    margin:5,
    marginLeft:5
  },
  buttoncantainer: {
    backgroundColor: 'blue',
    borderRadius:2,
    paddingVertical: 10,
    paddingHorizontal: 4,
  
  },
  newButtonText:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    // alignContent:'center'
  }
});
