import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BackButton from './BackButton';


const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
});

const About = () => {
  return (
    <View>
      <BackButton />
      <Text style={styles.header}>About</Text>
    </View>
  );
}
export default About;