import { useEffect, useState, useContext } from 'react';
// import { searchApi } from '../api/searchAPI';
import yelp from '../api/yelp';
import { Context } from '../context/DontCareWhereContext';

const searchApi = async (searchTerm) => {
    const [errorMessage, setErrorMessage] = useState(''); 
    const [restaurants, setRestaurants] = useState([]);
    const { addRestaurant } = useContext(Context);

    try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Louisville'
            }
        });
        setRestaurants(response.data.businesses);
        // console.log(restaurants);
        // restaurants.forEach(item => addRestaurant(item.id, item.name));
        // for(let i = 0; i < restaurants.length; i++) {
        //     addRestaurant(restaurants[i].id, restaurants[i].name);
        // };
    }
    catch (err) {
        setErrorMessage('Something went wrong');
        console.log(err);
    }

    return [searchApi];
};

export default [searchApi];