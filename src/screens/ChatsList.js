import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, FlatList } from 'react-native';

import Message from '../components/Message';

import { useTheme } from '../contexts/ThemeContext';

const ChatsList = ({navigation}) => {
    const [messages, setMessages] = useState([
        {id: '2', image: '../assets/default.png', name: 'Ники П.', message: 'Здр кп... кога ще играем майнкрафт', time: '11:47'},
        {id: '1', image: '../assets/default.png', name: 'Стоян Г.', message: 'Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна Здр ко пр какво стана с дизайнаЗдр ко пр какво стана с дизайна Здр ко пр какво стана с дизайна', time: '12:23'},
        ])

    const {colors} = useTheme();

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
            flex: 1,
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
            flex: 3,
            backgroundColor: colors.background,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 10,
            paddingTop: 30
        }
    });

    const renderMessage = ({item}) => <Message {...item} click={() => navigation.navigate('Chat')}/>;

    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.avatar} source={require('../assets/default.png')} />
            </TouchableWithoutFeedback>
            <View style={styles.heading_container}>
                <Text style={styles.heading} >ChatsList</Text>
            </View>
            <View style={styles.chats_container}>
                <FlatList
                    data={messages}
                    renderItem={renderMessage}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default ChatsList;