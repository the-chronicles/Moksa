// import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

const OnboardingScreen = ({ image, title, subtitle }) => {
  return (
    <View style={styles.slide}>
      <Image source={image} style={styles.onboardingImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const CustomOnboarding = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.replace("Login");
  };

  return (
    <Swiper loop={true} showsPagination={true} showsButtons={false}>
      <OnboardingScreen
        image={require("../../assets/images/notifications.png")}
        title={<Text>Welcome</Text>}
        subtitle={"Welcome to the first slide of the Onboarding Swiper."}
      />
      <OnboardingScreen
        image={require("../../assets/images/notifications2.png")}
        title={<Text>Welcome</Text>}
        subtitle="Welcome to the second slide of the Onboarding Swiper."
      />
      <OnboardingScreen
        image={require("../../assets/images/notifications3.png")}
        title={<Text>Welcome</Text>}
        subtitle="Welcome to the third slide of the Onboarding Swiper."
        bottomButton
      />
      <View style={styles.lastSlide}>
        <Text style={styles.lastSlideText}>Start Exploring!</Text>
        <Text style={styles.lastSlideText}>Tap to get started</Text>
        <Text
          style={[styles.lastSlideText, { color: Colors.primary300 }]}
          onPress={handleDone}
        >
          Skip to Login
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingImage: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  lastSlide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lastSlideText: {
    fontSize: 18,
    marginBottom: 20,
    color: Colors.primary300,
  },
});

export default CustomOnboarding;
