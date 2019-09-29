import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.danger}>
        <Text style={styles.dangerText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  danger: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#d82727"
  },
  dangerText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff"
  }
});