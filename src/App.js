import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import MainNavigator from "./navigation/MainNavigator";

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return <AppContainer />;
};

const styles = StyleSheet.create({});

export default App;
