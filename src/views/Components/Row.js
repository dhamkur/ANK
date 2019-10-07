import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Row extends Component {
  render() {
    return (
      <View style={styles.row}>
        {this.props.children}
      </View>
    )
  }
}