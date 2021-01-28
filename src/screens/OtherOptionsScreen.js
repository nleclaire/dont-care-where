import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherOptionsScreen = () => {
    return (
        <View>
            <Text style={styles.title}>
                OtherOptionsScreen
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    }
});

export default OtherOptionsScreen;