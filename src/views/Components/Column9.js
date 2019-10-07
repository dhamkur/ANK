import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column9 extends Component {
  render() {
    return (
      <View style={styles.column9}>
        {this.props.children}
      </View>
    )
  }
}