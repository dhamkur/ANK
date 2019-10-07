import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Column1 extends Component {
  render() {
    return (
      <View style={styles.column1}>
        {this.props.children}
      </View>
    )
  }
}