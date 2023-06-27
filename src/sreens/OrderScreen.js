import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import stylesGlobal from '../data/stylesGlobal';
import ThankYou from '../components/ThankYou';

const OrderScreen = ({navigation}) => {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Номер телефона</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Имя</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Фамилия</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowThankYou(true)}>
        <Text style={styles.btnText}>Оформить</Text>
      </TouchableOpacity>
      {showThankYou && <ThankYou navigation={navigation} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text: {
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 40,
  },
});

export default OrderScreen;
