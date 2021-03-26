import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {darkColors} from './styles/colorThemes';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Login from './screens/Login';
import Register from './screens/Register';
import ChatsList from './screens/ChatsList';
import Chat from './screens/Chat';
import ChatSettings from './screens/ChatSettings';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import ChangePass from './screens/ChangePass';

const defaultStackOptions = {
    defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: darkColors.primary_text,
        headerTitle: '',
        ...TransitionPresets.SlideFromRightIOS
    },
}

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

const authStack = createStackNavigator(authScreens, defaultStackOptions);

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
    },
    Profile: {
        screen: Profile
    },
    ChangePass: {
        screen: ChangePass
    }
};

const chatStack = createStackNavigator(chatScreens, defaultStackOptions);

const tabScreens = {
    ChatsList: {
        screen: chatStack,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name="chatbubbles" size={24} color={tintColor} />,
        }
    },
    Friends: {
        screen: Friends,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <FontAwesome5 name='users' size={25} color={tintColor} />,
        }
    },
}

const tabStack = createBottomTabNavigator(tabScreens, {
    tabBarOptions: {
        activeTintColor: darkColors.primary,
        inactiveTintColor: darkColors.secondary_text,
        showLabel: false,
        inactiveBackgroundColor: darkColors.background_secondary,
        activeBackgroundColor: darkColors.background_secondary,
        style: {
            borderTopColor: darkColors.secondary
        }
    },
    defaultNavigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
      
        return {
          tabBarVisible,
        };
      }
});

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