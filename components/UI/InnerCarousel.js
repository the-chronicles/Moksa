import { Image, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-snap-carousel";

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
    title: "DELIVERY OPTIONS",
    subdate: "2 Walkable",
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
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handleItemPress(item)}
      style={styles.slide}
    >
      <View style={styles.slide}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.subdate}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={350}
      />
    </View>
  );
}

export default InnerCarousel;
