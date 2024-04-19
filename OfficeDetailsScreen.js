import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const OfficeDetailsScreen = ({ navigation }) => {
  const [monthlyPremium, setMonthlyPremium] = useState('');
  const [waitingPeriod, setWaitingPeriod] = useState('');

  const handleNext = () => {
    // Logic to save office details
    // Navigate to the home page
    navigation.navigate('CreateNewScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Monthly Premium"
        value={monthlyPremium}
        onChangeText={(text) => setMonthlyPremium(text.replace(/[^0-9]/g, ''))} // Allow only numbers
        keyboardType="number-pad" // Opens number pad
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Waiting Period"
        value={waitingPeriod}
        onChangeText={(text) => setWaitingPeriod(text.replace(/[^0-9]/g, ''))} // Allow only numbers
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

export default OfficeDetailsScreen;
