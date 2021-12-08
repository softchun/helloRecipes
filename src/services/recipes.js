const axios = require("axios");

const getRecipes = (_, param, req) => {

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        //params: { from: '0', size: '2', tags: 'under_30_minutes' },
        params: req,
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': 'db580f75cemsh87866b09b41686dp1b7ab8jsn81788be65aaf'
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