/* import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ColorsConfig from '../../config/colorsConfig';

import Styles from './style';

export default function SMS() {
  return (
    <View>
      <Text>Hello world on SMS</Text>
      <Button title={'Ir para Login'} onPress={() => {}} />
    </View>
  );
} */
/*SMS.navigationOptions = {
  
  headerStyle: {
      backgroundColor: ColorsConfig.root.colorPrimary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
  }
} */


import React, { PureComponent } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelList,
  Thread,
  ChannelPreviewMessenger,
  CloseButton,
} from 'stream-chat-expo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicXVpZXQtd29vZC04In0.Ie-ec4lMwXGtrTXh1UPeKWKhdFMGtqLnkH3YhJoPC9s';

const user = {
  id: 'quiet-wood-8',
  name: 'João Fontes',
  //image: 'https://getstream.io/random_png/?id=quiet-wood-8&amp;name=Quiet+wood',
};

chatClient.setUser(user, userToken);

class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: <Text style={{ fontWeight: 'bold', }}>Channel List</Text>,
  });

  render() {
    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <View style={{ display: 'flex', height: '100%', padding: 10 }}>
            <ChannelList
              Preview={ChannelPreviewMessenger}
              filters={{ type: 'messaging', members: { $in: ['quiet-wood-8'] } }}
              sort={{ last_message_at: -1 }}
              options={{}}
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

class ChannelScreen extends PureComponent {
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
              <MessageList
                onThreadSelect={(thread) => {
                  this.props.navigation.navigate('Thread', {
                    thread,
                    channel: channel.id,
                  });
                }}
              />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

class ThreadScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontWeight: 'bold' }}>Thread</Text>,
    headerLeft: null,
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{marginRight: 20}}
      >
        <CloseButton />
      </TouchableOpacity>
    ),
  });

  render() {
    const { navigation } = this.props;
    const thread = navigation.getParam('thread');
    const channel = chatClient.channel(
      'messaging',
      navigation.getParam('channel'),
    );

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel
            client={chatClient}
            channel={channel}
            thread={thread}
            dummyProp="DUMMY PROP"
          >
            <View
              style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'flex-start',
              }}
            >
              <Thread thread={thread} />
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
    Thread: {
      screen: ThreadScreen,
    },
  },
  {
    initialRouteName: 'ChannelList',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class SMS extends React.Component {
  render() {
    return <AppContainer />;
  }
}