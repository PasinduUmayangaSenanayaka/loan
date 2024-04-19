import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';

const CustomerDetailsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nic, setNic] = useState('');

  const handleNext = () => {
    // Logic to validate and save customer details
    navigation.navigate('PawnGeneration');
  };

  return (
    <ImageBackground
      source={require('./assets/back11.jpg')} // Update the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title1}>Customer Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Customer Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.title2}>Customer Whatsapp Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Whatsapp Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad" // Opens number pad
          maxLength={10} // Limits to 10 characters
        />
        <Text style={styles.title3}>Customer (NIC Number:) </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter NIC Number"
          value={nic}
          onChangeText={(text) => setNic(text.replace(/[^0-9]/g, ''))} // Only allow numbers
          keyboardType="number-pad" // Opens number pad
        />
        <Button title="Next" onPress={handleNext} />
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
    padding: 20,
    alignItems: 'center',
  },
  title1: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 50,
  },
  title2: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  title3: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  
});

export default CustomerDetailsScreen;
