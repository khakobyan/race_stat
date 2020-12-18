import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { DARK_GREY } from '../utils/colors';

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={DARK_GREY} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});