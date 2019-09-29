import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.default}>
        <Text style={styles.defaultText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#494949",
    backgroundColor: "#fff"
  },
  defaultText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#494949"
  }
});