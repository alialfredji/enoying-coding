import React from 'react'
import radium from 'radium'
// import { connect } from

import FloatingButton from './containers/FloatingButton'

import styles from './style'

class Notes extends React.PureComponent {
    componentWillMount () {}
    componentWillUnmount () {}
    state = {}

    render () {
        return (
            <div style={styles}>
                <FloatingButton />
            </div>
        )
    }
}

export default radium(Notes)
