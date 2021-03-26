import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Switch} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const IconButton = ({ Icon, children ,text, click, toggle}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            margin: 10,
            alignItems: 'center'
        },
        text: {
            color: colors.primary_text,
            fontSize: 18
        },
        switch: {
            marginLeft: 'auto',
        }
    });

    return (
        <Pressable onPress={() => {
            click();
            toggleSwitch();
        }}>
            <View style={styles.container}>
                {children}
                <Text style={styles.text}>{text}</Text>
                {toggle && 
                    <Switch style={styles.switch} 
                        trackColor={{ false: colors.secondary_text, true: colors.primary }}
                        thumbColor={colors.primary_text}
                        // onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
            </View>
        </Pressable>
    );
}

export default IconButton;
