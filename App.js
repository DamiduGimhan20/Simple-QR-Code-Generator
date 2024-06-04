// Import necessary dependencies from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import your components
import QRCodeGenerator from './components/QRCodeGenerator';
import QRScreen from './components/QRScreen';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Define the main component of your app
const App = () => {
  return (
    // Wrap your entire app with NavigationContainer
    <NavigationContainer>
      {/* Define Stack Navigator with initial route name */}
      <Stack.Navigator initialRouteName="QRCodeGenerator">
        {/* Define screen for QR Code Generator component */}
        <Stack.Screen 
          name="QRCodeGenerator" 
          component={QRCodeGenerator} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
        {/* Define screen for QR Screen component */}
        <Stack.Screen 
          name="QRScreen" 
          component={QRScreen} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the main component as the default export
export default App;
