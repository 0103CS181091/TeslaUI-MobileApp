import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import CarItem from "../CarItem";

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        keyExtractor={(item) => item.name} //newly added
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  );
};

export default CarsList;
