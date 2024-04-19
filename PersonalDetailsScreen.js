import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import JobDetailsScreen from './JobDetailsScreen';

const PersonalDetailsScreen = ({ navigation }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDivisionalSecretariat, setSelectedDivisionalSecretariat] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const districts = [
    { label: 'Ampara', value: 'Ampara' },
    { label: 'Anuradhapura', value: 'Anuradhapura' },
    { label: 'Badulla', value: 'Badulla' },
    { label: 'Batticaloa', value: 'Batticaloa' },
    { label: 'Colombo', value: 'Colombo' },
    { label: 'Galle', value: 'Galle' },
    { label: 'Gampaha', value: 'Gampaha' },
    { label: 'Hambantota', value: 'Hambantota' },
    { label: 'Jaffna', value: 'Jaffna' },
    { label: 'Kalutara', value: 'Kalutara' },
    { label: 'Kandy', value: 'Kandy' },
    { label: 'Kegalle', value: 'Kegalle' },
    { label: 'Kilinochchi', value: 'Kilinochchi' },
    { label: 'Kurunegala', value: 'Kurunegala' },
    { label: 'Mannar', value: 'Mannar' },
    { label: 'Matale', value: 'Matale' },
    { label: 'Matara', value: 'Matara' },
    { label: 'Monaragala', value: 'Monaragala' },
    { label: 'Mullaitivu', value: 'Mullaitivu' },
    { label: 'Nuwara Eliya', value: 'Nuwara Eliya' },
    { label: 'Polonnaruwa', value: 'Polonnaruwa' },
    { label: 'Puttalam', value: 'Puttalam' },
    { label: 'Ratnapura', value: 'Ratnapura' },
    { label: 'Trincomalee', value: 'Trincomalee' },
  ];

  const divisionalSecretariats = {
    
      Ampara: [
        { label: 'Ampara Divisional Secretariat Office', value: 'Ampara Divisional Secretariat Office' },
        { label: 'Kalmunai Divisional Secretariat Office', value: 'Kalmunai Divisional Secretariat Office' },
        { label: 'Sammanthurai Divisional Secretariat Office', value: 'Sammanthurai Divisional Secretariat Office' },
        { label: 'Pottuvil Divisional Secretariat Office', value: 'Pottuvil Divisional Secretariat Office' },
        { label: 'Lahugala Divisional Secretariat Office', value: 'Lahugala Divisional Secretariat Office' },
        { label: 'Damana Divisional Secretariat Office', value: 'Damana Divisional Secretariat Office' },
        { label: 'Uhana Divisional Secretariat Office', value: 'Uhana Divisional Secretariat Office' },
        { label: 'Dehiattakandiya Divisional Secretariat Office', value: 'Dehiattakandiya Divisional Secretariat Office' },
        { label: 'Maha Oya Divisional Secretariat Office', value: 'Maha Oya Divisional Secretariat Office' }
      ],
      // Add other districts' divisional secretariat offices here if needed
    
    
      
        Colombo: [
          { label: 'Colombo Divisional Secretariat Office', value: 'Colombo DSO' },
          { label: 'Homagama Divisional Secretariat Office', value: 'Homagama DSO' },
          { label: 'Kaduwela Divisional Secretariat Office', value: 'Kaduwela DSO' },
          { label: 'Kesbewa Divisional Secretariat Office', value: 'Kesbewa DSO' },
          { label: 'Kotte Divisional Secretariat Office', value: 'Kotte DSO' },
          { label: 'Dehiwala-Mount Lavinia Divisional Secretariat Office', value: 'Dehiwala-Mount Lavinia DSO' },
          { label: 'Maharagama Divisional Secretariat Office', value: 'Maharagama DSO' },
          { label: 'Moratuwa Divisional Secretariat Office', value: 'Moratuwa DSO' },
          { label: 'Ratmalana Divisional Secretariat Office', value: 'Ratmalana DSO' },
        ],
        Gampaha: [
          { label: 'Gampaha Divisional Secretariat Office', value: 'Gampaha DSO' },
          { label: 'Negombo Divisional Secretariat Office', value: 'Negombo DSO' },
          { label: 'Kelaniya Divisional Secretariat Office', value: 'Kelaniya DSO' },
          { label: 'Minuwangoda Divisional Secretariat Office', value: 'Minuwangoda DSO' },
          { label: 'Ja-Ela Divisional Secretariat Office', value: 'Ja-Ela DSO' },
          { label: 'Wattala Divisional Secretariat Office', value: 'Wattala DSO' },
          { label: 'Divulapitiya Divisional Secretariat Office', value: 'Divulapitiya DSO' },
          { label: 'Katana Divisional Secretariat Office', value: 'Katana DSO' },
          { label: 'Mirigama Divisional Secretariat Office', value: 'Mirigama DSO' },
        ],
        Kandy: [
          { label: 'Kandy Divisional Secretariat Office', value: 'Kandy DSO' },
          { label: 'Akurana Divisional Secretariat Office', value: 'Akurana DSO' },
          { label: 'Gampola Divisional Secretariat Office', value: 'Gampola DSO' },
          { label: 'Katugastota Divisional Secretariat Office', value: 'Katugastota DSO' },
          { label: 'Kundasale Divisional Secretariat Office', value: 'Kundasale DSO' },
          { label: 'Nawalapitiya Divisional Secretariat Office', value: 'Nawalapitiya DSO' },
          { label: 'Pujapitiya Divisional Secretariat Office', value: 'Pujapitiya DSO' },
          { label: 'Teldeniya Divisional Secretariat Office', value: 'Teldeniya DSO' },
          { label: 'Udapalatha Divisional Secretariat Office', value: 'Udapalatha DSO' },
        ],
        Matara: [
          { label: 'Matara Divisional Secretariat Office', value: 'Matara DSO' },
          { label: 'Akuressa Divisional Secretariat Office', value: 'Akuressa DSO' },
          { label: 'Devinuwara Divisional Secretariat Office', value: 'Devinuwara DSO' },
          { label: 'Pitabeddara Divisional Secretariat Office', value: 'Pitabeddara DSO' },
          { label: 'Weligama Divisional Secretariat Office', value: 'Weligama DSO' },
          { label: 'Hakmana Divisional Secretariat Office', value: 'Hakmana DSO' },
          { label: 'Thihagoda Divisional Secretariat Office', value: 'Thihagoda DSO' },
          { label: 'Kamburupitiya Divisional Secretariat Office', value: 'Kamburupitiya DSO' },
          { label: 'Mulatiyana Divisional Secretariat Office', value: 'Mulatiyana DSO' },
        ],
        Jaffna: [
          { label: 'Jaffna Divisional Secretariat Office', value: 'Jaffna DSO' },
          { label: 'Chavakachcheri Divisional Secretariat Office', value: 'Chavakachcheri DSO' },
          { label: 'Kilinochchi Divisional Secretariat Office', value: 'Kilinochchi DSO' },
          { label: 'Point Pedro Divisional Secretariat Office', value: 'Point Pedro DSO' },
          { label: 'Vavuniya Divisional Secretariat Office', value: 'Vavuniya DSO' },
          { label: 'Mannar Divisional Secretariat Office', value: 'Mannar DSO' },
          { label: 'Mullaitivu Divisional Secretariat Office', value: 'Mullaitivu DSO' },
          { label: 'Batticaloa Divisional Secretariat Office', value: 'Batticaloa DSO' },
          { label: 'Trincomalee Divisional Secretariat Office', value: 'Trincomalee DSO' },
        ],
        Ampara: [
          { label: 'Ampara Divisional Secretariat Office', value: 'Ampara DSO' },
          { label: 'Kalmunai Divisional Secretariat Office', value: 'Kalmunai DSO' },
          { label: 'Sammanthurai Divisional Secretariat Office', value: 'Sammanthurai DSO' },
          { label: 'Pottuvil Divisional Secretariat Office', value: 'Pottuvil DSO' },
          { label: 'Lahugala Divisional Secretariat Office', value: 'Lahugala DSO' },
          { label: 'Damana Divisional Secretariat Office', value: 'Damana DSO' },
          { label: 'Uhana Divisional Secretariat Office', value: 'Uhana DSO' },
          { label: 'Dehiattakandiya Divisional Secretariat Office', value: 'Dehiattakandiya DSO' },
          { label: 'Maha Oya Divisional Secretariat Office', value: 'Maha Oya DSO' },
        ],
        Anuradhapura: [
          { label: 'Anuradhapura Divisional Secretariat Office', value: 'Anuradhapura DSO' },
          { label: 'Medawachchiya Divisional Secretariat Office', value: 'Medawachchiya DSO' },
          { label: 'Mihintale Divisional Secretariat Office', value: 'Mihintale DSO' },
          { label: 'Kekirawa Divisional Secretariat Office', value: 'Kekirawa DSO' },
          { label: 'Kahatagasdigiliya Divisional Secretariat Office', value: 'Kahatagasdigiliya DSO' },
          { label: 'Horowpathana Divisional Secretariat Office', value: 'Horowpathana DSO' },
          { label: 'Galenbindunuwewa Divisional Secretariat Office', value: 'Galenbindunuwewa DSO' },
          { label: 'Thalawa Divisional Secretariat Office', value: 'Thalawa DSO' },
          { label: 'Nochchiyagama Divisional Secretariat Office', value: 'Nochchiyagama DSO' },
        ],
        Badulla: [
          { label: 'Badulla Divisional Secretariat Office', value: 'Badulla DSO' },
          { label: 'Bandarawela Divisional Secretariat Office', value: 'Bandarawela DSO' },
          { label: 'Haputale Divisional Secretariat Office', value: 'Haputale DSO' },
          { label: 'Mahiyanganaya Divisional Secretariat Office', value: 'Mahiyanganaya DSO' },
          { label: 'Passara Divisional Secretariat Office', value: 'Passara DSO' },
          { label: 'Hali Ela Divisional Secretariat Office', value: 'Hali Ela DSO' },
          { label: 'Lunugala Divisional Secretariat Office', value: 'Lunugala DSO' },
          { label: 'Uva Paranagama Divisional Secretariat Office', value: 'Uva Paranagama DSO' },
          { label: 'Welimada Divisional Secretariat Office', value: 'Welimada DSO' },
        ],
        Batticaloa: [
          { label: 'Batticaloa Divisional Secretariat Office', value: 'Batticaloa DSO' },
          { label: 'Kattankudy Divisional Secretariat Office', value: 'Kattankudy DSO' },
          { label: 'Paddiruppu Divisional Secretariat Office', value: 'Paddiruppu DSO' },
          { label: 'Manmunai South West Divisional Secretariat Office', value: 'Manmunai South West DSO' },
          { label: 'Manmunai Pattu Divisional Secretariat Office', value: 'Manmunai Pattu DSO' },
          { label: 'Koralaipattu Central Divisional Secretariat Office', value: 'Koralaipattu Central DSO' },
          { label: 'Koralaipattu North Divisional Secretariat Office', value: 'Koralaipattu North DSO' },
          { label: 'Koralaipattu South Divisional Secretariat Office', value: 'Koralaipattu South DSO' },
          { label: 'Koralaipattu West Divisional Secretariat Office', value: 'Koralaipattu West DSO' },
        ],
        Ratnapura: [
          { label: 'Ratnapura Divisional Secretariat Office', value: 'Ratnapura DSO' },
          { label: 'Balangoda Divisional Secretariat Office', value: 'Balangoda DSO' },
          { label: 'Embilipitiya Divisional Secretariat Office', value: 'Embilipitiya DSO' },
          { label: 'Kuruwita Divisional Secretariat Office', value: 'Kuruwita DSO' },
          { label: 'Elapatha Divisional Secretariat Office', value: 'Elapatha DSO' },
          { label: 'Eheliyagoda Divisional Secretariat Office', value: 'Eheliyagoda DSO' },
          { label: 'Kalawana Divisional Secretariat Office', value: 'Kalawana DSO' },
          { label: 'Pelmadulla Divisional Secretariat Office', value: 'Pelmadulla DSO' },
          { label: 'Nivithigala Divisional Secretariat Office', value: 'Nivithigala DSO' },
        ],
        Kurunegala: [
          { label: 'Kurunegala Divisional Secretariat Office', value: 'Kurunegala DSO' },
          { label: 'Kuliyapitiya Divisional Secretariat Office', value: 'Kuliyapitiya DSO' },
          { label: 'Nikaweratiya Divisional Secretariat Office', value: 'Nikaweratiya DSO' },
          { label: 'Panduwasnuwara Divisional Secretariat Office', value: 'Panduwasnuwara DSO' },
          { label: 'Wariyapola Divisional Secretariat Office', value: 'Wariyapola DSO' },
          { label: 'Giriulla Divisional Secretariat Office', value: 'Giriulla DSO' },
          { label: 'Alawwa Divisional Secretariat Office', value: 'Alawwa DSO' },
          { label: 'Polgahawela Divisional Secretariat Office', value: 'Polgahawela DSO' },
          { label: 'Mahawa Divisional Secretariat Office', value: 'Mahawa DSO' },
        ],
        Kalutara: [
          { label: 'Kalutara Divisional Secretariat Office', value: 'Kalutara DSO' },
          { label: 'Horana Divisional Secretariat Office', value: 'Horana DSO' },
          { label: 'Matugama Divisional Secretariat Office', value: 'Matugama DSO' },
          { label: 'Beruwala Divisional Secretariat Office', value: 'Beruwala DSO' },
          { label: 'Agalawatta Divisional Secretariat Office', value: 'Agalawatta DSO' },
          { label: 'Bandaragama Divisional Secretariat Office', value: 'Bandaragama DSO' },
          { label: 'Dodangoda Divisional Secretariat Office', value: 'Dodangoda DSO' },
          { label: 'Ingiriya Divisional Secretariat Office', value: 'Ingiriya DSO' },
          { label: 'Panadura Divisional Secretariat Office', value: 'Panadura DSO' },
        ],
        Kegalle: [
          { label: 'Kegalle Divisional Secretariat Office', value: 'Kegalle DSO' },
          { label: 'Mawanella Divisional Secretariat Office', value: 'Mawanella DSO' },
          { label: 'Ruwanwella Divisional Secretariat Office', value: 'Ruwanwella DSO' },
          { label: 'Aranayaka Divisional Secretariat Office', value: 'Aranayaka DSO' },
          { label: 'Dehiowita Divisional Secretariat Office', value: 'Dehiowita DSO' },
          { label: 'Deraniyagala Divisional Secretariat Office', value: 'Deraniyagala DSO' },
          { label: 'Galigamuwa Divisional Secretariat Office', value: 'Galigamuwa DSO' },
          { label: 'Warakapola Divisional Secretariat Office', value: 'Warakapola DSO' },
          { label: 'Rambukkana Divisional Secretariat Office', value: 'Rambukkana DSO' },
        ],
        Hambantota: [
          { label: 'Hambantota Divisional Secretariat Office', value: 'Hambantota DSO' },
          { label: 'Tangalle Divisional Secretariat Office', value: 'Tangalle DSO' },
          { label: 'Ambalantota Divisional Secretariat Office', value: 'Ambalantota DSO' },
          { label: 'Tissamaharama Divisional Secretariat Office', value: 'Tissamaharama DSO' },
          { label: 'Walasmulla Divisional Secretariat Office', value: 'Walasmulla DSO' },
          { label: 'Sooriyawewa Divisional Secretariat Office', value: 'Sooriyawewa DSO' },
          { label: 'Lunugamvehera Divisional Secretariat Office', value: 'Lunugamvehera DSO' },
          { label: 'Weeraketiya Divisional Secretariat Office', value: 'Weeraketiya DSO' },
          { label: 'Angunakolapelessa Divisional Secretariat Office', value: 'Angunakolapelessa DSO' },
        ],
        Matale: [
          { label: 'Matale Divisional Secretariat Office', value: 'Matale DSO' },
          { label: 'Dambulla Divisional Secretariat Office', value: 'Dambulla DSO' },
          { label: 'Rattota Divisional Secretariat Office', value: 'Rattota DSO' },
          { label: 'Galewela Divisional Secretariat Office', value: 'Galewela DSO' },
          { label: 'Laggala Divisional Secretariat Office', value: 'Laggala DSO' },
          { label: 'Naula Divisional Secretariat Office', value: 'Naula DSO' },
          { label: 'Palapathwela Divisional Secretariat Office', value: 'Palapathwela DSO' },
          { label: 'Wilgamuwa Divisional Secretariat Office', value: 'Wilgamuwa DSO' },
          { label: 'Ukuwela Divisional Secretariat Office', value: 'Ukuwela DSO' },
        ],
        NuwaraEliya: [
          { label: 'Nuwara Eliya Divisional Secretariat Office', value: 'Nuwara Eliya DSO' },
          { label: 'Hatton Divisional Secretariat Office', value: 'Hatton DSO' },
          { label: 'Kotmale Divisional Secretariat Office', value: 'Kotmale DSO' },
          { label: 'Hanguranketha Divisional Secretariat Office', value: 'Hanguranketha DSO' },
          { label: 'Ambagamuwa Divisional Secretariat Office', value: 'Ambagamuwa DSO' },
          { label: 'Walapane Divisional Secretariat Office', value: 'Walapane DSO' },
          { label: 'Udapussellawa Divisional Secretariat Office', value: 'Udapussellawa DSO' },
          { label: 'Agarapathana Divisional Secretariat Office', value: 'Agarapathana DSO' },
          { label: 'Ramboda Divisional Secretariat Office', value: 'Ramboda DSO' },
        ],
        Polonnaruwa: [
          { label: 'Polonnaruwa Divisional Secretariat Office', value: 'Polonnaruwa DSO' },
          { label: 'Medirigiriya Divisional Secretariat Office', value: 'Medirigiriya DSO' },
          { label: 'Hingurakgoda Divisional Secretariat Office', value: 'Hingurakgoda DSO' },
          { label: 'Dimbulagala Divisional Secretariat Office', value: 'Dimbulagala DSO' },
          { label: 'Elahera Divisional Secretariat Office', value: 'Elahera DSO' },
          { label: 'Lankapura Divisional Secretariat Office', value: 'Lankapura DSO' },
          { label: 'Thamankaduwa Divisional Secretariat Office', value: 'Thamankaduwa DSO' },
          { label: 'Welikanda Divisional Secretariat Office', value: 'Welikanda DSO' },
          { label: 'Kaduruwela Divisional Secretariat Office', value: 'Kaduruwela DSO' },
        ],
        Puttalam: [
          { label: 'Puttalam Divisional Secretariat Office', value: 'Puttalam DSO' },
          { label: 'Chilaw Divisional Secretariat Office', value: 'Chilaw DSO' },
          { label: 'Wennappuwa Divisional Secretariat Office', value: 'Wennappuwa DSO' },
          { label: 'Nattandiya Divisional Secretariat Office', value: 'Nattandiya DSO' },
          { label: 'Mahakumbukkadawala Divisional Secretariat Office', value: 'Mahakumbukkadawala DSO' },
          { label: 'Anamaduwa Divisional Secretariat Office', value: 'Anamaduwa DSO' },
          { label: 'Madampe Divisional Secretariat Office', value: 'Madampe DSO' },
          { label: 'Marawila Divisional Secretariat Office', value: 'Marawila DSO' },
          { label: 'Puttalam Divisional Secretariat Office', value: 'Puttalam DSO' },
        ],
        Mannar: [
          { label: 'Mannar Divisional Secretariat Office', value: 'Mannar DSO' },
          { label: 'Nanaddan Divisional Secretariat Office', value: 'Nanaddan DSO' },
          { label: 'Musali Divisional Secretariat Office', value: 'Musali DSO' },
          { label: 'Madhu Divisional Secretariat Office', value: 'Madhu DSO' },
          { label: 'Manthai West Divisional Secretariat Office', value: 'Manthai West DSO' },
          { label: 'Manthai East Divisional Secretariat Office', value: 'Manthai East DSO' },
          { label: 'Welioya Divisional Secretariat Office', value: 'Welioya DSO' },
          { label: 'Sri Lanka Divisional Secretariat Office', value: 'Sri Lanka DSO' },
          { label: 'Adampan Divisional Secretariat Office', value: 'Adampan DSO' },
        ],
        Mullaitivu: [
          { label: 'Mullaitivu Divisional Secretariat Office', value: 'Mullaitivu DSO' },
          { label: 'Oddusuddan Divisional Secretariat Office', value: 'Oddusuddan DSO' },
          { label: 'Puthukkudiyiruppu Divisional Secretariat Office', value: 'Puthukkudiyiruppu DSO' },
          { label: 'Manthai East Divisional Secretariat Office', value: 'Manthai East DSO' },
          { label: 'Maritimepattu Divisional Secretariat Office', value: 'Maritimepattu DSO' },
          { label: 'Thunukkai Divisional Secretariat Office', value: 'Thunukkai DSO' },
          { label: 'Weli Oya Divisional Secretariat Office', value: 'Weli Oya DSO' },
          { label: 'Puthukudiyiruppu Divisional Secretariat Office', value: 'Puthukudiyiruppu DSO' },
          { label: 'Tamil Eelam Divisional Secretariat Office', value: 'Tamil Eelam DSO' },
        ],
        Kilinochchi: [
          { label: 'Kilinochchi Divisional Secretariat Office', value: 'Kilinochchi DSO' },
          { label: 'Karachchi Divisional Secretariat Office', value: 'Karachchi DSO' },
          { label: 'Pachchilaipalli Divisional Secretariat Office', value: 'Pachchilaipalli DSO' },
          { label: 'Poonakary Divisional Secretariat Office', value: 'Poonakary DSO' },
          { label: 'Thunukkai Divisional Secretariat Office', value: 'Thunukkai DSO' },
          { label: 'Tamil Eelam Divisional Secretariat Office', value: 'Tamil Eelam DSO' },
          { label: 'Tamil Eelam Divisional Secretariat Office', value: 'Tamil Eelam DSO' },
          { label: 'Tamil Eelam Divisional Secretariat Office', value: 'Tamil Eelam DSO' },
          { label: 'Tamil Eelam Divisional Secretariat Office', value: 'Tamil Eelam DSO' },
        ],
        Vavuniya: [
          { label: 'Vavuniya Divisional Secretariat Office', value: 'Vavuniya DSO' },
          { label: 'Vavuniya North Divisional Secretariat Office', value: 'Vavuniya North DSO' },
          { label: 'Vavuniya South Divisional Secretariat Office', value: 'Vavuniya South DSO' },
          { label: 'Vavuniya Tamil Divisional Secretariat Office', value: 'Vavuniya Tamil DSO' },
          { label: 'Vavuniya Tamil Divisional Secretariat Office', value: 'Vavuniya Tamil DSO' },
          { label: 'Vavuniya Tamil Divisional Secretariat Office', value: 'Vavuniya Tamil DSO' },
          { label: 'Vavuniya Tamil Divisional Secretariat Office', value: 'Vavuniya Tamil DSO' },
          { label: 'Vavuniya Tamil Divisional Secretariat Office', value: 'Vavuniya Tamil DSO' },
          { label: 'Vavuniya Tamil Divisional Secretariat Office', value: 'Vavuniya Tamil DSO' },
        ],
      };
      
      
      
  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
    setSelectedDivisionalSecretariat('');
  };

  const handleSaveDetails = () => {
    // Code to save details goes here
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Selected District:', selectedDistrict);
    console.log('Selected Divisional Secretariat:', selectedDivisionalSecretariat);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label1}> Customer Full Name:</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Custommer Full Name"
      />

      <Text style={styles.label2}>Customer Address (as per NIC):</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter Customer Address"
      />

      <Text style={styles.label3}>Select your District:</Text>
      <Picker
        selectedValue={selectedDistrict}
        onValueChange={handleDistrictChange}
        style={styles.picker}
      >
        <Picker.Item label="Select District" value="" />
        {districts.map((district) => (
          <Picker.Item key={district.value} label={district.label} value={district.value} />
        ))}
      </Picker>

      {selectedDistrict !== '' && (
        <>
          <Text style={styles.label}>Select your Divisional Secretariat:</Text>
          <Picker
            selectedValue={selectedDivisionalSecretariat}
            onValueChange={(itemValue) => setSelectedDivisionalSecretariat(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label={`Select ${selectedDistrict} Divisional Secretariat`} value="" />
            {divisionalSecretariats[selectedDistrict].map((office) => (
              <Picker.Item key={office.value} label={office.label} value={office.value} />
            ))}
          </Picker>
        </>
      )}

<Button
        title="Create New"
        onPress={() => navigation.navigate('JobDetailsScreen')}
        color="#000CFE" // Set button color to gold
        style={styles.button} // Apply custom style to the button
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop:200,
    padding: 5,
    marginLeft:10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },

  label1: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:-50,
  },

  label2: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
  },

  label3: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
  },
  label4: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
  },
  picker: {
    width: '80%',
    height: 50,
    marginBottom: 20,
    marginTop:10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default PersonalDetailsScreen;
