import React from 'react';
import { View, StyleSheet, ScrollView, Image,Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated'

const images = [
  { id: 1, url: require('../assets/p6.jpg'),des:'2018-12-15 at Bozadi river  ' },
  { id: 1, url: require('../assets/p1.jpg') ,des:'2019-04-19 at Faneez beach '},
  { id: 1, url: require('../assets/p4.jpg') ,des:'2019-08-12 at Daaffi camp '},
  { id: 1, url: require('../assets/p5.jpg') ,des:'2020-03-04 at Kaaki Island  '},
  { id: 1, url: require('../assets/p2.jpg') ,des:'2020-06-09 at Nail Mountain'}
]
const HEADER_HEIGHT = 70;

const HomeScreen = ({ navigation }) => {

  return (
    <View style={{backgroundColor:'rgb(220,220,220)'}}> 

      <Animated.ScrollView
        scrollEventThrottle={16}           
      >
        {
          images.map(image => (
            <View key={image.id} style={{ height: 400, margin: 20 }}>
              <Image source={image.url} style={styles.imageStyle} />              
              <Text>{image.des}</Text>              
            </View>
          ))
        }

      </Animated.ScrollView>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: HEADER_HEIGHT,
    backgroundColor: 'grey',
    zIndex: 1000,
    elevation: 1000,
   
  },
  imageStyle: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10

  }
});
