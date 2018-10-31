
const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql')

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({}),
})

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({}),
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
})

module.exports = schema
