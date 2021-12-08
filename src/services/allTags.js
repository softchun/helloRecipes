const axios = require("axios");

const getTags = () => {

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/tags/list',
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

module.exports = { getTags }