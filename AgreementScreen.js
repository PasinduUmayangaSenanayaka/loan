// AgreementScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AgreementScreen = ({ navigation }) => {
  const handleAgree = () => {
    // Logic for handling agreement
    navigation.navigate('PersonalDetails');
  };

  return (
    <View style={styles.container}>
      <Text>Do you agree to the terms?</Text>

      <Button  title ="Agree" onPress={handleAgree} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-100,
    fontSize:50,
  },
});

export default AgreementScreen;
