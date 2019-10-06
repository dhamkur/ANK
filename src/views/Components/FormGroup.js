import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class FormGroup extends Component {
  render() {
    return (
      <View style={styles.formGroup}>
        {this.props.children}
      </View>
    )
  }
}