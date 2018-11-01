/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = {
    position: 'absolute',
    bottom: 50 + 15, // @TODO: use footer height variable
    right: 15,
}

const mapState = () => ({})

const mapDispatch = (dispatch) => ({
    openAddNewNote: () => dispatch({
        type: '@notes::openAddNewNote',
    }),
})


const FloatingButton = ({
    openAddNewNote,
}) => {
    return (
        <div style={styles}>
            <Button
                variant="fab"
                color="primary"
                onClick={openAddNewNote}
            >
                <AddIcon />
            </Button>
        </div>
    )
}

export default connect(mapState, mapDispatch)(FloatingButton)
