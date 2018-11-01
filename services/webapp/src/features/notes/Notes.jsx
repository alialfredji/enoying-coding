import React from 'react'
import radium from 'radium'
// import { connect } from

import FloatingButton from './containers/FloatingButton'
import AddNewNote from './containers/AddNewNote'

import styles from './style'

class Notes extends React.PureComponent {
    componentWillMount () {}
    componentWillUnmount () {}
    state = {
        addNewNote: false,
    }

    render () {
        return (
            <div style={styles}>
                <FloatingButton onClick={() => this.setState({ addNewNote: true })}/>
                {this.state.addNewNote
                    ? <AddNewNote close={() => this.setState({ addNewNote: false })}/>
                    : null}
            </div>
        )
    }
}

export default radium(Notes)
