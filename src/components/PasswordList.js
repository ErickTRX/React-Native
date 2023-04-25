import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const PasswordList = () => {
  const [passwords, setPasswords] = useState([]);

  const getSavedPasswords = async () => {
    try {
      const result = await SecureStore.getItemAsync('passwords');
      if (result) {
        setPasswords(JSON.parse(result));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSavedPasswords();
  }, []);

  const renderPassword = ({ item }) => {
    return (
      <View style={styles.passwordContainer}>
        <Text style={styles.password}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Passwords</Text>
      {passwords.length === 0 ? (
        <Text style={styles.empty}>No saved passwords</Text>
      ) : (
        <FlatList
          data={passwords}
          renderItem={renderPassword}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  empty: {
    fontSize: 20,
    textAlign: 'center',
  },
  passwordContainer: {
    marginBottom: 10,
  },
  password: {
    fontSize: 20,
  },
});

export default PasswordList;
