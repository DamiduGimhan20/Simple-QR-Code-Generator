import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Keyboard 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QRCodeGenerator = () => {
  // Use useNavigation hook to access navigation object
  const navigation = useNavigation();
  
  // State variables
  const [link, setLink] = useState(''); // State to store the input URL
  const [qrCodeUrl, setQrCodeUrl] = useState(''); // State to store the generated QR code URL
  const [keyboardHeight, setKeyboardHeight] = useState(0); // State to manage keyboard height for adjusting UI

  // useEffect to handle keyboard show and hide events
  useEffect(() => {
    // Listener for keyboard show event
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardHeight(-130); // Adjust the keyboard height state
      }
    );

    // Listener for keyboard hide event
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0); // Reset the keyboard height state
      }
    );

    // Cleanup listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Function to generate QR code
  const generateQRCode = async () => {
    try {
      console.log('Requesting QR code for link:', link);
      // Construct the QR code API URL
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;
      console.log('QR code URL generated:', qrCodeUrl);
      setQrCodeUrl(qrCodeUrl); // Update the state with the generated QR code URL
      setLink(''); // Clear the input field
      
      // Navigate to QRScreen and pass the generated QR code URL as a parameter
      navigation.navigate('QRScreen', { qrCodeUrl });
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        {/* Form container */}
        <View style={styles.formContainer}>
          <Text style={styles.topic}>QR Code Generator</Text>
          {/* Input field for entering URL */}
          <TextInput
            style={styles.input}
            placeholder="Enter URL Here !"
            placeholderTextColor="#999"
            value={link}
            onChangeText={setLink}
          />
          {/* Button to generate QR code */}
          <TouchableOpacity style={styles.button} onPress={generateQRCode}>
            <Text style={styles.buttonText}>Generate QR</Text>
          </TouchableOpacity>
        </View>
        {/* Image container */}
        <View style={{ alignSelf: 'center' }}>
          <Image style={{ width: 550, height: 380, marginLeft: 15 }} source={require('../assets/images/vector.png')} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAC0FB', // Background color
    width: '100%',
  },
  topic: {
    fontSize: 40,
    textAlign: 'center',
    color: '#6C63FF',
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Shadow color with opacity
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 7, // Shadow blur radius
    shadowColor: '#000', // Drop shadow color
    shadowOffset: { width: 0, height: 4 }, // Drop shadow offset
    shadowOpacity: 0.3, // Drop shadow opacity
    shadowRadius: 4, // Drop shadow blur radius
  },
  formContainer: {
    borderRadius: 25,
    padding: 16,
    width: '100%',
    marginTop: 75,
    height: '40%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#6C63FF',
    borderRadius: 10,
    color: '#000000',
    padding: 8,
    marginTop: 50,
    height: 60,
    width: 306,
    fontSize: 17,
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 4,
    padding: 12,
    marginTop: 40,
    width: 158,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default QRCodeGenerator;
