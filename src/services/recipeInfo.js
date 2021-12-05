const axios = require("axios");

const getRecipeInfo = (_, param, req) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/detail',
        params: { id: req.id },
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': '6d98e92327mshed74968c8d9546dp1837d1jsnef020c081e23'
        }
    };
    return axios.request(options).then(function (response) {
        //console.log("data",response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = { getRecipeInfo }