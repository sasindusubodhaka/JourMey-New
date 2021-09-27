import React from 'react';
import { View, StyleSheet, ScrollView, Image,Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated'

const images = [
  { id: 1, url: require('../assets/1.jpg'),des:'2018-12-15 at Pidurangala with pataa,gemba, and koka ' },
  { id: 1, url: require('../assets/2.jpg') ,des:'2018-12-15 at Pidurangala with pataa,gemba, and koka '},
  { id: 1, url: require('../assets/3.jpg') ,des:'2018-12-15 at Pidurangala with pataa,gemba, and koka '},
  { id: 1, url: require('../assets/4.jpg') ,des:'2018-12-15 at Pidurangala with pataa,gemba, and koka '},
]
const HEADER_HEIGHT = 70;

const HomeScreen = ({ navigation }) => {

  return (
    <View > 

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
