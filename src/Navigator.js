import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import {darkColors} from './styles/colorThemes';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Login from './screens/Login';
import Register from './screens/Register';
import ChatsList from './screens/ChatsList';
import Chat from './screens/Chat';
import ChatSettings from './screens/ChatSettings';
import FriendsList from './screens/FriendsList';
import Profile from './screens/Profile';
import ChangePass from './screens/ChangePass';
import SearchFriends from './screens/SearchFriends';

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

const tabScreens = {
    ChatsList: {
        screen: ChatsList,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name="chatbubbles" size={24} color={tintColor} />,
        }
    },
    FriendsList: {
        screen: FriendsList,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <FontAwesome5 name='users' size={24} color={tintColor} />,
        }
    },
}

const tabStack = createMaterialTopTabNavigator(tabScreens, {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: darkColors.primary,
        inactiveTintColor: darkColors.inactive,
        showLabel: false,
        showIcon: true,
        tabStyle: {
            borderTopColor: darkColors.secondary,
            backgroundColor: darkColors.background_secondary
        },
        iconStyle: {
            width: 40
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

const chatScreens = {
    Main: {
        screen: tabStack,
        navigationOptions: {
            headerShown: false
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerShown: false
        }
    },
    ChatSettings: {
        screen: ChatSettings
    },
    Profile: {
        screen: Profile
    },
    ChangePass: {
        screen: ChangePass
    },
    SearchFriends: {
        screen: SearchFriends,
        navigationOptions: {
            headerShown: false
        }
    }
};

const chatStack = createStackNavigator(chatScreens, defaultStackOptions);

const rootNavigator = createSwitchNavigator(
    {
        Auth: authStack,
        App: chatStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(rootNavigator);