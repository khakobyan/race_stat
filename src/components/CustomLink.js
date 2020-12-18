import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from '../helpers/sizes';
import { PURPLE } from '../utils/colors';

export function CustomLink({title, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP('70'),
    marginVertical: widthPercentageToDP('2'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PURPLE,
  },
});
