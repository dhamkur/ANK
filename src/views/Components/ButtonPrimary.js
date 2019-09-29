import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.primary}>
        <Text style={styles.primaryText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  primary: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#005386"
  },
  primaryText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff"
  }
});