import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>
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
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "gilroy",
  },
});
