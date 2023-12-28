import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Input from "./Input";

function AuthForm({ onsubmit, credentialsInvalid, isLogin }) {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const {
    fullname: fullnameIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "fullname":
        setEnteredFullName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onsubmit({
      fullname: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View>
      <View>
        {!isLogin && <Input
          label="Full Name"
          keyboardType="default"
          placeholder="Full Name"
          value={enteredFullName}
        />}
        <Input
          label="Email Address"
          keyboardType="email-address"
          placeholder="Email Address"
          onUpdateValue={updateInputValueHandler}
          value={enteredEmail}
        />
        <Input
          label="Password"
          secure
          placeholder="*********"
          onUpdateValue={updateInputValueHandler}
          value={enteredPassword}
        />
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  emailPass: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  bottomContainer: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomText: {
    color: "white",
    fontSize: 16,
    fontFamily: "gilroy",
  },
});
