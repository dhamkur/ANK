import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Row from "./Row";
import Column3 from "./Column3";
import Column5 from "./Column5";
import Column4 from "./Column4";
import styles from "./styles";

export default class List extends Component {
  render() {
    return (
      <TouchableOpacity style={{ marginTop: 25 }}>
        <Row>
          <Column3>
            <View style={[styles.listBox, { backgroundColor: this.props.bgColor }]}>
              <Icon name={this.props.iconName} size={24} color={this.props.iconColor} />
            </View>
          </Column3>
          <Column5>
            <Text style={styles.listTitle}>{this.props.title}</Text>
            <Text style={styles.listCategory}>{this.props.category}</Text>
          </Column5>
          <Column4>
            <Text style={styles.listTitle}>{this.props.currency}</Text>
          </Column4>
        </Row>
      </TouchableOpacity>
    )
  }
}