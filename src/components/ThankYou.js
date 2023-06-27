import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import globalData from '../data/globalData';
import colors from '../data/colors';
import products from '../store/products';

const ThankYou = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      products.removeAllProducts();
      navigation.push('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.cont}>
      <Image
        source={require('../images/menu_top.png')}
        style={styles.topImage}
      />
      <Text style={{...styles.text, fontSize: 22, fontWeight: '700'}}>
        Благодарим за ваш заказ!!!
      </Text>
      <Text style={styles.text}>
        Наши менеджеры свяжутся с вами в ближайшее время
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: globalData.width,
    height: globalData.height,
    backgroundColor: colors.red,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#fff', padding: 10, fontSize: 18, textAlign: 'center'},
  topImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2.69047,
    marginTop: 10,
  },
});

export default ThankYou;
