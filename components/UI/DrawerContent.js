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

function DrawerContent() {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View>
          <Text> Main</Text>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          label="Log Out"
          onPress={() => {}}
          icon={() => {
            <PrimaryButton>Log Out</PrimaryButton>;
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
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: Colors.primary200,
    borderTopWidth: 1,
  },
});
