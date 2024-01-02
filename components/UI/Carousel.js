import { Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Colors from "../../constants/colors";

const MyCarousel = () => {
  const data = [
    {
      title: "18 BEERS AVAILABLE",
      subdate: "New Beer November 2nd, 2019",
      subtitle: "Crowlers, Cans & Bottles availble",
      image: require("../../assets/images/card1.png"),
    },
    {
      title: "FOOD TRUCK",
      subdate: "Namaste Foods",
      subtitle: "4:00PM - 8:30PM 10/25/2019",
      image: require("../../assets/images/truck.png"),
    },
    {
      title: "DELIVERY OPTIONS",
      subdate: "2 Walkable",
      subtitle: "10 great delivery options",
      image: require("../../assets/images/delivery.png"),
    },
    {
      title: "TAPROOM EVENTS",
      subdate: "Costume Party!",
      subtitle: "November 1st, bring a friend!",
      image: require("../../assets/images/costume.png"),
    },
    {
      title: "OUTSIDE EVENTS",
      subdate: "Great American Beer Festival",
      subtitle: "Here's where Moksa will be",
      image: require("../../assets/images/moksaschedule.png"),
    },
    
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.subdate}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={350}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary200,
    borderRadius: 40,
    elevation: 3,
  },
  image: {
    width: 315,
    height: 540,
    borderRadius: 30,
    // margin: 40,
    // marginVertical: 10,
    top: 10,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "gilroy",
    fontWeight: "bold",
    color: "white",
    //   marginTop: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "gilroy",
    color: "white",
    margin: 10
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "gilroy",
    color: "white",
  },
});

export default MyCarousel;