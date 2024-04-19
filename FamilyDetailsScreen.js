import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FamilyDetailsScreen = ({ navigation }) => {
  const [connection, setConnection] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [temporaryAddress, setTemporaryAddress] = useState('');
  const [nicNumber, setNicNumber] = useState('');

  const handleNext = () => {
    // Logic to save family details
    navigation.navigate('OfficeDetails');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Family Connection"
        value={connection}
        onChangeText={setConnection}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Family Person Name"
        value={familyName}
        onChangeText={setFamilyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Permanent Address"
        value={permanentAddress}
        onChangeText={setPermanentAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Temporary Address"
        value={temporaryAddress}
        onChangeText={setTemporaryAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter NIC Number"
        value={nicNumber}
        onChangeText={(text) => setNicNumber(text.replace(/[^0-9]/g, '').slice(0, 12))} // Only allow 12 numbers
        keyboardType="number-pad" // Opens number pad
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default FamilyDetailsScreen;
