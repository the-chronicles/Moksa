import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthContent from "./components/Auth/AuthContent";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        contentStyle: {
          backgroundColor: Colors.primary200
        }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    gilroy: require("./assets/fonts/Gilroy-Regular.ttf"),
    tradeGothic: require("./assets/fonts/TradeGothic LT Regular.ttf"),
  });

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={[Colors.primary300, Colors.primary200]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/_7D_2535.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            <Navigation />
            {/* <AuthContent /> */}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
});
