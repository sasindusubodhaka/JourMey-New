import React from 'react';
import { View, StyleSheet, ScrollView,Image} from 'react-native';
import { useTheme } from '@react-navigation/native';

const images=[
  {id:1,url:require('../assets/1.jpg')},
  {id:1,url:require('../assets/2.jpg')},
  {id:1,url:require('../assets/3.jpg')},
  {id:1,url:require('../assets/4.jpg')},
]

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View >
        <View style={styles.header}>
        </View>
        <ScrollView>
          {
            images.map(image=>(
              <View  key={image.id} style={{height:400,margin:20}}>
                  <Image source={image.url} style={styles.imageStyle} />
              </View>
            ))
          }

        </ScrollView>
  
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

  header:{
    position:'absolute',
    left:0,
    right:0,
    top:0,
    height:70,
    backgroundColor:'grey',
    zIndex:1000,
    elevation:1000
  },
  imageStyle:{
    flex:1,
    height:null,
    width:null,
    borderRadius:10

  }
});
