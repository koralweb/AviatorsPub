import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import stylesGlobal from '../data/stylesGlobal';

const ContactsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={{...styles.text, color: '#000', marginBottom: 20}}>
          AVIATOR PUB
        </Text>
        <Text style={styles.text}>aviator_pub@mail.ru</Text>
        <View style={styles.line} />
        <Text style={styles.text}>+7 (961) 4-030-030</Text>
        <View style={styles.line} />
        <Text style={styles.text}>
          Ростовская обл., г. Аксай, ул. Мира, д. 1А, помещение Н3
        </Text>
        <View style={styles.line} />
        <Text style={styles.text}>346720</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('Market')}>
        <Text style={styles.btnText}>В магазин</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    backgroundColor: '#fff',
    width: '80%',
    minHeight: 200,
    borderRadius: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    padding: 20,
  },
  text: {
    color: 'grey',
    fontSize: 20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 10,
  },
});

export default ContactsScreen;
