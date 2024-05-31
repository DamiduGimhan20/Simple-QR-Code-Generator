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
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// Main QRCodeGenerator component
const QRCodeGenerator = () => {
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
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={[styles.scrollContainer, { marginTop: keyboardHeight }]}>
        <View style={styles.qrCodeContainer}>
          {qrCodeUrl ? (
            // Display the generated QR code
            <Image source={{ uri: qrCodeUrl }} style={styles.qrCode} />
          ) : (
            // Display a placeholder image if no QR code is generated yet
            <Image source={require('../assets/images/placeholder.png')} style={styles.qrCode} />
          )}
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>QR Code</Text>
          <Text style={styles.inputLabel}>URL</Text>
          <TextInput
            style={styles.input}
            placeholder="www.example.com"
            placeholderTextColor="#999"
            value={link}
            onChangeText={setLink}
          />
          <TouchableOpacity style={styles.button} onPress={generateQRCode}>
            <Text style={styles.buttonText}>Generate code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 16,
    marginTop: 40,
    width: '100%',
    padding: 20,
  },
  qrCode: {
    marginTop: 20,
    width: 350,
    height: 350,
    borderColor: '#333',
    borderWidth: 4,
  },
  formContainer: {
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 16,
    width: '100%',
    marginTop: 75,
    height: '40%',
  },
  label: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
    height: 60,
    fontSize: 17,
  },
  button: {
    backgroundColor: '#a855f7',
    borderRadius: 4,
    padding: 12,
    marginTop: 40,
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRCodeGenerator;
