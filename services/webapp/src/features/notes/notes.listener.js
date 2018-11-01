import React from 'react'

import { open as openPopup } from 'layouts/StackLayout'

import AddNewNote from './containers/AddNewNote'

export default [
    {
        type: '@notes::openAddNewNote',
        handler: (action, ctx) => async (dispatch, getState) => openPopup((props) => {
            return <AddNewNote {...props} />
        }, {}, {
            slideFrom: 'right',
            onClose: true,
        }),
    },
]

