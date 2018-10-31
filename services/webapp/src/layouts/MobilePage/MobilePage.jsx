/* eslint-disable */
import React from 'react'
import radium from 'radium'

import Body from './components/Body'
import Footer from './components/Footer'

import styles from './MobilePage.style'

const MobilePage = ({ children }) => {
    return (
        <div
            style={[
                styles,
            ]}
            children={children}
        />
    )
}

MobilePage.Footer = Footer
MobilePage.Body = Body

export default radium(MobilePage)
