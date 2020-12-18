import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP } from '../helpers/sizes';
import { DARK_GREY } from '../utils/colors';

export function Info({label, info, ...rest}) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.label}>{`${label}:`}</Text>
      <Text style={styles.info} >{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP('70'),
    marginVertical: widthPercentageToDP('2'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: DARK_GREY,
  },
  info: {
    fontSize: 20,
    color: DARK_GREY,
  }
});
