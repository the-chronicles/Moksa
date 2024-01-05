import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Colors from "../../constants/colors";
import PrimaryButton from "./Buttons/PrimaryButton";
import IconButton from "./Buttons/IconButton";

function DrawerContent() {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <Text>Notifications</Text>
            </View>
            <View>
              <Text>Coming Soon</Text>
              <Text>New Releases</Text>
              <Text>Events</Text>
              <Text>Food Trucks</Text>
              <Text>Member Notifications</Text>
              <Text>Advocator Notifications</Text>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          label="Log Out"
          onPress={() => {}}
          icon={({ color, size }) => {
            <IconButton icon="log-out-outline" color={color} size={size} />;
          }}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary400,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: Colors.primary200,
    borderTopWidth: 1,
  },
});
