/* eslint-disable */
import React from 'react'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = {
    position: 'absolute',
    bottom: 50 + 15, // @TODO: use footer height variable
    right: 15,
}


const FloatingButton = ({
    onClick,
}) => {
    return (
        <div style={styles}>
            <Button
                variant="fab"
                color="primary"
                onClick={onClick}
            >
                <AddIcon />
            </Button>
        </div>
    )
}

export default FloatingButton
