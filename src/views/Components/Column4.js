import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column4 extends Component {
  render() {
    return (
      <View style={styles.column4}>
        {this.props.children}
      </View>
    )
  }
}