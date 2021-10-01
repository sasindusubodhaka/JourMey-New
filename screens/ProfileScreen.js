import React, { useState } from 'react';
const cover = require('../assets/1.jpg')
const prof = require('../assets/prof1.jpg')
import { Button, TextInput } from 'react-native-paper'
import Modal from "react-native-modal";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';

const ProfileScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const saveHandle=()=>{
    alert("succesfully updated");
    setModalVisible(!isModalVisible);

  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Image style={{ height: 200, width: 400 }} source={require('../assets/cover.jpg')} />

      <Image style={styles.avatar} source={prof} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Sasindu Subodhaka</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Balangoda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton} onPress={toggleModal}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible} >
            <View >
              <TextInput style={styles.itemInput} placeholder="Enter Name"/>
              <TextInput style={styles.itemInput} placeholder="Enter City"/>
              <TouchableOpacity style={styles.saveButton} onPress={saveHandle}>
                <Text style={{alignItems:'center'}}>save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
                <Text style={{alignItems:'center'}}>cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>


        </View>
      </View>
    </View>
  );

}
export default ProfileScreen;

const styles = StyleSheet.create({

  container:{
    // backgroundColor:'rgb(220,220,220)'
  },
  image: {
    // backgroundColor: "#00FF00",
    height: 200,


  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#808080",
  },
  editButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: "#006994",

  },
  cancelButton:{
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // width: 250,
    borderRadius: 10,
    backgroundColor: "#AA4A44",
  },
  itemInput: {
    height: 40,
    padding: 4,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  saveButton:{
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // width: 250,
    borderRadius: 10,
    backgroundColor: "#006994",
  }
});

