import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const JobDetailsScreen = ({ navigation }) => {
  const [job, setJob] = useState('');
  const [jobPoint, setJobPoint] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');

  const handleNext = () => {
    // Logic to save job details
    navigation.navigate('FamilyDetails');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Job"
        value={job}
        onChangeText={setJob}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Job Point"
        value={jobPoint}
        onChangeText={setJobPoint}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter Monthly Income"
          value={monthlyIncome}
          onChangeText={(text) => setMonthlyIncome(text.replace(/[^0-9]/g, ''))} // Only allow numbers
          keyboardType="number-pad" // Opens number pad
        />
        <Text style={styles.currencyText}>LKR</Text>
      </View>
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
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  currencyText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default JobDetailsScreen;
