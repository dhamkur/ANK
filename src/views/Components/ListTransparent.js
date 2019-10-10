import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class ListTransparent extends Component {
  render() {
    return (
      <View style={styles.listTransparent}>
        <Text style={styles.listTitleTransparent}>{this.props.title}</Text>
      </View>
    )
  }
}