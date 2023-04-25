import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const PasswordGenerator = ({ setPassword, savePassword }) => {

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
    savePassword(newPassword);
  };

  return (
    <View>
      <Button title="Generate Password" onPress={generatePassword} />
    </View>
  );
};

export default PasswordGenerator;
