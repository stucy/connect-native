import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';

import Message from '../components/Message';

import { useTheme } from '../contexts/ThemeContext';

import { Ionicons } from '@expo/vector-icons';

const ChatsList = ({navigation}) => {
    const [messages, setMessages] = useState([
        {id: '2', image: '../assets/default.png', name: 'Ники П.', message: 'Здр кп... кога ще играем майнкрафт', time: '11:47'},
        {id: '1', image: '../assets/default.png', name: 'Стоян Г.', message: 'Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайнаЗдр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна', time: '12:23'},
        {id: '10', image: '../assets/default.png', name: 'Ники П.', message: 'Здр кп... кога ще играем майнкрафт', time: '11:47'},
        {id: '3', image: '../assets/default.png', name: 'Стоян Г.', message: 'Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайнаЗдр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна', time: '12:23'},
        {id: '4', image: '../assets/default.png', name: 'Ники П.', message: 'Здр кп... кога ще играем майнкрафт', time: '11:47'},
        {id: '5', image: '../assets/default.png', name: 'Стоян Г.', message: 'Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайнаЗдр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна', time: '12:23'},
        {id: '6', image: '../assets/default.png', name: 'Ники П.', message: 'Здр кп... кога ще играем майнкрафт', time: '11:47'},
        {id: '7', image: '../assets/default.png', name: 'Стоян Г.', message: 'Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайнаЗдр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна', time: '12:23'},
        {id: '8', image: '../assets/default.png', name: 'Ники П.', message: 'Здр кп... кога ще играем майнкрафт', time: '11:47'},
        {id: '9', image: '../assets/default.png', name: 'Стоян Г.', message: 'Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайнаЗдр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна', time: '12:23'},
    ]);

    const animateY = new Animated.Value(0);

    const {colors} = useTheme();

    const HEADER_HIGHT = 150;
    const headerY = Animated.interpolate(animateY,
        {inputRange:[0, HEADER_HIGHT], outputRange: [0, -HEADER_HIGHT]})

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            backgroundColor: colors.primary,
        },
        heading: {
            fontSize: 28,
            color: colors.primary_text,
        },
        heading_container: {
            display: 'flex',
            height: HEADER_HIGHT ,
            justifyContent: 'center',
            alignItems: 'center'
        },
        avatar: {
            position: 'absolute',
            width: 35,
            height: 35,
            top: 20,
            right: 20
        },
        chats_container: {
            height: '100%',
            // flex: 1,
            backgroundColor: colors.background,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 10,
            paddingTop: 30,
        },
        search: {
            position: 'absolute',
            top: 20,
            left: 20,
        }
    });

    const renderMessage = (item) => <Message {...item} key={item.id} click={() => navigation.navigate('Chat')}/>;

    return (

        <View style={styles.container} >
            
            <Animated.ScrollView
                contentContainerStyle={{flexGrow: 1}}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: animateY } } } ])}>

                <Animated.View style={[styles.heading_container, {transform:[{translateY: headerY + 50}]}]}>
                    <Ionicons style={styles.search} name="search" size={35} color={colors.primary_text} onPress={() => navigation.navigate('SearchFriends', {add: false})}/>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                        <Image style={styles.avatar} source={require('../assets/default.png')} />
                    </TouchableWithoutFeedback>
                    <Text style={styles.heading} >Messages</Text>
                </Animated.View>
                <View style={styles.chats_container}>
                    {messages.map(el => renderMessage(el))}
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default ChatsList;