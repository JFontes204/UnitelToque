import React, { useState, useEffect } from 'react';
import { View,
          KeyboardAvoidingView, 
          Image,
          TextInput, 
          TouchableOpacity, 
          Text,
          Animated,
          Keyboard
        } from 'react-native';
import Styles from './style';
import ColorsConfig from '../../config/colorsConfig';

/* Login.navigationOptions = {
    title: '',
    headerStyle: {
        backgroundColor: ColorsConfig.root.colorPrimary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
    }
} */

export default function Login(props) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 300, y: 300}));
  const [logo2] = useState(new Animated.ValueXY({x: 150, y: 150}));

  const [logoX, setLogoX] = useState(300);
  const [logoY, setLogoY] = useState(300);
  
  function keyboardDidShow(){
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: 150,
            duration: 100,
            useNativeDriver: true
        }),
        Animated.timing(logo.y, {
            toValue: 150,
            duration: 100,
            useNativeDriver: true
        })
    ]).start();
    setLogoX(logo2.x._value);
    setLogoY(logo2.y._value);
  }
  function keyboardDidHide(){
      Animated.parallel([
          Animated.timing(logo.x, {
              toValue: 300,
              duration: 100,
              useNativeDriver: true
          }),
          Animated.timing(logo.y, {
              toValue: 300,
              duration: 100,
              useNativeDriver: true
          })
      ]).start();
      setLogoX(logo.x._value);
      setLogoY(logo.y._value);
  }

  useEffect(() => {
    Login.KeyboardDidShowListener =  Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Login.KeyboardDidHideListener =  Keyboard.addListener('keyboardDidHide', keyboardDidHide);

      Animated.parallel([
          Animated.spring(offset.y, {
              toValue: 0,
              speed: 4,
              bounciness: 20,
              useNativeDriver: true
          }),
          Animated.timing(opacity, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true
          })
      ]).start();

  }, []);

  return(
      <KeyboardAvoidingView style={Styles.loginBackground}>
          <View style={Styles.containerLogo}>
              <Image style={{ width: logoX, height: logoY }} source={require('../../../assets/logo.png')} />
          </View>
          <Animated.View 
              style={[
                  Styles.loginContainer,
                  { opacity: opacity, transform: [ {translateY: offset.y} ] }
              ]}
          >
              <TextInput style={Styles.loginInput} 
                  placeholder='Nº telefone' autoCorrect={false} value={username}
                  onChangeText={ (username) => setUsername(username)}
              />

              <TextInput style={Styles.loginInput} 
                  placeholder='Código secreto' autoCorrect={false}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={ (password) => setPassword(password)}
              />

                <View style={Styles.btnsContainer}>
                    <TouchableOpacity style={Styles.loginBtn} 
                        onPress={() => {props.navigation.navigate('HomePage');} } >
                        <Text style={Styles.loginBtnText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.sairBtn}>
                        <Text style={Styles.loginBtnText}>Sair</Text>
                    </TouchableOpacity>
                </View>
          </Animated.View>
      </KeyboardAvoidingView>
  );
}