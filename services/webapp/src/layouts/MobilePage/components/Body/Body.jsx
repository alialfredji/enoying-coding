/* eslint-disable */
import React from 'react'
import radium from 'radium'

import styles from './Body.style'
import FooterStyle from '../Footer/Footer.style'

const Body = ({ children }) => {
    return (
        <div 
            style={[
                styles,
            ]}
            children={
                <div>
                    {children}
                    <div style={{ height: FooterStyle.height }}/>
                </div>
            }
        />
    )
}

export default radium(Body)
