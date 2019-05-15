import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

  const { title, artist, thumbnail_image, image } = album;
  return (

    <Card>
    <CardSection>
    <View style={styles.thumbnailContainerStyle}>
    <Image
    style={styles.thumbnailStyle}
    source={{ uri: thumbnail_image }}
    />
    </View>
    <View style={styles.headerContentStyle}>
      <Text style={styles.headerTextStyler}>{title}</Text>
      <Text>{artist}</Text>
      </View>
      </CardSection>
      <CardSection>
      <Image
      style={styles.imageStyle}
      source={{ uri: image }}
      />
      </CardSection>
      <CardSection>
      <Button onPress={title}/>
      </CardSection>
      </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyler: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginright: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
