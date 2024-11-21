import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => (
  <View style={style.button}>
    <TouchableOpacity style={style.buttoncantainer}>
      <Text style={style.newButtonText}>New Realeses</Text>
    </TouchableOpacity>
  </View>
);

export default App;

const style = StyleSheet.create({
  button:{
    alignItems: 'center'
  },
  buttoncantainer: {
    backgroundColor: 'blue',
    borderRadius:4,
    paddingVertical: 14,
    paddingHorizontal: 14,
  
  },
  newButtonText:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    // alignContent:'center'
  }
});
