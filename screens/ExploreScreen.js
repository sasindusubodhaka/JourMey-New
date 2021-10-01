import React, { useState } from 'react';
import { View ,StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} source={require('../assets/document.png')} />
const ExploreScreen = () => {

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="About JourMey" subtitle="" left={LeftContent} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Paragraph>We all have special occasions in our life. JourMey helps us to keep them memorable.
            Take a photo on your camera. Upload it with a description. Then it will be stored safely. Then you can memorize
            that special occasion  after a few years back


          </Paragraph>
        </Card.Content>

      </Card>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#0000ff'

  },

});
