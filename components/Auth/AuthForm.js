import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Header from "../UI/Texts/Header";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

function AuthForm({ onSubmit, credentialsInvalid, isLogin }) {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const {
    // fullname: fullnameIsInvalid,
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
    onSubmit({
      fullname: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View>
      <View>
        {!isLogin && (
          <Input
            label="Full Name"
            keyboardType="default"
            placeholder="Full Name"
            value={enteredFullName}
            onUpdateValue={updateInputValueHandler.bind(this, "fullname")}
          />
        )}
        <Input
          label="Email Address"
          keyboardType="email-address"
          placeholder="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          secure
          placeholder="*********"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
      </View>
      <View style={styles.emailPass}>
        <Header>{isLogin ? "Email me my password" : ""}</Header>
        <PrimaryButton onPress={submitHandler}>
          {isLogin ? "Login" : "Create Account"}
        </PrimaryButton>
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
});
