import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';

const Avatar = ({editable, click}) => {
    const {colors, icons} = useTheme();

    const styles = StyleSheet.create({
        avatar: {
            height: 120,
            width: 120,
        },
        avatar_container: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
        },
        icon:{
            position: 'absolute',
            bottom: -5,
            right: 5,
            borderRadius: 100,
            padding: 7,
            width: 35,
            height: 35,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...icons.darkMode
        },
    });

    return (
        <View style={styles.avatar_container}>
            <View>
                <Image style={styles.avatar} source={require('../assets/default.png')} />
                {editable &&  <View style={styles.icon}>
                    <MaterialIcons name="edit" size={24} color={colors.primary_text} />
                </View>}
            </View>
        </View>
    );
}

export default Avatar;