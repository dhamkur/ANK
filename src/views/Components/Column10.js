import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column10 extends Component {
  render() {
    return (
      <View style={styles.column10}>
        {this.props.children}
      </View>
    )
  }
}