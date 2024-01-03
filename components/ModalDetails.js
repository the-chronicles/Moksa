import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const ModalDetails = ({ item, closeModal }) => {
  if (!item) return null;

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.subdate}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.primary200,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'gilroy-bold',
    color: 'white',
  },
  date: {
    fontSize: 16,
    fontFamily: 'gilroy-bold',
    color: 'white',
    margin: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'gilroy',
    color: 'white',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginTop: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.primary500,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'gilroy-bold',
  },
});

export default ModalDetails;
