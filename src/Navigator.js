import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './screens/Login';
import Register from './screens/Register';
import ChatsList from './screens/ChatsList';
import Chat from './screens/Chat';
import ChatSettings from './screens/ChatSettings';
import Friends from './screens/Friends';

const authScreens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Register: {
        screen: Register
    }
};

const authStack = createStackNavigator(authScreens, {
    defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: '#EFEFEF',
        headerTitle: '',
        ...TransitionPresets.SlideFromRightIOS
    },
});

const chatScreens = {
    ChatsList: {
        screen: ChatsList,
        navigationOptions: {
            headerShown: false
        }
    },
    Chat: {
        screen: Chat
    },
    ChatSettings: {
        screen: ChatSettings
    }
};

const chatStack = createStackNavigator(chatScreens);

const tabScreens = {
    ChatsList: chatStack,
    Friends: Friends,
}

const tabStack = createBottomTabNavigator(tabScreens);

const rootNavigator = createSwitchNavigator(
    {
        Auth: authStack,
        App: tabStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(rootNavigator);