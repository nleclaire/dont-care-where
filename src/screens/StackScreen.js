import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import { Context } from '../context/DontCareWhereContext';
import RestaurantInfo from '../components/RestaurantInfo';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { searchApi } from '../api/searchAPI';

const StackScreen = ({ navigation, searchTerm }) => {
    // const { state }  = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        searchApi(searchTerm)
            .then(setResult)
            .then(setIsLoading(false)
        );
        
    }, []);
    
    if (!isLoading && result !== undefined) {
        return (
            <View style={styles.card}>
                    <ImageBackground source={ { uri: result['image_url'] } } style={styles.image}>
                        <RestaurantInfo style={styles.container} result={result}/>
                    </ImageBackground>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => {searchApi()}}>
                        <Feather name="x-circle" size={80} color="red" />
                    </TouchableOpacity>
                    <Ionicons name="md-checkmark-circle" size={80} color="green" />
                </View>
            </View>
        );
    }
    else{
        return (
            <Text> Loading... </Text>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        height: '85%',
        width: 'auto',
        flexDirection: 'row',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#cccccc'
    },
    container: {
        
    },
    icons: {
        flexDirection: 'row',
        alignContent: 'space-around',
        margin: 'auto',
        justifyContent: 'space-evenly',
        marginTop: 5
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        height: 700,
        margin: 5,
    }
});

export default StackScreen;