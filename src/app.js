const { GraphQLObjectType, GraphQLSchema, } = require('graphql/type');
const recipeQuery = require('./recipes');
const recipeInfoQuery = require('./recipeInfo');
const allTagsQuery = require('./allTags');

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        recipeList: recipeQuery,
        recipeInfo: recipeInfoQuery,
        allTags: allTagsQuery
    }),
});

module.exports = new GraphQLSchema({
    query,
});