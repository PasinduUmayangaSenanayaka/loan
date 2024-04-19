// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateNewScreen from './CreateNewScreen';
import CustomerDetailsScreen from './CustomerDetailsScreen';
import PawnGenerationScreen from './PawnGenerationScreen';
import AgreementScreen from './AgreementScreen';
import PersonalDetailsScreen from './PersonalDetailsScreen';
import JobDetailsScreen from './JobDetailsScreen';
import FamilyDetailsScreen from './FamilyDetailsScreen';
import OfficeDetailsScreen from './OfficeDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateNewCustomer">
        <Stack.Screen name="CreateNew" component={CreateNewScreen} />
        <Stack.Screen name="CustomerDetails" component={CustomerDetailsScreen} />
        <Stack.Screen name="PawnGeneration" component={PawnGenerationScreen} />
        <Stack.Screen name="Agreement" component={AgreementScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
        <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        <Stack.Screen name="FamilyDetails" component={FamilyDetailsScreen} />
        <Stack.Screen name="OfficeDetails" component={OfficeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
