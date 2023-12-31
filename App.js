import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useState } from "react";

import AppLoading from "expo-app-loading";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Colors from "./constants/colors";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import Onboarding from "react-native-onboarding-swiper";


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        contentStyle: {
          backgroundColor: Colors.primary200,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
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

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return (
      <LinearGradient
        colors={[Colors.primary300, Colors.primary300]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/_7D_2535.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <Onboarding
            onSkip={() => setShowOnboarding(false)}
            pages={[
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./assets/images/notifications.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "Welcome",
                subtitle: "",
              },
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./assets/images/notifications2.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "Welcome",
                subtitle: ".",
              },
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./assets/images/notifications3.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "Welcome",
                subtitle: ".",
              },
              // Add more pages as needed
            ]}
            onDone={() => setShowOnboarding(false)}
            skipLabel=""
            nextLabel="" // Empty string to hide the next button
            bottomBarHighlight={false}
            bottomBarHeight={60}
          />
        </ImageBackground>
      </LinearGradient>
    );
  }

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
          <SafeAreaView style={styles.safeAreaView}>
            {/* <BackgrounOverlay> */}
              <Navigation />
              {/* <AuthContent /> */}
            {/* </BackgrounOverlay> */}
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
  bottomButton: {
    backgroundColor: Colors.primary100,
    paddingVertical: 16,
    borderRadius: 8,
  },
  bottomButtonText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  // onboardingImage: {
  //   width: 200,
  //   height: 200,
  // },
});
