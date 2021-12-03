const { GraphQLObjectType, GraphQLSchema, } = require('graphql/type');
const recipeQuery = require('./recipes');

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        recipelist: recipeQuery
    },
});

module.export = new GraphQLSchema({
    query,
});