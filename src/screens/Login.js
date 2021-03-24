import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';

const Login = ({ navigation }) => {

    const loginHandle = () => {

    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Let's sign you in.</Text>

            <Text style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquid.
            </Text>

            <Input placeholder="Email address" email/>
            <Input placeholder="Password" password/>

            <Text style={styles.text}>
                Don't have an account? 
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Register!</Text>
                </Pressable>
            </Text>

            <Button text='Sign in' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        padding: 25,
        justifyContent: 'center',
    },
    heading: {
        textAlign: 'center',
        fontSize: 28,
        color: '#EFEFEF',
        marginBottom: 10
    },
    text: {
        color: '#EFEFEF',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 15,
        marginTop: 25
    },
    link: {
        color: '#3CAC68',
        textDecorationLine: 'underline',
        fontSize: 16,
        lineHeight: 16
    },
});

export default Login;