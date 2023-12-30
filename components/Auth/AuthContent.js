import { Alert, StyleSheet, Text, View } from "react-native";
import AuthForm from "./AuthForm";
import Colors from "../../constants/colors";
import Header from "../UI/Texts/Header";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FlatButton from "../UI/Buttons/FlatButton";


function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    fullname: false,
    email: false,
    password: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { fullname, email, password } = credentials;

    fullname = fullname.trim();
    email = email.trim();
    password = password.trim();

    const emailIsInvalid = email.includes("@");
    const passwordIsInvalid = password.length > 6;

    if (!emailIsInvalid || !passwordIsInvalid) {
      Alert.alert("Looks like you have an account");
      setCredentialsInvalid({
        email: !emailIsInvalid,
        password: !passwordIsInvalid,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <>
      <View style={styles.rootScreen}>
        <View style={styles.login}>
          <Header>Skip Login</Header>
        </View>
        <View style={styles.headerText}>
          {isLogin ? (
            <Header>Access your account</Header>
          ) : (
            <Header>Save preferences, get notifications</Header>
          )}
        </View>
        <View style={styles.authContent}>
          <AuthForm
            isLogin={isLogin}
            onsubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <View style={styles.emailPass}>
            {isLogin ? <Header>Email me my password</Header> : ""}
            {isLogin ? (
              <PrimaryButton>Login</PrimaryButton>
            ) : (
              <PrimaryButton>Create Account</PrimaryButton>
            )}
          </View>
          <View style={styles.bottomContainer}>
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin
                ? "No account yet? Create one now"
                : "Already have an account. Log In"}
            </FlatButton>
            {/* <Text style={styles.bottomText}>
              {isLogin
                ? "No account yet? Create one now"
                : "Already have an account. Log In"}
            </Text> */}
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
