// CustomAlert.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

const NewAlert = ({ onClose }) => (
  <View style={styles.alertContainer}>
    {/* Title Section */}
    <View style={styles.titleContainer}>
      <Image
        source={require("../../assets/images/moksa bg.png")}
        style={styles.titleImage}
      />
      <Text style={styles.titleText}>Incorrect Password</Text>
    </View>

    {/* Logo Section */}
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/images/moksasmall.png")}
        style={styles.logoImage}
      />
    </View>

    {/* Message Section */}
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>Check your password and try again.</Text>
    </View>

    {/* Button Section */}
    <TouchableOpacity style={styles.buttonContainer} onPress={onClose}>
      <View style={styles.button}>
        <PrimaryButton>OK</PrimaryButton>
        {/* <Text style={styles.buttonText}>OK</Text> */}
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  alertContainer: {
    padding: 16,
    backgroundColor: Colors.primary300,
    borderRadius: 8,
  },
  titleContainer: {
    position: "relative",
    alignItems: "center",
  },
  titleImage: {
    width: "100%",
    height: 100, // Adjust the height as needed
    resizeMode: "cover",
    position: "absolute",
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    // zIndex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  logoImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: "contain",
  },
  messageContainer: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: Colors.primary200,
    alignItems: "center",
    padding: 11,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "gilroy",
  },
});

export default NewAlert;
