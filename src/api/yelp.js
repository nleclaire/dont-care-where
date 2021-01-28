import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer lPgXIbMkJJoZdqz03kG59WINha6ihFsJgfviR__iTlLpiJ6CrolDXuy5L6PXHYhFW5fIKG2zB_tv9ucFHZz2FkmlA0xi_IyQZW5oGJVi4UkCPFK29YlwAD_i7mteX3Yx'
    }
});

