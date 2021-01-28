import { useEffect, useState, useContext } from 'react';
import yelp from '../api/yelp';
import { Context } from '../context/DontCareWhereContext';

export default () => {
    const [errorMessage, setErrorMessage] = useState(''); 
    const { restaurants, addRestaurant, isLoading } = useContext(Context);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Louisville'
                }
            });
            console.log(response.data.businesses);
            for(let i = 0; i < response.data.businesses.length; i++) {
                addRestaurant(response.data.businesses[i].id, response.data.businesses[i].name);
            };
        }
        catch (err) {
            setErrorMessage('Something went wrong');
            console.log(err);
        }
    };

    useEffect(() => {
        searchApi('schlotzskys');
    },  []);
       
    return [searchApi, restaurants, errorMessage ];
};