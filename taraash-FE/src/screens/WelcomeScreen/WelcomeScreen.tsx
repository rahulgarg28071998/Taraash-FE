import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const WelcomeScreen = () => {
  const [userType, setUserType] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>Refining processes, perfecting execution</Text>

      <Text style={styles.selectLabel}>Select user type</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
          style={styles.picker}
          dropdownIconColor="#000"
        >
          <Picker.Item label="Select Type" value="" />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Manager" value="manager" />
          <Picker.Item label="Operator" value="operator" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
