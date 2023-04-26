import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';
import PasswordGenerator from './PasswordGenerator';
import PasswordList from './PasswordList';

const AddPassword = () => {
  const [passwordName, setPasswordName] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwords, setPasswords] = useState([]);

  const savePassword = () => {
    const newPassword = { name: passwordName, value: passwordValue };
    const newPasswordsArray = [...passwords, newPassword];
    setPasswords(newPasswordsArray);
    setPasswordName('');
    setPasswordValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Passwords</Text>
      <TextInput
        style={styles.input}
        placeholder="Password name"
        value={passwordName}
        onChangeText={(text) => setPasswordName(text)}
      />
      <PasswordGenerator setPassword={(password) => setPasswordValue(password)} />
      <View style={styles.passwordContainer}>
        <Text style={styles.password}>{passwordValue}</Text>
      </View>
      <Button title="Save Password" onPress={savePassword} disabled={!passwordName || !passwordValue} />
      <PasswordList passwords={passwords} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    marginBottom: 10,
    width: '80%',
  },
  password: {
    fontSize: 16,
  },
  generatedPassword: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AddPassword;
