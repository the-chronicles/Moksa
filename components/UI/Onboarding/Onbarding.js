import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../constants/colors";
import { ImageBackground, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useState } from "react";

function Onbarding() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  
  const renderNextButton = () => {
    return {
      
    }
  }
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
          ]}
          onDone={() => setShowOnboarding(false)}
          skipLabel=""
          nextLabel="" 
          bottomBarHighlight={false}
          bottomBarHeight={60}
        />
      </ImageBackground>
    </LinearGradient>
  );
}

export default Onbarding;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
    flex: 1,
  },
});
