import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import broadcastsList from '../data/broadcastsList';
import colors from '../data/colors';

const BroadcastsScreen = ({navigation}) => {
  const renderItems = () => {
    return broadcastsList
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <View style={styles.item} key={Math.random()}>
          <Text style={styles.liga}>{item.liga}</Text>
          <Text style={{marginBottom: 10, fontWeight: '700'}}>
            {item.date}.06.2023 - {item.time}
          </Text>
          <View style={styles.team}>
            <Text style={styles.teamText}>{item.team1}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.team}>
            <Text style={styles.teamText}>{item.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView style={styles.cont}>{renderItems()}</ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 40,
    minHeight: 200,
    backgroundColor: '#ededed',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 10,
  },
  team: {
    backgroundColor: '#fff',
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: 'grey',
  },
  teamText: {
    fontSize: 20,
  },
  liga: {
    color: colors.red,
    fontSize: 18,
  },
});

export default BroadcastsScreen;
