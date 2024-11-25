import { View, ScrollView } from 'react-native';
import Button from './button.js';
import PictureCard from './pictureCard.js';

const button = {
  buttonName: 'New Realeses',
  color: 'blue',
};
const button1 = {
  buttonName: 'Top Rated',
  color: 'white',
};
const button2 = {
  buttonName: 'Vincents picks',
  color: 'white',
};
const cardData = {
  uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScaXPAkQPYMQLL_d0rWPRiTEpCEib7GvaFW9omBYPWxs8c5lLi',
  title: 'A MAN TO HIMSELF',
  rating: ' 2.66',
  ageRating: 'PG-13',
  dot: '●',
  releaseYear: '2021',
  genre: 'Comedy',
  duration: '1h 46m',
  sumary: 'Adversity reveals true inner strength',
};
const cardData1 = {
  uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ87af7rjQ4SXV2Lge_ZBY7DjOQ-xJKyd2qJfDh8iYS-DCY09U8',
  title: 'RABEL RIDGE',
  rating: ' 2.66',
  ageRating: 'PG-13',
  dot: '●',
  releaseYear: '2021',
  genre: 'Comedy',
  duration: '1h 46m',
  sumary: 'Consistency ensures purpose-driven success',
};
const cardData2 = {
  uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa4ubdsTMrDj7cd8BszYmznevWK2ehiyXguDnJ_worVXRILodi',
  title: 'LEAVE NO TRACE',
  rating: ' 2.66',
  ageRating: 'PG-13',
  dot: '●',
  releaseYear: '2021',
  genre: 'Comedy',
  duration: '1h 46m',
  sumary: 'Wilderness guide for minimal impact.',
};

const App = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', marginLeft: 16 }}>
        <Button data={button} />
        <Button data={button1} />
        <Button data={button2} />
      </View>
      <View>
        <PictureCard cardData={cardData} />
        <PictureCard cardData={cardData2} />
        <PictureCard cardData={cardData1} />
        <PictureCard cardData={cardData2} />
        <PictureCard cardData={cardData} />
      </View>
    </ScrollView>
  );
};
export default App;
