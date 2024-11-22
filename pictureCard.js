import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const PictureCard = ({cardData}) => (
  <View style={style.topcontainer}>
    <Image
      style={style.image}
      source={{
        uri: cardData.uri,
      }}
    />
    <View style={style.contentContainer}>
      <View style={style.title}>
        <Text style={style.titleText}>{cardData.name}</Text>
        <Text style={style.rating}>
          <FontAwesome name="star" size={18} color="blue" />
          {cardData.rating}
        </Text>
      </View>
      <View style={style.detail}>
        <Text style={[style.detailText, style.detailbox]}>
          {cardData.text1}
        </Text>
        <Text style={style.detailText}>{cardData.text2}</Text>
        <Text style={style.dot}>{cardData.dot}</Text>
        <Text style={style.detailText}>{cardData.text3}</Text>
        <Text style={style.dot}>{cardData.dot}</Text>
        <Text style={style.detailText}>{cardData.text4}</Text>
      </View>
      <Text style={[style.detailText,style.simpleText]}>{cardData.text5}</Text>
    </View>
  </View>
);
export default PictureCard;

const style = StyleSheet.create({
  topcontainer: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 100,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    marginLeft:5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    alignItems:'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 15,
  },
  detail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    marginLeft:5,
    marginTop:10,
  },
  detailbox: {
    borderColor: '#555',
    borderWidth: 2,
    paddingHorizontal: 4,
  },
  detailText: {
    fontSize: 13,
    color: '#555',
    paddingHorizontal: 4,
  },
  dot: {
    fontSize: 13,
    color: '#555',
    marginHorizontal: 4,
  },
  simpleText:{
    fontSize:15
  }
});
