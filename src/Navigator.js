import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from 'react-navigation-stack';

import Login from './screens/Login';
import Register from './screens/Register';

const screens = {
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

const AuthStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: '#EFEFEF',
        headerTitle: '',
        ...TransitionPresets.SlideFromRightIOS
    },
});

export default createAppContainer(AuthStack);