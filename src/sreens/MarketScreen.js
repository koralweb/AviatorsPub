import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../store/products';
import globalData from '../data/globalData';
import colors from '../data/colors';
import OneProduct from '../components/OneProduct';

const MarketScreen = ({navigation}) => {
  const [showOneProduct, setShowOneProduct] = useState(false);
  const [oneProduct, setOneProduct] = useState(null);

  const productClick = prod => {
    setShowOneProduct(true);
    setOneProduct(prod);
  };

  const closeOneProduct = () => {
    setShowOneProduct(false);
    setOneProduct(null);
  };

  const renderProducts = () => {
    return products.list.map(prod => (
      <TouchableOpacity
        key={prod.name}
        style={styles.product}
        onPress={() => productClick(prod)}>
        <Image source={prod.img} style={styles.image} />
        <Text style={styles.title}>{prod.name}</Text>
        <Text style={styles.price}>
          {prod.price}
          {globalData.currency}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView style={styles.cont}>{renderProducts()}</ScrollView>
      {showOneProduct && (
        <OneProduct prod={oneProduct} close={closeOneProduct} />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 60,
  },
  product: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 60,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    position: 'relative',
    top: -50,
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    top: -30,
    textAlign: 'center',
  },
  price: {
    color: colors.red,
    fontSize: 20,
    top: -20,
  },
});

export default MarketScreen;
