import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { IconButton, TextInput ,Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
// import * as ImagePicker from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker';

let addItem = item => {
  // Alert.alert(item);
  firestore().collection('Items').add({
    name: item
  }).then(function () {
    Alert.alert('sff')
  }).catch((err) => {
    console.log("error", err)
  })

}
const DetailsScreen = ({ navigation }) => {

  const [name, onChangeText] = React.useState('');
  const [photo, setPhoto] = useState('');

  // const handleChoosePhoto = () => {
  //   const option = {
  //     noData: true
  //   };
  //   ImagePicker.launchImageLibrary(option, responce => {
  //     console.log("responce", responce)
  //     // if (responce.uri) {
  //     setPhoto(responce)
  //     // }
  //   })
  // }

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

  const handleSubmit = () => {
    addItem(name);
    // Alert.alert('Item saved successfully')
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Upload a New Image </Text>
      <View>
        {
          // photo && (
          //  <Image source={photo.uri}
          //  style={{width:300,height:300}}
          // />)
        }

        <Button  style={styles.imageButton} OnPress={choosePhotoFromLibrary} >
          <Text style={{color:'white'}} >Choose an image</Text></Button>
      </View >

      <TextInput style={styles.itemInput} onChangeText={text => onChangeText(text)} placeholder="Add a description" />

      <Button     
        style={styles.addButton}       
        onPress={handleSubmit}
      ><Text style={{color:'white'}}>Add</Text>
      </Button>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({

  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'

  },
  itemInput: {
    height: 50,
    padding: 4,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    // color: 'white'
  },
  imageButton:{
    backgroundColor:'grey'
  },
  addButton:{
    backgroundColor:'blue',
    color:'white'
  }


});
