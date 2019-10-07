import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column6 extends Component {
  render() {
    return (
      <View style={styles.column6}>
        {this.props.children}
      </View>
    )
  }
}