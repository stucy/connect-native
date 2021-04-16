import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useTheme } from '../contexts/ThemeContext';

import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';

const Chat = ({navigation}) => {
    const {colors} = useTheme();
    const [messages, setMessages] = useState([
        {id: '3', message: 'Reeee eeee eeee', sender: 1, time: '13:41'},
        {id: '2', message: 'Амиии.. няма да повярваш какво стана една тухла падна точно върху лаптопа ми докато го правих', sender: 2, time: '13:37'},
        {id: '1', message: 'Здр кп... кво стана с дизайна', sender: 1, time: '10:21'},
    ])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexDirection: 'row',
            margin: 15,
        },
        settings: {
            position: 'absolute',
            top: 15,
            right: 15,
        },
        heading: {
            textAlign: 'center',
            fontSize: 24,
            color: colors.primary_text,
        },
        messages_container: {
            flex: 1,
        }
    });

    const renderMessages = ({item}) => <ChatMessage {...item} />;

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color={colors.primary_text} onPress={() => navigation.goBack()}/>
                <Text style={styles.heading} >Stoyan G.</Text>
                    <Entypo  name="dots-three-horizontal" size={24} color={colors.primary} onPress={() => navigation.navigate('ChatSettings')}/>
            </View>
        
            <View style={styles.messages_container}>
                <FlatList
                    data={messages}
                    renderItem={renderMessages}
                    keyExtractor={item => item.id}
                    inverted={true}
                />
            </View>

            <ChatInput click={setMessages}/>
        </View>
    )
}

export default Chat;