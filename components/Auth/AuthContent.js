import { StyleSheet, Text, View } from "react-native";
import AuthForm from "./AuthForm";
import Colors from "../../constants/colors";
import Header from "../UI/Texts/Header";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

function AuthContent() {
  return (
    <>
      <View style={styles.rootScreen}>
        <View style={styles.login}>
          <Header>Skip Login</Header>
        </View>
        <View style={styles.headerText}>
          <Header>Access your account</Header>
        </View>
        <View style={styles.authContent}>
          <AuthForm />
          <View style={styles.emailPass}>
            <Header>Email me my password</Header>
            <PrimaryButton>Login</PrimaryButton>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>
              No account yet? Create one now
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  login: {
    // justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 60,
    marginHorizontal: 16,
  },
  headerText: {
    marginTop: 50,
    marginHorizontal: 16,
  },
  authContent: {
    flex: 1,
    marginTop: 35,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary300,
  },
  emailPass: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomText: {
    color: "white",
    fontSize: 16,
    fontFamily: "gilroy",
  },
});
