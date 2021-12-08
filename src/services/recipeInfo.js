const axios = require("axios");

const getRecipeInfo = (_, param, req) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/detail',
        params: { id: req.id },
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': 'db580f75cemsh87866b09b41686dp1b7ab8jsn81788be65aaf'
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