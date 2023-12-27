import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

function PrimaryButton({ children }) {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 18,
    paddingHorizontal: 50,

    borderRadius: 8,
    // margin: 30,
    marginTop: 50,
    // padding: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'gilroy'
  },
});
