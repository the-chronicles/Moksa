import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Colors from "../../constants/colors";
import ModalDetail from "./ModalDetail";
import { useState } from "react";

const data = [
  {
    title: "18 BEERS AVAILABLE",
    subdate: "New Beer November 2nd, 2019",
    subtitle: "Crowlers, Cans & Bottles availble",
    image: require("../../assets/images/card1.png"),
    subtext: "",
  },
  {
    title: "FOOD TRUCK",
    subdate: "Namaste Foods",
    subtitle: "4:00PM - 8:30PM 10/25/2019",
    image: require("../../assets/images/truck.png"),
    subtext: "Authentic Indian Food",
  },
  {
    title: "At Moksa Brewing Co.",
    subdate:
      "Come have a blast at our after-halloween costume party. Make sure to invite a friend! (There will be beer)",
    subtitle: "10 great delivery options",
    image: require("../../assets/images/delivery.png"),
    subtext: "Build-your-own Sandwiches",
  },
  {
    title: "TAPROOM EVENTS",
    subdate: "Costume Party!",
    subtitle: "November 1st, bring a friend!",
    image: require("../../assets/images/costume.png"),
    subtext: "Live DJ & your favorite beer",
  },
  {
    title: "OUTSIDE EVENTS",
    subdate: "Great American Beer Festival",
    subtitle: "Here's where Moksa will be",
    image: require("../../assets/images/moksaschedule.png"),
    subtext: "Thursday Oct 3, 2PM",
  },
];

function InnerCarousel() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };


  const renderItem = ({ item, index }) => (
    // <ScrollView>
    <TouchableOpacity
      onPress={() => handleItemPress(item)}
      style={styles.slide}
    >
      <View style={styles.slide}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.date}>{item.subdate}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
    // </ScrollView>
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={245}
      />
      <ModalDetail
        visible={modalVisible}
        onRequestClose={closeModal}
        item={selectedItem}
      />
    </View>
  );
}

export default InnerCarousel;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.primary200,
    // borderRadius: 40,
    // elevation: 3,
  },
  image: {
    width: 250,
    height: 270,
    // borderRadius: 30,
    // margin: 40,
    // marginVertical: 10,
    // top: 10,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "gilroy-bold",
    color: "white",
    //   marginTop: 10,
  },
  date: {
    fontSize: 16,
    fontFamily: "gilroy-bold",
    color: "white",
    margin: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "gilroy",
    color: "white",
  },
});
