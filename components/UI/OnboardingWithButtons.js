import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({
  image,
  title,
  subtitle,
  buttonLabel,
  onButtonPress,
}) => {
  return (
    <View style={styles.slide}>
      <Image source={image} style={styles.onboardingImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.bottomButton} onPress={onButtonPress}>
        <Text style={styles.bottomButtonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const OnboardingWithButtons = ({ onDone }) => {
  return (
    <Onboarding
      onDone={onDone}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image source={require("../../assets/images/notifications.png")} />
          ),
          title: "Welcome",
          subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          buttonLabel: "Skip",
          onButtonPress: onDone,
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image source={require("../../assets/images/notifications2.png")} />
          ),
          title: "Page 2",
          subtitle: "Welcome to the second slide of the Onboarding Swiper.",
          buttonLabel: "Next",
          onButtonPress: () => console.log("Page 2 Button Pressed"),
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image source={require("../../assets/images/notifications3.png")} />
          ),
          title: "Page 3",
          subtitle: "Welcome to the third slide of the Onboarding Swiper.",
          buttonLabel: "Get Started",
          onButtonPress: () => console.log("Page 3 Button Pressed"),
        },
        // Add more pages as needed
      ]}
      bottomBarHighlight={false}
      bottomBarHeight={60}
      showSkip={false}
      showDone={false}
      containerStyles={styles.onboardingContainer}
    />
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
  onboardingContainer: {
    paddingBottom: 80, // Adjust as needed
  },
  bottomButton: {
    backgroundColor: "#3498db",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  bottomButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OnboardingWithButtons;
