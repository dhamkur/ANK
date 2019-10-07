import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column11 extends Component {
  render() {
    return (
      <View style={styles.column11}>
        {this.props.children}
      </View>
    )
  }
}