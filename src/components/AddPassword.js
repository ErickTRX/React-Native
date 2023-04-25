import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import PasswordGenerator from './PasswordGenerator';

const AddPassword = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const newPassword = PasswordGenerator();
    setPassword(newPassword);
    savePassword(newPassword);
  };

  const savePassword = async (password) => {
    try {
      await SecureStore.setItemAsync('password', password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Passwords</Text>
      <PasswordGenerator setPassword={setPassword} savePassword={savePassword} />
      <Text style={styles.password}>{password}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  password: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default AddPassword;
