import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ data }) => (
  <View style={style.button}>
    <TouchableOpacity
      style={[
        style.buttonContainer,
        data.color === 'white' ? { backgroundColor: '#EDF2F7' } : {}, 
      ]}>
      <Text
        style={[
          style.newButtonText,
          data.color === 'white' ? { color: 'black' } : {}, 
        ]}>
        {data.buttonName}
      </Text>
    </TouchableOpacity>
  </View>
);

export default Button;

const style = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 5,
    paddingTop:22,
    marginEnd:10
  },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  newButtonText: {
    color: 'white', // Default text color is white
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
