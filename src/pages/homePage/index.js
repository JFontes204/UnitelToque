import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import ColorsConfig from '../../config/colorsConfig';
import LogoTitle from './LogoTitle';
import SMS from '../sms';
import Facebook from '../facebook';
import WhatsApp from '../whatsapp';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Entypo;
  let iconName;
  if (routeName === 'SMS') {
    iconName = focused? 'message' : 'new-message';
    return <IconComponent name={iconName} size={30} color={tintColor} />;
  }
  else if (routeName === 'WhatsApp') {
    iconName = focused ? 'whatsapp-square' : 'whatsapp';
  }
  else if (routeName === 'Facebook') {
    iconName = focused ? 'facebook-square' : 'facebook-f';
  }
  return <FontAwesome5 name={iconName} size={30} color={tintColor} />;
};

const HomePage = createAppContainer(createBottomTabNavigator({
    SMS,
    WhatsApp,
    Facebook,
  },
  {
    initialRouteName: 'SMS',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => 
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: ColorsConfig.root.colorPrimary,
      inactiveTintColor: ColorsConfig.root.colorTextDark,
      style: {
        height: 55,
        backgroundColor: ColorsConfig.root.colorBackgroundThird
      },
      labelStyle: {
        fontSize: 13,
        fontWeight: '700',
        color: ColorsConfig.root.colorTextDark
      },
    },
  }
));
export default  HomePage;
 
HomePage.navigationOptions = {
  headerTitle: () => <LogoTitle />,
}