import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import MenuScreen from "./MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./MainScreen";
import IconButton from "../components/UI/Buttons/IconButton";
import DrawerContent from "../components/UI/DrawerContent";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary400 },
        headerTintColor: "white",
        headerShadowVisible: false,
        sceneContainerStyle: { backgroundColor: Colors.primary400 },
        headerTitle: "Moksa",
        headerTitleStyle: {
          fontFamily: "gilroy",
          fontSize: 24,
        },
        headerTitleAlign: "center",
      }}

      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="person-circle-outline"
              color={tintColor}
              size={24}
            />
          ),
          // drawerIcon: ({ focused, color, size, tintColor }) => (
          //   <IconButton
          //     icon="menu-outline" // Change this to the icon you want for the hamburger menu
          //     color={tintColor}
          //     size={50}
          //   />
          // ),
        }}
      />
    </Drawer.Navigator>
  );
}

function WelcomeScreen() {
  return (
    <>
      <Stack.Navigator
        screenOptions={
          {
            // headerStyle: { backgroundColor: Colors.primary200 },
            drawerIcon: ({ focused, color, size, tintColor }) => (
              <IconButton
                icon="grid-outline" // Change this to the icon you want for the hamburger menu
                color={color}
                size={20}
              />
            ),
          }
        }
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            // headerRight: ({ tintColor }) => (
            //   <IconButton
            //     icon="person-circle-outline"
            //     color={tintColor}
            //     size={24}
            //   />
            // ),
          }}
        />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>

      {/* <View style={styles.rootContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text>You authenticated successfully!</Text>
      </View> */}
    </>
  );
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
