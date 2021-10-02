import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated'

const images = [
  { id: 1, url: require('../assets/p6.jpg'), des: '2018-12-15 at Nail Mountain  ' },
  { id: 1, url: require('../assets/p1.jpg'), des: '2019-04-19 at Faneez beach ' },
  { id: 1, url: require('../assets/p4.jpg'), des: '2019-08-12 at Daaffi camp ' },
  { id: 1, url: require('../assets/p5.jpg'), des: '2020-03-04 at Kaaki Island  ' },
  { id: 1, url: require('../assets/p7.jpg'), des: '2021-10-02 at Duwili Mountain' }
]
const HEADER_HEIGHT = 70;

const HomeScreen = ({ navigation }) => {
  const onDelete = () => {
    Alert.alert(
      'Are you sure',
      'This photo will no longer exist ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  return (
    <View style={{ backgroundColor: 'rgb(220,220,220)' }}>

      <Animated.ScrollView
        scrollEventThrottle={16}
      >
        {
          images.map(image => (
            <View key={image.id} style={{ height: 400, margin: 20 }}>
              <Image source={image.url} style={styles.imageStyle} />
              <View style={{flexDirection:'row'}} >
                <Text style={{marginTop:10,marginRight:60}}>{image.des}</Text>
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity style={styles.buttonContainer} onPress={onDelete}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
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

  },
  buttonContainer: {
    marginTop:10,
    height: 25,
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#ff4011",


  },
});
