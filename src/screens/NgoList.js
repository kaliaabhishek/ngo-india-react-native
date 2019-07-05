import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  FAB
} from "react-native-paper";
import { ngos } from "../utils/dummyData";

export default class NgoList extends Component {
  static navigationOptions = {
    headerTitle: "NGOs"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAdd = () => {
    this.props.navigation.navigate("AddNgo");
  };

  handleSelect = ngo => {
    this.props.navigation.navigate("Ngo", { ngo: ngo });
  };

  render() {
    return (
      <View>
        <ScrollView>
          {ngos.map((ngo, index) => {
            return (
              <Card
                style={styles.card}
                key={index}
                onPress={() => this.handleSelect(ngo)}
              >
                <Card.Title
                  title={ngo.name}
                  subtitle={ngo.description}
                  left={props => <Avatar.Icon {...props} icon="flare" />}
                />
                <Card.Actions>
                  <Button>View</Button>
                </Card.Actions>
              </Card>
            );
          })}
        </ScrollView>
        <FAB style={styles.fab} icon="add" onPress={this.handleAdd} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 2
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0
  }
});
