import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

export default class Login extends Component {
  static navigationOptions = {
    headerTitle: "Login to NGO India"
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleTextChange = (text, name) => this.setState({ [name]: text });

  handleSubmit = () => {
    this.props.navigation.navigate("App");
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          label="Email"
          onChangeText={text => this.handleTextChange(text, "email")}
          value={email}
          style={styles.textField}
        />
        <TextInput
          label="Password"
          onChangeText={text => this.handleTextChange(text, "password")}
          value={password}
          style={styles.textField}
        />
        <Button mode="contained" onPress={this.handleSubmit}>
          Log In
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  textField: {
    margin: 5
  }
});
