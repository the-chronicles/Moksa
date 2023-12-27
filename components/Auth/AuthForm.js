import { View } from "react-native";

import Input from "./Input";

function AuthForm() {
  return (
    <View>
      <View>
        <Input
          label="Email Address"
          keyboardType="email-address"
          placeholder="Email Address"
        />
        <Input label="Password" secure placeholder="******" />
      </View>
    </View>
  );
}

export default AuthForm;
