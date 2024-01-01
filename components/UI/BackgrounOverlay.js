import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function BackgrounOverlay({ children }) {
  return (
    <LinearGradient
      colors={[Colors.primary200, Colors.primary200]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/_7D_2535.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

export default BackgrounOverlay;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
    flex: 1,
  },
});
