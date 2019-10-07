import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column8 extends Component {
  render() {
    return (
      <View style={styles.column8}>
        {this.props.children}
      </View>
    )
  }
}