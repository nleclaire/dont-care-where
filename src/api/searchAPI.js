import yelp from '../api/yelp';

export const searchApi = async (searchTerm) => {
    const response = await yelp.get('/search', {
        params: {
            limit: 10,
            term: searchTerm,
            location: 'Louisville'
        }
    });
    console.log(response.data.businesses[0]);
    return response.data.businesses[Math.floor(Math.random() * 10)];
    
};