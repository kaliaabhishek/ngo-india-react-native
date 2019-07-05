import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Ngo extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam("ngo").name
  });
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ngo = this.props.navigation.getParam("ngo");
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{
            uri: `https://source.unsplash.com/random?ok${Math.random()}`
          }}
        />
        <Text style={styles.description}> {ngo.description} </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
          dolorem itaque fuga rem quo quasi vitae, harum vel eaque quae officia
          libero doloremque et voluptas nulla sapiente dolores quia.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
          dolorem itaque fuga rem quo quasi vitae, harum vel eaque quae officia
          libero doloremque et voluptas nulla sapiente dolores quia.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
          dolorem itaque fuga rem quo quasi vitae, harum vel eaque quae officia
          libero doloremque et voluptas nulla sapiente dolores quia.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
          dolorem itaque fuga rem quo quasi vitae, harum vel eaque quae officia
          libero doloremque et voluptas nulla sapiente dolores quia.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  description: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10
  }
});
