import { StyleSheet, View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import Header from "../components/UI/Texts/Header";

function LoginScreen() {
  return (
    <>
      <View style={styles.rootScreen}>
        <AuthContent />
      </View>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
