import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BackButton from './BackButton';

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
});

const Home = () => {
  return (
    <View>
      <BackButton />
      <Text style={styles.header}>Home</Text>
    </View>
  );
} 

export default Home;