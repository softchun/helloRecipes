const { GraphQLList } = require('graphql/type');
const { getTags } = require('./services/allTags');

const { TagsInfoType } = require('./types/allTypes');

module.exports = {
    type: new GraphQLList(TagsInfoType),
    resolve: getTags
}