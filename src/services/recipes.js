const axios = require("axios");

const getRecipes = () => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: { from: '0', size: '2', tags: 'under_30_minutes' },
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': '6d98e92327mshed74968c8d9546dp1837d1jsnef020c081e23'
        }
    };
    return axios.request(options).then(function (response) {
        //console.log("data",response.data);
        return transform(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}

const transform = (data) => {
    const { results } = data
    return results
}

module.exports = { getRecipes }