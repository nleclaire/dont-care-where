import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import RestaurantsScreen from './RestaurantsScreen';

const HomeScreen = ({ navigation }) => {
    // console.log(result)
    const [buttonPressed, setButtonPressed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setSearchTerm('food')
    },  []);

    if (!buttonPressed) {
        return (
            <View>    
                <Button 
                    title="Search API" 
                    style={styles.title}
                    onPress={console.log('button pressed', buttonPressed), () => {setButtonPressed(true)}}
                />
            </View>
        );
    }
    return (
        <RestaurantsScreen results={searchTerm}/>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    image: {
        height: 350,
        width: 150,
    }
});

export default HomeScreen;