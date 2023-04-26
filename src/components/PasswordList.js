import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const PasswordList = ({ passwords }) => {
  const renderPassword = ({ item }) => {
    return (
      <View style={styles.passwordContainer}>
        <Text style={styles.passwordName}>{item.name}</Text>
        <Text style={styles.passwordValue}>{item.value}</Text>
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
          keyExtractor={(item) => item.value}
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
  passwordName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  passwordValue: {
    fontSize: 20,
  },
});

export default PasswordList;
