import { StyleSheet } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

function LoginScreen() {
  return <AuthContent isLogin />;
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
