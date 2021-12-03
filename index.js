const express = require("express");
const app = express();
const PORT = 5000;

const recipes = require('./src/rest/recipes');

app.use('/recipes', recipes);

app.get("/", (req, res) => {
    res.send("Hello Recipes")
});

app.listen(PORT, () => {
    console.log("Server running at PORT ", PORT);
});