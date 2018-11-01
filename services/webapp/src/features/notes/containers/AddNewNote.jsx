/* eslint-disable */
import React from 'react'

import TextField from '@material-ui/core/TextField'

class AddNewNote extends React.PureComponent {
    componentDidMount () {
        console.log(this.input)
    }

    state = {
        autoFocus: false,
    }

    render () {
        return (
            <div>
                <div onClick={this.props.stackLayout.close}>Close</div>
                <br />
                <TextField 
                    placeholder={'Add a new note...'}
                />
            </div>
        )
    }
}

export default AddNewNote
