import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ProductInfoScreen = ({ navigation }) => {
  const [gram, setGram] = useState('');
  const predefinedPawnValue = 160000; // Predefined pawn value

  const calculatePawns = (grams) => {
    return grams ? grams / 8 : ''; // Calculate pawns based on grams
  };

  const calculatePawnValue = (grams) => {
    const pawns = calculatePawns(Number(grams));
    const pawnValue = pawns ? pawns * predefinedPawnValue : '';

    // Format pawn value in Sri Lankan currency
    const formattedPawnValue = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(pawnValue);

    return formattedPawnValue;
  };

  const handleNext = () => {
    // Logic to navigate to the next screen
    navigation.navigate('Agreement');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label1}>Net Weight/Impure Weight:</Text>
      <TextInput
        style={styles.input}
        value={gram}
        onChangeText={text => setGram(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label2}>Number of Pawns:</Text>
      <TextInput
        style={styles.input}
        value={calculatePawns(Number(gram)).toString()}
        editable={false} // Disable editing
      />
      
      <Text style={styles.label3}>Pawn Value: </Text>
      <TextInput
        style={styles.input}
        value={calculatePawnValue(Number(gram)).toString()}
        editable={false} // Disable editing
      />
      <Button
        title="Next"
        onPress={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop:300,
  },
  label1: {
    fontSize: 18,
    marginBottom: 10,
    marginTop:-250,
  },
  label2: {
    fontSize: 18,
    marginBottom: 10,
    marginTop:40,
  },
  label3: {
    fontSize: 18,
    marginBottom: 10,
    marginTop:40,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ProductInfoScreen;
