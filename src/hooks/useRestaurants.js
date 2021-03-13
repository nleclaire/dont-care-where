import { useEffect, useState, useContext } from 'react';
// import { searchApi } from '../api/searchAPI';
import yelp from '../api/yelp';
import { Context } from '../context/DontCareWhereContext';

const plsSearchApi = async (searchTerm) => {
    const [errorMessage, setErrorMessage] = useState(''); 
    const { restaurants, addRestaurant } = useContext(Context);

    const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term: searchTerm,
            location: 'Louisville'
        }
    });

    for(let i = 0; i < response.data.businesses.length; i++) {
        addRestaurant(response.data.businesses[i].id, response.data.businesses[i].name);
    };

    // const searchApi = async (searchTerm) => {
    //     try {
            
    //         console.log(response.data.businesses);
            
    //     }
    //     catch (err) {
    //         setErrorMessage('Something went wrong');
    //         console.log(err);
    //     }
    // };

    return response;
};

export default plsSearchApi;