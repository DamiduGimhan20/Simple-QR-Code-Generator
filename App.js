import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import QRCodeGenerator from './components/QRCodeGenerator'; // Import the QRCodeGenerator component

// Main App component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Render the QRCodeGenerator component */}
      <QRCodeGenerator />
    </SafeAreaView>
  );
};

// Stylesheet for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
  },
});

export default App; // Export the App component as the default export
