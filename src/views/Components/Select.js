import React, { Component } from "react";
import { View, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class Select extends Component {
  render() {
    return (
      <View style={styles.custSelectFormGroup}>
        <Picker
          selectedValue={this.props.selectedValue}
          onValueChange={this.props.onValueChange}
          mode={this.props.mode}
          style={styles.custSelect}
        >
          {this.props.children}
        </Picker>
        <Icon name="unsorted" size={16} color="#b8b8b8" style={styles.custSelectCaret} />
      </View>
    )
  }
}