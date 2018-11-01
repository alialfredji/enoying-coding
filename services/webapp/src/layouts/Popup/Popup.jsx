/* eslint-disable */
import React from 'react'

import Slide from '@material-ui/core/Slide'

const styles = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 5,
    backgroundColor: '#fff',
    innerStyle: {
        position: 'relative',
    },
}

const Popup = ({ visible, children }) => {
    return (
        <Slide
            direction="up"
            in={visible}
            timeout={{ enter: 250, exit: 250 }}
        >
            <div style={styles}>
                <div style={styles.innerStyle}>{children}</div>
            </div>
        </Slide>
    )
}

export default Popup
