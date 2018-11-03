
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

const notesMutation = require('./notes/mutation.index')

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
        },
    },
    // fields: () => ({}),
})

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
        note: notesMutation,
    }),
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
})

module.exports = schema
