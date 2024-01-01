import { Alert, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import Colors from "../../constants/colors";
import Header from "../UI/Texts/Header";
import FlatButton from "../UI/Buttons/FlatButton";
import NewAlert from "../Alert/NewAlert";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

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

    // Dummy data
    const dummyUsername = "user";
    const dummyPassword = "password";

    if (isLogin) {
      if (email === dummyUsername && password === dummyPassword) {
        navigation.navigate("AuthenticatedStack");
      } else {
        Alert.alert(
          "Incorrect Password",
          "The password entered does not match our records. Please check it and try again.."
        );

        // showAlertHandler();
      }
    } else {
      if (email === dummyUsername) {
        Alert.alert("Username taken", "Please choose a different username.");
      } else {
        Alert.alert(
          "Account Created",
          "We've sent a confirmation email to the address entered. Please activate your account."
        );
        navigation.navigate("Welcome");
      }
    }

    /* Main code for authentication
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
    */
  }

  return (
    <View style={styles.rootScreen}>
      <View style={styles.login}>
        <Header>Skip Login</Header>
      </View>
      <View style={styles.headerText}>
        <Header>
          {isLogin
            ? "Access your account"
            : "Save preferences, get notifications"}
        </Header>
      </View>
      <View style={styles.authContent}>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.bottomContainer}>
          <FlatButton onPress={switchAuthModeHandler}>
            {isLogin
              ? "No account yet? Create one now"
              : "Already have an account. Log In"}
          </FlatButton>
        </View>
      </View>
      {showAlert && <NewAlert onClose={closeAlertHandler} /> }
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  login: {
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
