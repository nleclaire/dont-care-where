import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreInfoScreen = () => {
    return (
        <View>
            <Text style={styles.title}>
                MoreInfoScreen
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    }
});

export default MoreInfoScreen;