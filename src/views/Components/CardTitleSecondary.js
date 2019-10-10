import React, { Component } from "react";
import { Text } from "react-native";
import styles from "./styles";

export default class CardTitleSecondary extends Component {
  render() {
    return (
      <Text style={styles.cardTitleSecondary}>{this.props.children}</Text>
    )
  }
}