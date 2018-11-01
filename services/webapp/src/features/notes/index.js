import Notes from './Notes'
import notesListener from './notes.listener'

/**
 * Synchronous Feature API
 * every resource listed here will partake into the main bundle
 * (reducers are required for correct SSR)
 */

export const reducers = {}
export const services = []
export const listeners = [
    notesListener,
]


export {
    Notes,
}
