import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import MenuScreen from "./MenuScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary200 },
      }}
    >
      <Drawer.Screen name="Menu" component={MenuScreen} />
    </Drawer.Navigator>
  );
}

function WelcomeScreen() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={DrawerNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
