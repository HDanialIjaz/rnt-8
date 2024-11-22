import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from './button.js';
import PictureCard from './pictureCard.js';

const data = {
  buttonName: 'New Realeses',

};
const data1 = {
  buttonName: 'Top Rated', 
   color: 'black'
};
const data2 = {
  buttonName: 'Vincents picks',
};
const cardData = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfco8P-Jg75AGHl984DO7fWcqKmlVPcbAvmg&s',
  name: 'Prognosis Negative',
  rating: ' 2.66',
  text1: 'PG-13',
  dot: '●',
  text2: '2021',
  text3: 'Comedy',
  text4: '1h 46m',
  text5: 'Simon Pegg, Zach Galifianakis',
};

const App = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginLeft: 16 }}>
        <Button data={data}  />
        <Button data={data1} />
        <Button data={data2} />
      </View>
      <View>
        <PictureCard cardData={cardData} />
                <PictureCard cardData={cardData}  />

      </View>
    </View>
  );
};
export default App;
