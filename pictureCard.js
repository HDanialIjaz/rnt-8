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
        <Text style={style.titleText}>{cardData.title}</Text>
        <Text style={style.rating}>
          <FontAwesome name="star" size={18} color="blue" />
          {cardData.rating}
        </Text>
      </View>
      <View style={style.detail}>
        <Text style={[style.detailText, style.detailbox]}>
          {cardData.ageRating}
        </Text>
        <Text style={style.detailText}>{cardData.releaseYear}</Text>
        <Text style={style.dot}>{cardData.dot}</Text>
        <Text style={style.detailText}>{cardData.genre}</Text>
        <Text style={style.dot}>{cardData.dot}</Text>
        <Text style={style.detailText}>{cardData.duration}</Text>
      </View>
      <Text style={[style.detailText,style.simpleText]}>{cardData.sumary}</Text>
    </View>
  </View>
);
export default PictureCard;

const style = StyleSheet.create({
  topcontainer: {
    padding: 10,
    flexDirection: 'row',
    margin:10
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
