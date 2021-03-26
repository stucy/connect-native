import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {
    const {colors} = useTheme();

    const handleRegister = () => {
        
    }

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
            <Text style={styles.heading}>Make an account</Text>

            <Text style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquid.
            </Text>

            <Input placeholder="Username"/>
            <Input placeholder="Email address" email/>
            <Input placeholder="Password" password/>
            <Input placeholder="Confirm Password" password/>

            <Button text='Register' />
        </View>
    );
}


export default Register;