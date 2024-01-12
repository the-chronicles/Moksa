import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import * as SplashScreen from "expo-splash-screen";
// import AppLoading from "expo-app-loading";

// import "expo-system-ui";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
// import * as Font from "expo-font";

import Onboarding from "react-native-onboarding-swiper";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "./constants/colors";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

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
      <Stack.Screen
        name="AuthenticatedStack"
        component={AuthenticatedStack}
        options={{
          headerShown: false,
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
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>

    // <Drawer.Navigator
    //   screenOptions={{
    //     headerStyle: { backgroundColor: Colors.primary200 },
    //   }}
    // >
    //   <Drawer.Screen name="Menu" component={MenuScreen} />
    //   <Drawer.Screen name="Main" component={MainStack} />
    // </Drawer.Navigator>
  );
}

function MainStack() {
  return;
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: "white",
      contentStyle: { backgroundColor: Colors.primary100 },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>;
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

const Next = ({ ...props }) => (
  <View style={styles.nextContainer}>
    <TouchableOpacity style={styles.nextButton} {...props}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  </View>

  // <PrimaryButton style={styles.nextContainer}>NExt</PrimaryButton>
);

const CustomDoneButton = ({ ...props }) => (
  <View style={styles.doneContainer}>
    <TouchableOpacity style={styles.doneButton} {...props}>
      <Text style={styles.doneButtonText}>Log In</Text>
    </TouchableOpacity>
  </View>
);

const Dots = ({ selected }) => (
  <View
    style={[
      styles.dot,
      {
        backgroundColor: selected ? Colors.primary100 : Colors.primary200,
      },
    ]}
  />
);

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "gilroy": require("./assets/fonts/Gilroy-Regular.ttf"),
  //   "gilroy-bold": require("./assets/fonts/Gilroy-Bold.ttf"),
  //   "tradeGothic": require("./assets/fonts/TradeGothic LT Regular.ttf"),
  // });

  // // if (!fontsLoaded) {
  // //   return <AppLoading />;
  // // }

  // // if (!fontsLoaded) {
  // //   SplashScreen.preventAutoHideAsync(); // Prevent auto-hide splash screen
  // //   return null; // or any loading indicator
  // // }
  // // SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded

  // const [showOnboarding, setShowOnboarding] = useState(true);

  // useEffect(() => {
  //   const loadFontsAndHideSplash = async () => {
  //     if (!fontsLoaded) {
  //       try {
  //         await SplashScreen.preventAutoHideAsync();
  //         // Load your fonts here if not loaded yet
  //         await loadFonts(); // You need to implement the loadFonts function
  //       } catch (e) {
  //         console.error(e);
  //       } finally {
  //         SplashScreen.hideAsync();
  //       }
  //     }
  //   };

  //   loadFontsAndHideSplash();
  // }, [fontsLoaded]);

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // const loadFonts = async () => {
  //   try {
  //     await Font.loadAsync({
  //       gilroy: require("./assets/fonts/Gilroy-Regular.ttf"),
  //       "gilroy-bold": require("./assets/fonts/Gilroy-Bold.ttf"),
  //       tradeGothic: require("./assets/fonts/TradeGothic LT Regular.ttf"),
  //     });

  //     setFontsLoaded(true);
  //   } catch (error) {
  //     console.error("Error loading fonts:", error);
  //   }
  // };

  // const [showOnboarding, setShowOnboarding] = useState(true);


  // const loadFontsAndHideSplash = async () => {
  //   if (!fontsLoaded) {
  //     try {
  //       // Use SplashScreen.preventAutoHideAsync() instead of SplashScreen.preventAutoHideAsync()
  //       await SplashScreen.preventAutoHideAsync();
  //       // Load your fonts here if not loaded yet
  //       await loadFonts(); // You need to implement the loadFonts function
  //     } catch (error) {
  //       console.error("Error during font loading:", error);
  //     } finally {
  //       // Use SplashScreen.hideAsync() instead of SplashScreen.hideAsync()
  //       await SplashScreen.hideAsync();
  //     }
  //   }
  // };
  
  // useEffect(() => {
  //   loadFontsAndHideSplash();
  // }, [fontsLoaded]);

  const [fontsLoaded] = useFonts({
    gilroy: require("./assets/fonts/Gilroy-Regular.ttf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    tradeGothic: require("./assets/fonts/TradeGothic LT Regular.ttf"),
  });

  const [showOnboarding, setShowOnboarding] = useState(true);

  const loadFontsAndHideSplash = async () => {
    if (!fontsLoaded) {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.error("Error during font loading:", error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
  };

  useEffect(() => {
    loadFontsAndHideSplash();
  }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

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
          <Text>Skip</Text>
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
                title: "CUSTOMIZED PUSH NOTIFICATIONS FOR EVERY ACCOUNT",
                subtitle: "Know when beers are released",

                // <View style={styles.onboardingPage}>
                //   <View style={styles.textContainer}>
                //     <Text style={styles.onboardingTitle}>
                //       CUSTOMIZED PUSH NOTIFICATIONS FOR EVERY ACCOUNT
                //     </Text>
                //     <Text style={styles.onboardingSubtitle}>
                //       Know when beers are released
                //     </Text>
                //   </View>
                //   <Image
                //     source={require("./assets/images/notifications.png")}
                //     style={styles.onboardingImage}
                //   />
                // </View>
              },
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./assets/images/notifications2.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "TAKE PHOTOS AND ADD EXCLUSIVE PHOTO FRAMES",
                subtitle: "Add some personality to your shots",
              },
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./assets/images/notifications3.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "CHECK-IN ON SOCIAL MEDIA. YUP, INCLUDING UNTAPPD",
                subtitle: "Tell your people when you're at Moksa",
              },
              // Add more pages as needed
            ]}
            onDone={() => setShowOnboarding(false)}
            skipLabel=""
            // nextLabel="" // Empty string to hide the next button
            bottomBarHighlight={false}
            bottomBarHeight={60}
            NextButtonComponent={Next}
            DotComponent={Dots}
            DoneButtonComponent={CustomDoneButton}
          />
        </ImageBackground>
      </LinearGradient>
    );
  }

  return (
    <>
      <StatusBar style="light" />
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
  nextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: Colors.accent100,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 180,
    // marginRight: 175,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "gilroy",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 200,
  },
  doneContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16, // Adjust the margin as needed
  },
  doneButton: {
    backgroundColor: Colors.accent100,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  doneButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "gilroy",
  },

  onboardingPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  onboardingImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  textContainer: {
    position: "absolute",
    top: 20, // Adjust the top position as needed
    alignItems: "center",
  },
  onboardingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  onboardingSubtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
