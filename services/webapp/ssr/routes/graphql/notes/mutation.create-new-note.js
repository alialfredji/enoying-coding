const {
    GraphQLBoolean,
    GraphQLNonNull,
} = require('graphql')

module.exports = {
    description: 'Create a new note',
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: async (params, args, { req }) => {
        console.log('something')
        return true
        // await profileService.sendSignupConfirmEmail(req.data.session.id)
        // return true
    },
}
