import { StyleSheet, Text, View } from "react-native";
// import MyCarousel from "../components/UI/Carousel";
import Colors from "../constants/colors";
import MyCarousel from "../components/UI/Carousel";

function MenuScreen() {
  return (
    <View style={styles.rootContainer}>
      <MyCarousel />
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    // backgroundColor: Colors.primary400,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
