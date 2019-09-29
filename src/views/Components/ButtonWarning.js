import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.warning}>
        <Text style={styles.warningText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  warning: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f2d319"
  },
  warningText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff"
  }
});