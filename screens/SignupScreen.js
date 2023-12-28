import AuthContent from "../components/Auth/AuthContent";

function SignupScreen() {
  function signupHandler() {}

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
