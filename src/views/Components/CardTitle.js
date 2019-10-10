import React, { Component } from "react";
import { Text } from "react-native";
import styles from "./styles";

export default class CardTitle extends Component {
  render() {
    return (
      <Text style={styles.cardTitle}>{this.props.children}</Text>
    )
  }
}