import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import screensList from '../sreens/screensList';
import {useRoute} from '@react-navigation/native';

const Menu = ({setShowMenu, navigation}) => {
  const screenName = useState(useRoute().name)[0];
  const renderMenuItems = () => {
    return screensList
      .filter(el => el.name !== 'Home')
      .map(screen => (
        <TouchableOpacity
          style={styles.item}
          key={screen.name}
          onPress={() => navigation.push(screen.name)}>
          <FontAwesomeIcon
            icon={screen.icon}
            style={styles.itemIcon}
            size={25}
          />
          <Text style={styles.itemText}>{screen.title}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.cont}>
      {screenName !== 'Home' && (
        <TouchableOpacity
          onPress={() => setShowMenu(false)}
          style={styles.backBtn}>
          <FontAwesomeIcon icon={'angle-left'} color={'#fff'} />
        </TouchableOpacity>
      )}
      <Image
        source={require('../images/menu_top.png')}
        style={styles.topImage}
      />
      <View style={styles.items}>{renderMenuItems()}</View>
      <Image
        source={require('../images/aviator.png')}
        style={styles.aviatorImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 36,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: colors.red,
  },
  backBtn: {
    marginLeft: 20,
  },
  // 1130x420 = 2.69047
  topImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2.69047,
    marginTop: 10,
  },
  items: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: 15,
    marginBottom: 15,
  },
  itemIcon: {
    color: '#fff',
    marginRight: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  aviatorImg: {
    width: 990 / 3,
    height: 170 / 3,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
});

export default Menu;
