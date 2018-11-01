/* eslint-disable */
import React from 'react'

const styles = {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 5,
    backgroundColor: 'white',
}

const AddNewNote = ({ close }) => {
    return <div style={styles} onClick={close}>hello</div>
}

export default AddNewNote
