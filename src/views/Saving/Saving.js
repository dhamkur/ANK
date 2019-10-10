import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Column8 from "../Components/Column8";
import Column4 from "../Components/Column4";
import Button from "../Components/ButtonSuccess";
import Br from "../Components/Br";
import Card from "../Components/Card";
import CardHeader from "../Components/CardHeader";
import CardTitle from "../Components/CardTitle";
import CardTitleSecondary from "../Components/CardTitleSecondary";
import CardBody from "../Components/CardBody";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

export default class Saving extends Component {
  render() {
    return (
      <ScrollView style={styles.bgScreen}>
        <Container>
          <View style={styles.containerHeader}>
            <Text style={styles.titlePage1}>Saving</Text>
          </View>

          <Button>
            <Icon name="plus-circle" size={16} />
            <Text> Add Dream Saver</Text>
          </Button>

          <Br />
          <Card>
            <CardHeader>
              <CardTitle>Investment</CardTitle>
              <CardTitleSecondary>September 2020</CardTitleSecondary>
            </CardHeader>
            <CardBody>
              <Text style={{ fontSize: 12 }}>Fund Raised</Text>
              <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: "600", color: "#000" }}>$3,500.00</Text>
              <Row>
                <Column8>
                  <Text style={{ fontSize: 12 }}>Saving Recommendation</Text>
                  <Text style={{ fontSize: 16 }}>$300.00/mo</Text>
                </Column8>
                <Column4>
                  <Text style={{ fontSize: 12 }}>Target Saving</Text>
                  <Text style={{ fontSize: 16 }}>$6,000.00</Text>
                </Column4>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </ScrollView>
    )
  }
}