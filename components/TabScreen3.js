import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function TabScreen3() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <Text>Digite algo:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Text>Você digitou: {inputText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default TabScreen3;
