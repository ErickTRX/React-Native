import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PasswordTips = () => {
  // Array de dicas de senha
  const data = [
    { id: 1, text: 'Use uma combinação de letras, números e caracteres especiais' },
    { id: 2, text: 'Não use informações pessoais como nome ou data de nascimento' },
    { id: 3, text: 'Evite senhas óbvias como "123456" ou "senha"' },
    { id: 4, text: 'Use senhas diferentes para contas diferentes' },
    { id: 5, text: 'Troque suas senhas regularmente' },
  ];

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
});

export default PasswordTips;
