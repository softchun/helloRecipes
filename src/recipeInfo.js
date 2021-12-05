const { getRecipeInfo } = require('./services/recipeInfo');

const { RecipeInfoType } = require('./types/allTypes');

module.exports = {
    type: RecipeInfoType,
    resolve: getRecipeInfo
}