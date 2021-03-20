/* import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import Styles from './style';

export default function WhatsApp() {
  return (
    <View>
      <Text>Hello world on WhatsApp</Text>
      <Button title={'Ir para Login'} onPress={() => {}} />
    </View>
  );
} */



import React, { PureComponent } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelPreviewMessenger,
  ChannelList,
} from 'stream-chat-expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicXVpZXQtd29vZC04In0.Ie-ec4lMwXGtrTXh1UPeKWKhdFMGtqLnkH3YhJoPC9s';

const user = {
  id: 'quiet-wood-8',
  name: 'Joao Fontes',
  image:
    'https://getstream.io/random_png/?id=quiet-wood-8&amp;name=Quiet+wood',
};

chatClient.setUser(user, userToken);

class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: (
      <Text style={{ fontWeight: 'bold' }}>Awesome Conversations</Text>
    ),
  });

  render() {
    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <View style={{ display: 'flex', height: '100%', padding: 10 }}>
            <ChannelList
              filters={{ type: 'messaging', members: { $in: ['quiet-wood-8'] } }}
              sort={{ last_message_at: -1 }}
              Preview={ChannelPreviewMessenger}
              onSelect={(channel) => {
                this.props.navigation.navigate('Channel', {
                  channel,
                });
              }}
            />
          </View>
        </Chat>
      </SafeAreaView>
    );
  }
}

class ChannelScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const channel = navigation.getParam('channel');
    return {
      headerTitle: (
        <Text style={{ fontWeight: 'bold' }}>{channel.data.name}</Text>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const channel = navigation.getParam('channel');

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel client={chatClient} channel={channel}>
            <View style={{ display: 'flex', height: '100%' }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    ChannelList: {
      screen: ChannelListScreen,
    },
    Channel: {
      screen: ChannelScreen,
    },
  },
  {
    initialRouteName: 'ChannelList',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class WhatsApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}