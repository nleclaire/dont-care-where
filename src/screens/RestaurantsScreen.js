import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import yelp from '../api/yelp';
import { Context } from '../context/DontCareWhereContext';
import RestaurantInfo from '../components/RestaurantInfo';


const RestaurantsScreen = ({ navigation, results }) => {
    const { addRestaurant, state }  = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [current, setCurrent] = useState(0);

    const searchApi = async (results) => {
        setIsLoading(true);
        const response = await yelp.get('/search', {
            params: {
                limit: 25,
                term: results,
                location: 'Louisville'
            }
        });
        setCurrent(Math.floor(Math.random() * 25));
        setResult([response.data.businesses[current]]);
        // console.log(result);
        setIsLoading(false);
    };
    
    useEffect(() => {
        searchApi('food');
    }, []);

    if (!isLoading) {
        console.log(result);
        return (
            <View>
                <TouchableOpacity onPress={() => searchApi()}>
                    <ImageBackground source={ result.image_url } style={styles.image}>
                        <RestaurantInfo style={styles.container} result={result}/>
                    </ImageBackground>
                </TouchableOpacity>
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
        height: 650,
        flexDirection: 'row',
    },
    container: {
        
    }
});

export default RestaurantsScreen;