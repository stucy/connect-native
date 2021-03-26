import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

const Friends = () => {
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
            <Text style={styles.heading} >Friends</Text>
        </View>
    )
}

export default Friends;