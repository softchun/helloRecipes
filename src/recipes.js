const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql/type');
const { getRecipes } = require('./services/recipes');

const InstructionsInfoType = new GraphQLObjectType({
    name: 'InstructionsInfo',
    description: 'Instructions Info from API service',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        position: {
            type: GraphQLString
        },
        display_text: {
            type: GraphQLString
        }
    })
});

const TagsInfoType = new GraphQLObjectType({
    name: 'TagsInfo',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        type: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        display_name: {
            type: GraphQLString
        }
    })
});

const RecipeInfoType = new GraphQLObjectType({
    name: 'RecipeInfo',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        instructions: {
            type: new GraphQLList(InstructionsInfoType)
        },
        thumbnail_url: {
            type: GraphQLString
        },
        tags: {
            type: new GraphQLList(TagsInfoType)
        },
        yields: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLInt
        },
        updated_at: {
            type: GraphQLInt
        }
    })
});

const RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        recipelist: {
            type: new GraphQLList(RecipeInfoType)
        }
    })
});

module.export = {
    type: RecipeType,
    resolve: getRecipes
}