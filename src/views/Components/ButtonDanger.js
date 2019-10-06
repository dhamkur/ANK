import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.btnDanger}>
        <Text style={styles.btnDangerText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}