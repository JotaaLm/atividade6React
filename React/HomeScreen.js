import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

const HomeScreen = () => {
  const [chamadas, setChamadas] = useState([]);

  useEffect(() => {
    const fetchChamadas = async () => {
      try {
        const response = await api.get('/');
        setChamadas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChamadas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamadas</Text>
      <FlatList
        data={chamadas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.resumoDaAula}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HomeScreen;