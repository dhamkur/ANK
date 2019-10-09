import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default class ButtonOutlineCust1 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff",
        borderRadius: 25,
        borderColor: this.props.focused ? "#5236A7" : "#fff",
        borderWidth: 2
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "600",
          textAlign: "center",
          color: this.props.focused ? "#5236A7" : "#ddd"
        }}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}