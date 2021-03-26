import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

import Button from '../components/Button';
import Input from '../components/Input';

const ChangePass = () => {
    const {colors} = useTheme();

    const handleChangePass = () => {
        
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
          padding: 25,
        },
        innerContainer: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center'
        },
        heading: {
            textAlign: 'center',
            fontSize: 28,
            color: colors.primary_text,
            marginBottom: 25
        },
        text: {
            color: colors.primary_text,
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 15
        },
        link: {
            color: colors.primary,
            textDecorationLine: 'underline',
        }
    });

    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Change Password</Text>
                <Input placeholder="Old Password" password/>
                <Input placeholder="New Password" password/>
                <Input placeholder="Confirm New Password" password/>
            </View>

            <Button text='Change' />
        </View>
    );
}


export default ChangePass;