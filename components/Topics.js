import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Topic from './Topic';
import { Route, Link } from "react-router-native";
import BackButton from './BackButton';

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => (
        <View>
          <BackButton />
          <Text style={styles.topic}>Please select a topic.</Text>
        </View>
      )}
    />
  </View>
);

export default Topics;