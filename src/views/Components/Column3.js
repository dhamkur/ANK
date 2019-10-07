import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column3 extends Component {
  render() {
    return (
      <View style={styles.column3}>
        {this.props.children}
      </View>
    )
  }
}