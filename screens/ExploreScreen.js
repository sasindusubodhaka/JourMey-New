import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
// import * as ImagePicker from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker';
const img = require('../assets/1.jpg')

const ExploreScreen = () => {
  const [photo, setPhoto] = useState('');

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log("image",image.path);
      setPhoto(image.path);
      console.log("photo:", photo)
      console.log("img:", img)
      // this.bs.current.snapTo(1);
    });
  }

  // const handleChoosePhoto = () => {
  //   const option = {
  //     noData: true
  //   };
  //   ImagePicker.launchImageLibrary(option, responce => {
  //     console.log("responce",responce)
  //     // if (responce.uri) {
  //       setPhoto(responce)
  //     // }
  //   })
  // }

  return (
    <View style={styles.container}>

      {/* <Image source={img} style={{ height: 400, margin: 20 }}/> */}
      <Image source={{uri:photo}} style={{ height: 400, margin: 20 }}/>
      
  
  
      <Button title="Choose Photo"
        onPress={choosePhotoFromLibrary} />
    </View >
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },

});
