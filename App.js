import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, BackButton } from "react-router-native";
import Topics from './components/Topics';
import Home from './components/Home';
import About from './components/About';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
});

const App = () => (
  <NativeRouter>
    <BackButton/>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Topics</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </View>
  </NativeRouter>
);

export default App;
