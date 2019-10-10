import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.btnSuccess}>
        <Text style={styles.btnSuccessText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}