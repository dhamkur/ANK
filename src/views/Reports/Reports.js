import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import Container from "../Components/Container";
import ButtonOutline from "../Components/ButtonOutlineCust1";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";
import styles from "../styles";

export default class Reports extends Component {
  render() {
    return (
      <ScrollView style={styles.bgReports}>
        <Container>
          <View style={styles.containerReportsHeader}>
            <Text style={styles.titleReport1}>Reports</Text>
          </View>
          <Row>
            <Column4>
              <ButtonOutline focused>
                <Text>Week</Text>
              </ButtonOutline>
            </Column4>
            <Column4>
              <ButtonOutline focused={false}>
                <Text>Month</Text>
              </ButtonOutline>
            </Column4>
            <Column4>
              <ButtonOutline focused={false}>
                <Text>Year</Text>
              </ButtonOutline>
            </Column4>
          </Row>
        </Container>
      </ScrollView>
    )
  }
}