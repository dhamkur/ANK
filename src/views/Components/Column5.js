import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column5 extends Component {
  render() {
    return (
      <View style={styles.column5}>
        {this.props.children}
      </View>
    )
  }
}