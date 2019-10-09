import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class TabIcon extends Component {
  render() {
    var color = this.props.selected ? '#8374C8' : '#AFB3C2';

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <Icon style={{ color: color }} name={this.props.name || "circle"} size={32} />
        {
          /**
           <Text style={{ color: color, fontSize: 12 }}>{this.props.titleBar}</Text>
           */
        }
      </View>
    );
  }
}