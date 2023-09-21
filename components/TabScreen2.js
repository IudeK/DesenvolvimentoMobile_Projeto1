import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function TabScreen2() {
  const data = [
    { key: '1', message: 'Quadrado 1' },
    { key: '2', message: 'Quadrado 2' },
    { key: '3', message: 'Quadrado 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.square}>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  flatListContainer: {
    alignItems: 'center',     
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: 'white',
    fontSize: 16,
  },
});

export default TabScreen2;
