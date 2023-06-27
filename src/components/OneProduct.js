import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalData from '../data/globalData';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';
import stylesGlobal from '../data/stylesGlobal';
import products from '../store/products';

const OneProduct = ({prod, close}) => {
  const [added, setAdded] = useState(prod.added);

  const addProduct = () => {
    setAdded(true);
    products.addProduct(prod.id, 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={close} style={styles.backBtn}>
        <FontAwesomeIcon icon={'angle-left'} size={20} />
      </TouchableOpacity>
      <View style={styles.imageBlock}>
        <Image source={prod.img} style={styles.image} />
      </View>
      <Text style={styles.title}>{prod.name}</Text>
      <Text style={styles.price}>
        {prod.price}
        {globalData.currency}
      </Text>
      <Text style={styles.desc}>{prod.desc}</Text>
      {added ? (
        <FontAwesomeIcon
          icon={'check-circle'}
          size={50}
          style={styles.addedIcon}
        />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={addProduct}>
          <Text style={styles.btnText}>Добавить</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: globalData.width,
    height: globalData.height,
    backgroundColor: '#fff',
    paddingTop: 36,
  },
  backBtn: {
    marginLeft: 20,
    marginTop: 10,
  },
  imageBlock: {
    width: 300,
    height: 300,
    borderRadius: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  image: {
    borderRadius: 150,
    width: 300,
    height: 300,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 25,
  },
  price: {
    color: colors.red,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 10,
  },
  desc: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginTop: 10,
  },
  addedIcon: {
    marginTop: 'auto',
    marginBottom: 20,
    color: 'green',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default OneProduct;
