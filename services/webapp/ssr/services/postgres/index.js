
const init = require('./init')
const start = require('./start')
const connectionHandler = require('./connection-handler')

const query = (conn, q, s) =>
    connectionHandler.get(conn).handler.query(q, s)

const publish = (conn, channel, payload, throttle = 0) => {
    // setup timers cache at first execution
    if (!publish.timers) {
        publish.timers = {}
    }

    clearTimeout(publish.timers[`${channel}`])
    publish.timers[`${channel}`] = setTimeout(() => {
        return connectionHandler.get(conn).emitter.publish(channel, payload)
    }, throttle)
}

const listen = (conn, channel, fn) =>
    connectionHandler.get(conn).emitter.addChannel(channel, fn)

module.exports = {
    init,
    start,
    getModel: connectionHandler.getModel,
    getConnection: connectionHandler.get,
    getEmitter: conn => connectionHandler.get(conn).emitter,
    query,
    publish,
    listen,
}
