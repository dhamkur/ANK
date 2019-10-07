import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgHome: {
    backgroundColor: "#5a7ca4"
  },
  dotNotification: {
    position: "absolute",
    top: 0,
    left: 12
  },
  titleWelcome: {
    marginTop: 30,
    marginBottom: 30
  },
  titleHome1: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "300",
  },
  titleHome2: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "600",
  },
  homeCard: {
    height: 300,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
});

module.exports = styles;