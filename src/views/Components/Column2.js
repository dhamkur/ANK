import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column2 extends Component {
  render() {
    return (
      <View style={styles.column2}>
        {this.props.children}
      </View>
    )
  }
}