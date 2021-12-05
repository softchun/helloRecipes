const { GraphQLList } = require('graphql/type');
const { getRecipes } = require('./services/recipes');

const { RecipeInfoListType } = require('./types/allTypes');

module.exports = {
    type: new GraphQLList(RecipeInfoListType),
    resolve: getRecipes
}