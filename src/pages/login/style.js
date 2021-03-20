import { StyleSheet, Dimensions } from 'react-native';
import ColorsConfig from '../../config/colorsConfig';

const Styles = StyleSheet.create({

/* ============ Login Page =================== */

  loginBackground:{ 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorsConfig.root.colorBackgroundThird
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  loginContainer:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  paddingBottom: 50,
  },
  loginInput:{
    backgroundColor: ColorsConfig.root.colorInputBackground,
    width: '90%',
    marginBottom: 15,
    color: ColorsConfig.root.colorTextDark,
    fontSize: 17,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: ColorsConfig.root.colorBoxFooter,
    padding:10,
  },
  btnsContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  loginBtn:{
    backgroundColor: ColorsConfig.root.colorPrimary,
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  sairBtn:{
    backgroundColor: ColorsConfig.root.colorSecondary,
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  loginBtnText:{
    color: ColorsConfig.root.colorButtonText,
    fontSize: 18
  },







});

export default Styles;