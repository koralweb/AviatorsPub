import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import screensList from '../sreens/screensList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Header = ({setShowMenu, navigation}) => {
  const screenName = useState(useRoute().name)[0];
  const [screenTitle, setScreenTitle] = useState('');

  useEffect(() => {
    const screen = screensList.find(scr => scr.name === screenName);
    if (screenName === 'Order') {
      return;
    }
    setScreenTitle(screen.title);
  }, []);

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={'bars'} size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>{screenTitle}</Text>
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-cart'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default Header;
