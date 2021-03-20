import React from 'react';
import { Image, View } from 'react-native';

export default function LogoTitle() {
  return (
    <View style={
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
    }>
    <Image
      style={{ height: 50, width: 150 }}
      source={require('../../../assets/logo-left.png')}
    />
    </View>
  );
}