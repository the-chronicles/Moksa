import { StyleSheet, Text, TextInput, View } from "react-native";

import Colors from "../../constants/colors";

function Input({ label, keyboardType, secure, placeholder }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secure}
        style={styles.input}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 25,
  },
  label: {
    color: "white",
    marginBottom: 10,
    fontFamily: "gilroy",
  },
  input: {
    // paddingVertical: 8,
    // paddingHorizontal: 6,
    padding: 20,
    backgroundColor: Colors.primary400,
    borderRadius: 2,
    fontSize: 16,
    fontFamily: "gilroy",
  },
});
