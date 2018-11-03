const {
    GraphQLObjectType,
} = require('graphql')

const createNote = require('./mutation.create-new-note')


module.exports = {
    description: 'Note related mutations api',
    type: new GraphQLObjectType({
        name: 'NoteMutation',
        fields: () => ({
            create: createNote,
        }),
    }),
    resolve: () => ({}),
}
