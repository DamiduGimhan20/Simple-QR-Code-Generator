import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const QRScreen = ({ route }) => {
  // Destructuring qrCodeUrl from route.params
  const { qrCodeUrl } = route.params;

  return (
    <View style={styles.container}>
      {/* Text displaying 'QR Code' */}
      <Text style={styles.topic}>QR Code</Text>
      
      {/* Displaying the QR code image */}
      <Image source={{ uri: qrCodeUrl }} style={styles.qrCode} />
      
      {/* Container for the second image */}
      <View style={styles.imageContainer}>
        {/* Second image */}
        <Image 
          style={styles.image}
          source={require('../assets/images/vector_2.png')} 
          resizeMode="contain" // Ensure image fits within the container
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styling for the main container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BAC0FB', // Background color applied to the full screen
  },
  // Styling for the QR code image
  qrCode: {
    width: 300,
    height: 300,
    borderColor: '#000000',
    borderWidth: 3,
    margin: 10,
    marginTop: 50,
  },
  // Styling for the 'QR Code' text
  topic: {
    fontSize: 40,
    color: '#6C63FF',
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  // Styling for the container of the second image
  imageContainer: {
    marginTop: 20,
    width: 350,
    height: 350,
  },
  // Styling for the second image
  image: {
    flex: 1,
    aspectRatio: 1, // Maintain square shape
  },
});

export default QRScreen;
