import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

const Chat = ({navigation}) => {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: 25,
            justifyContent: 'center',
        },
        heading: {
            textAlign: 'center',
            fontSize: 28,
            color: colors.primary_text,
            marginBottom: 10
        },
    });

    return (
        <View style={styles.container} >
            <Text style={styles.heading} >Chat</Text>
            <Button title='ChatSettings' color={colors.primary} 
                    onPress={() => navigation.navigate('ChatSettings')}/>
        </View>
    )
}

export default Chat;