import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import Styles from './style';
import ColorsConfig from '../../config/colorsConfig';

export default function Facebook() {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: ColorsConfig.root.colorPrimary}}>
        Hello world na tela <Text style={{color: 'blue'}}>Facebook</Text>.
      </Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: ColorsConfig.root.colorSecondary}}>
        Tela em construção.
      </Text>
    </View>
  );
}