import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.cardHeader}>
        {this.props.children}
      </View>
    )
  }
}