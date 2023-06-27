import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import stylesGlobal from '../data/stylesGlobal';
import Header from './Header';
import Menu from './Menu';
import {useRoute} from '@react-navigation/native';

const Wrapper = ({navigation, options, children}) => {
  const screenName = useState(useRoute().name)[0];
  const [showMenu, setShowMenu] = useState(false);

  useState(() => {
    if (screenName === 'Home') {
      setShowMenu(true);
    }
  }, []);

  return (
    <View style={styles.globalContainer}>
      <Header setShowMenu={setShowMenu} navigation={navigation} />
      {children}
      {showMenu && <Menu setShowMenu={setShowMenu} navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
});

export default Wrapper;
