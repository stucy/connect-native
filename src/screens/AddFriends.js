import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View} from 'react-native';

import SearchInput from '../components/SearchInput';

import { useTheme } from '../contexts/ThemeContext';

import Friend from '../components/Friend';

const AddFriends = ({navigation}) => {  
    const [friends, setFriends] = useState([
        {id: '1', image: '', name: 'Стоян Г.'},
        {id: '2', image: '', name: 'Ники П.'},
        {id: '3', image: '', name: 'Стоян Г.'},
        {id: '4', image: '', name: 'Ники П.'},
        {id: '5', image: '', name: 'Стоян Г.'},
        {id: '6', image: '', name: 'Ники П.'},
        {id: '7', image: '', name: 'Стоян Г.'},
        {id: '8', image: '', name: 'Ники П.'},
        {id: '9', image: '', name: 'Стоян Г.'},
        {id: '10', image: '', name: 'Ники П.'},
    ]);  
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
        },
        friends_container: {
            marginTop: 15,
            paddingBottom: 30,
        }
    });

    const renderFriends = ({item}) => <Friend {...item} key={item.id} click={() => navigation.goBack()} add={() => navigation.goBack()}/>;

    return (
        <View style={styles.container}>
            <View style={{padding: 15}} >
                <SearchInput click={() => ''}/>
            </View>
            <View style={styles.friends_container} >
                <FlatList
                    data={friends}
                    renderItem={renderFriends}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}


export default AddFriends;