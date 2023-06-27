import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../store/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import globalData from '../data/globalData';
import colors from '../data/colors';
import stylesGlobal from '../data/stylesGlobal';
import {observer} from 'mobx-react-lite';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.counterCont}>
      <TouchableOpacity onPress={dec}>
        <Text style={styles.counterText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{cnt}</Text>
      <TouchableOpacity onPress={inc}>
        <Text style={styles.counterText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const CartScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => (
        <View style={styles.product} key={prod.name}>
          <TouchableOpacity
            style={styles.remove}
            onPress={() => products.removeProduct(prod.id)}>
            <FontAwesomeIcon icon={'trash'} color={'red'} />
          </TouchableOpacity>
          <Image source={prod.img} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{prod.name}</Text>
            <Text style={styles.price}>
              {prod.price}
              {globalData.currency}
            </Text>
            <Counter />
          </View>
        </View>
      ));
  };

  const renderEmptyCart = () => (
    <View style={styles.emptyCartCont}>
      <Image
        source={require('../images/emptyCart.png')}
        style={styles.emptyCartImage}
      />
      <Text style={styles.emptyTitle}>Корзина пуста</Text>
      <Text style={styles.emptyDesc}>
        Выберите товары для оформления заказа
      </Text>
    </View>
  );

  return (
    <Wrapper navigation={navigation}>
      {products.list.some(el => el.added) ? (
        <>
          <ScrollView style={styles.cont}>{renderProducts()}</ScrollView>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Order')}>
            <Text style={styles.btnText}>Оформить</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {renderEmptyCart()}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Market')}>
            <Text style={styles.btnText}>В магазин</Text>
          </TouchableOpacity>
        </>
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    marginTop: 20,
  },
  product: {
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    backgroundColor: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginVertical: 10,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    position: 'relative',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  remove: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
  },
  info: {
    paddingTop: 20,
    marginLeft: 10,
    paddingRight: 10,
    flexGrow: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
  },
  price: {
    color: colors.red,
    marginLeft: 10,
    marginTop: 10,
  },
  counterCont: {
    backgroundColor: colors.red,
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-around',
    padding: 3,
    borderRadius: 7,
    alignSelf: 'flex-end',
  },
  counterText: {
    color: '#fff',
    fontWeight: '700',
  },
  //1042x404
  emptyCartImage: {
    width: globalData.width,
    height: globalData.width / (1042 / 404),
    marginTop: 50,
  },
  emptyTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  emptyDesc: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 50,
    color: 'grey',
  },
});

export default observer(CartScreen);
