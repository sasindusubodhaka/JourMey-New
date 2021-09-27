import React, { useState } from 'react';
import { View, Text, StyleSheet ,Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


let addItem = item => {
  // Alert.alert(item);
  firestore().collection('Items').add({
    
    name:item
  }).then(function(){
    Alert.alert('sff')
  }).catch((err)=>{
      console.log("error",err)
  })

}
const DetailsScreen = ({ navigation }) => {

  const [name, onChangeText] = React.useState('');

  const handleSubmit=()=>{
    addItem(name);
    // Alert.alert('Item saved successfully')
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Upload New Image </Text>
      <TextInput style={styles.itemInput} onChangeText={text => onChangeText(text)} />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>


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
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'

  },
  itemInput: {
    height: 50,
    padding: 4,
    // marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    // color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
  ,
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
