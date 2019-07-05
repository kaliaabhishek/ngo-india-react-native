import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button, Card, FAB } from "react-native-paper";
import { ngos } from "../utils/dummyData";

export default class NgoList extends Component {
  static navigationOptions = {
    headerTitle: "NGO India"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAdd = () => {
    this.props.navigation.navigate("AddNgo");
  };

  handleEventNavigation = () => {
    this.props.navigation.navigate("Events");
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
        <FAB style={styles.fab1} icon="add" onPress={this.handleAdd} />
        <FAB
          style={styles.fab2}
          icon="event-note"
          onPress={this.handleEventNavigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 2
  },
  fab1: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0
  },
  fab2: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 70
  }
});
