import createDataContext from './createDataContext';

const restaurantListReducer = (state, action) => {
    switch(action.type) {
        case 'add_restaurant':
            return [...state, {
                id: action.payload.id,
                name: action.payload.name 
            }]; 
        case 'default':
            return state;
    };
};

const addRestaurant = (dispatch) => {
    return (id, name) => {
        dispatch({ type: 'add_restaurant', payload: { id, name }});
    };
};

export const { Context, Provider } = createDataContext(
    restaurantListReducer, 
    { addRestaurant }, 
    [{id: 1, name: 'TEST' }]
);