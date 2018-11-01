import React from 'react'

import AddNewNote from './containers/AddNewNote'

export default [
    {
        type: '@notes::openAddNewNote',
        handler: (action, ctx) => async (dispatch, getState) => {
            console.log('add new note')
            return <AddNewNote />
        },
    },
]

