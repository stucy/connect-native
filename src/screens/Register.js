import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {

    const registerHandle = () => {
        
    }

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
        marginBottom: 15
    },
    link: {
        color: '#3CAC68',
        textDecorationLine: 'underline',
    }
});

export default Register;