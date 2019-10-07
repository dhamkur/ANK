import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column12 extends Component {
  render() {
    return (
      <View style={styles.column12}>
        {this.props.children}
      </View>
    )
  }
}