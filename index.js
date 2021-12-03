const express = require("express");
const app = express();
const PORT = 5000;
const graphqlHTTP = require('express-graphql')
const schema = require('./src/app')

const recipes = require('./src/rest/recipes');

app.use('/recipes', recipes);

app.get("/", (req, res) => {
    res.send("Hello Recipes")
});

app.use(
    'graphql',
    graphqlHTTP.graphqlHTTP({
        schema,
        graphql: true,
    })
)

app.listen(PORT, () => {
    console.log("Server running at PORT ", PORT);
});