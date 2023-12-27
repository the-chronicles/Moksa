import { StyleSheet, Text, View } from "react-native";

function Header({ children }) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "gilroy",
  },
});
