import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ContainerDeep from "../Components/ContainerDeep";
import Row from "../Components/Row";
import Column12 from "../Components/Column12";
import PullRight from "../Components/PullRight";
import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.bgHome}>
        <ContainerDeep>
          <Row>
            <Column12>
              <PullRight>
                <TouchableOpacity>
                  <Icon name="bell-o" size={22} color="#fff" />
                  <Icon name="circle" size={14} color="#EFB810" style={styles.dotNotification} />
                </TouchableOpacity>
              </PullRight>
            </Column12>
          </Row>

          <ImageBackground source={require("../../assets/img/saving.png")}
            style={{
              position: "absolute",
              top: 130,
              left: 250,
              width: 100,
              height: 100
            }}
          />

          <View style={styles.titleWelcome}>
            <Text style={styles.titleHome1}>Welcome back</Text>
            <Text style={styles.titleHome2}>George</Text>
          </View>
          <View style={styles.titleWelcome}>
            <Text style={styles.titleHome1}>Your balance</Text>
            <Text style={styles.titleHome2}>$35,640.00</Text>
          </View>
        </ContainerDeep>


        <View style={styles.homeCard}>
          <ContainerDeep>
            <Text>Test</Text>
          </ContainerDeep>
        </View>
      </ScrollView>
    )
  }
}