import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import BackButton from './BackButton';

const styles = StyleSheet.create({
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

const Topic = ({ match }) => (
  <View>
    <BackButton />
    <Text style={styles.topic}>{match.params.topicId}</Text>
  </View>
);

export default Topic;