import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const PasswordGenerator = ({ setPassword }) => {
  const generatePassword = () => {
    // Dicionário de palavras para formar a senha
    const words = ['abacate', 'bola', 'caminhada', 'dinheiro', 'escritorio', 'felicidade', 'girafa', 'hotel', 'internet', 'jardim', 'kiwi', 'limonada', 'mochila', 'navio', 'oceano', 'piano', 'queijo', 'restaurante', 'sapato', 'tigre', 'urso', 'violinista', 'xadrez', 'yoga', 'zebra', '123456789'
  ];
    // Lista de caracteres especiais
    const specialChars = '!@#$%&*_-+=';
    // Lista de números
    const numbers = '0123456789';
    
    // Seleciona 3 palavras aleatórias do dicionário
    const randomWords = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
    }

    // Pega a segunda letra de cada palavra e coloca em maiúsculo
    const secondLetters = randomWords.map(word => word[1].toUpperCase());

    // Seleciona um caractere especial aleatório
    const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    // Seleciona um número aleatório
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    // Gera um conjunto de caracteres aleatórios para completar a senha
    const randomChars = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * 26);
      randomChars.push(String.fromCharCode(97 + randomIndex));
    }

    // Junta tudo para formar a senha
    const newPassword = `${secondLetters.join('')}${randomSpecialChar}${randomNumber}${randomChars.join('')}`;

    // Define a senha no estado do componente
    setPassword(newPassword);
  };

  return (
    <View>
      <Button title="Generate Password" onPress={generatePassword} />
    </View>
  );
};

export default PasswordGenerator;
