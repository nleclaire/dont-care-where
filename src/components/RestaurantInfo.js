import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantInfo = ( {result} ) => {
    console.log(result.name)
    return (
        <View style={styles.container}>
            <Text style={styles.info}>
                { result.name }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: 100,
        width: 100,
        backgroundColor: 'rgba(0,0,0,.6)',
        alignSelf: 'flex-end'
       },
    info: {
        color: 'white',
        fontSize: 30,
    },
});

export default RestaurantInfo;