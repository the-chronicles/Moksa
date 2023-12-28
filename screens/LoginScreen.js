import { StyleSheet, View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

function LoginScreen() {
  return (
    <>
      {/* <View style={styles.rootScreen}> */}
        <AuthContent isLogin />
      {/* </View> */}
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
