const express = require('express')
const { createSSRRouter } = require('create-react-app-ssr/lib/create-ssr-router')
const { createGraphqlRouter } = require('./graphql')

const createAppRouter = (settings) => {
    const router = express.Router()

    // serve data API
    router.use('/api/graphql', createGraphqlRouter())

    // ssr - serve client app
    // create-react-app-ssr
    router.use(createSSRRouter(settings))

    return router
}

module.exports = {
    createAppRouter,
}
