import React from 'react';
import { View, Button, StyleSheet, Text, ImageBackground } from 'react-native';

const CreateNewScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/back2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Logo */}
        {/* <Image
          source={require('./assets/logo2.png')}
          style={styles.logo}
        /> */}

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Create New Customer"
            onPress={() => navigation.navigate('CustomerDetails')}
            color="#676CD3" // Set button color to gold
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Make the container transparent
  },
  logo: {
    width: 200, // Adjust the width of the logo as needed
    height: 200, // Adjust the height of the logo as needed
    marginBottom: 20, // Adjust the margin bottom as needed
  },
  buttonContainer: {
    width: '90%', // Adjust the width of the button container
    marginTop: 350, // Adjust the margin top as needed
    borderBottomStartRadius:200,
  },
});

export default CreateNewScreen;
