import { StyleSheet, Dimensions } from "react-native";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "#6699cc",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  }
}

const styles = StyleSheet.create({
  shadow1: elevationShadowStyle(5),
  shadow2: elevationShadowStyle(10),
  shadow3: elevationShadowStyle(20),
  bgLogin: {
    backgroundColor: "#fff",
    flex: 1
  },
  containerLogin: {
    padding: 25
  },
  headerLogin: {
    marginTop: 60,
    marginBottom: 30
  },
  logoLogin: {
    marginBottom: 30,
    width: 155,
    height: 43
  },
  titleLogin1: {
    fontSize: 32,
    fontWeight: "600",
    color: "#494949"
  },
  titleLogin2: {
    fontSize: 32,
    fontWeight: "600",
    color: "#cecece"
  },
  colorGrey: {
    color: "#cecece"
  },
  bgHome: {
    flex: 1,
    backgroundColor: "#5236A7",
    position: "relative"
  },
  imgBg: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
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
    fontWeight: "300"
  },
  titleHome2: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "600"
  },
  titleHome3: {
    color: "#5236A7",
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "400"
  },
  homeCard: {
    flex: 1,
    position: "relative",
    height: "auto",
    zIndex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  containerBtnAdd: {
    flex: 1,
    zIndex: 3,
    width: 50,
    height: 50,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: -25,
    alignSelf: "flex-end"
  },
  btnAdd: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#00E39C",
    alignItems: "center"
  },
  bgScreen: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative"
  },
  containerHeader: {
    marginBottom: 30
  },
  titlePage1: {
    color: "#5236A7",
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "600"
  }
});

module.exports = styles;