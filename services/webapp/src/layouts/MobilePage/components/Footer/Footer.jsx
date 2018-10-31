/* eslint-disable */
import React from 'react'
import radium from 'radium'

import styles from './Footer.style'

const Footer = ({ children }) => {
    return (
        <div 
            style={[
                styles,
            ]}
            children={children}
        />
    )
}

export default radium(Footer)
