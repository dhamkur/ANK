import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.info}>
        <Text style={styles.infoText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  info: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#00b4d9"
  },
  infoText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff"
  }
});