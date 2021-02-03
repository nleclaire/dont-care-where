import yelp from '../api/yelp';

export const searchApi = async (results) => {
    const response = await yelp.get('/search', {
        params: {
            limit: 25,
            term: results,
            location: 'Louisville'
        }
    })
    return response.data.businesses[Math.floor(Math.random() * 25)];
};