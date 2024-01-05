import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../../constants/colors";
// import MyCarousel from "./Carousel";
import InnerCarousel from "./InnerCarousel";

function ModalDetail({ visible, onRequestClose, item }) {
  const [innerModalVisible, setInnerModalVisible] = useState(false);

  const openInnerModal = () => {
    setInnerModalVisible(true);
  };

  const closeInnerModal = () => {
    setInnerModalVisible(false);
  };

  if (!item) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.detailContainer}>
          <TouchableOpacity onPress={openInnerModal}>
            <Text style={styles.date}>{item.subdate}</Text>
            <Text style={styles.subtext}>{item.subtext}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity onPress={openInnerModal}>
            <Text style={styles.date}>{item.subdate}</Text>
            <Text style={styles.subtext}>{item.subtext}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity onPress={openInnerModal}>
            <Text style={styles.date}>{item.subdate}</Text>
            <Text style={styles.subtext}>{item.subtext}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>

          <View style={styles.line} />
          <Modal
            visible={innerModalVisible}
            animationType="slide"
            onRequestClose={closeInnerModal}
          >
            <View style={styles.modalContainer}>
              <ScrollView>
                <View style={styles.detailContainer}>
                  {/* <Image source={item.image} style={styles.image} /> */}
                  <InnerCarousel /> 
                  {/* <Text style={styles.newText}>
                    Come have a blast at our after-halloween costume party. Make
                    sure to invite a friend! (There will be beer)
                  </Text> */}



                  <View style={styles.line} />
                </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
      </View>
    </Modal>
  );
}

export default ModalDetail;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.primary400,
  },
  detailContainer: {
    marginHorizontal: 20,
    // padding: 10,
    marginVertical: 20,
  },
  date: {
    fontSize: 20,
    fontFamily: "gilroy-bold",
    color: "white",
    // margin: 10,
  },
  subtext: {
    fontSize: 16,
    fontFamily: "gilroy",
    color: "white",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "gilroy",
    color: "white",
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  newText: {
    color: "white",
  },
});
