import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/DontCareWhereContext';
import RestaurantInfo from '../components/RestaurantInfo';
import plsSearchApi from '../hooks/useRestaurants';
// import { searchApi } from '../api/searchAPI';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { searchApi } from '../api/searchAPI';

const StackScreen = ({ navigation, searchTerm }) => {
    const { restaurants, state }  = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState([]);
    
    // const useSearchRestaurants = async (searchTerm) => {
    //     try {
    //         const response = searchApi(searchTerm)
    //             // .then(setResult(response));
    //         // const data = response.json();
    //         return response;
    //         // return data;
    //     } catch (error) {
    //         throw error;
    //     }

        // useEffect(() => {
        //     setIsLoading(true);
        //     const response = await searchApi(searchTerm)
        //         .then(setResult(restaurants));
        //     setIsLoading(false);
        // }, []);
    // }

    // useEffect(() => {
    //     useSearchRestaurants()
    //         .then(setResult());
    // }, []);

    // useSearchRestaurants();

    useEffect(() => {
        setIsLoading(true);
        try {
            const response = plsSearchApi(searchTerm)
                .then(response.json());
            setResult(response);
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false);
    }, []);

    // const useSearchAPI = useCallback(
    //     () => {
    //         setIsLoading(true);
    //         setResult(useRestaurants.searchApi());
    //         setIsLoading(false);
    //     }
    // );

    useSearchAPI();

    if (!isLoading && result) {
        console.log(result);
        return (
            <View style={styles.card}>
                {/* <TouchableOpacity onPress={() => plsSearchApi('food')}> */}
                    <ImageBackground source={ {uri: result.image_url} } style={styles.image}>
                        <RestaurantInfo style={styles.container} result={result}/>
                    </ImageBackground>
                {/* </TouchableOpacity> */}
                <View style={styles.icons}>
                    <Feather name="x-circle" size={80} color="red" />
                    <Ionicons name="md-checkmark-circle" size={80} color="green" />
                </View>
            </View>
        );
        // return (
        //     <View>
        //         <FlatList 
        //             data={result}
        //             keyExtractor={(result) => result.id}
        //             renderItem={({ item }) => {
        //                 return (
        //                     <View>
        //                         <TouchableOpacity onPress={() => searchApi()}>
        //                             <ImageBackground source={{ uri: item.image_url }} style={styles.image}>
        //                                 <RestaurantInfo style={styles.container} result={result}/>
        //                             </ImageBackground>
        //                         </TouchableOpacity>
        //                     </View>
        //                 );
        //             }}
        //         />
        //     </View>
        // );
    }
    return (
        <Text> Loading... </Text>
    );
};

    // (
    //     restaurants.map((item, index) => { <Image key={index} source={item.image_url} style={styles.image} /> })
    // );

const styles = StyleSheet.create({
    image: {
        height: 700,
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