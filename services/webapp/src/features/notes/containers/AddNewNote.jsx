/* eslint-disable */
import React from 'react'

import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'

class AddNewNote extends React.PureComponent {
    componentDidMount () {
    }

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    }

    render () {
        return (
            <div>
                <div onClick={this.props.stackLayout.close}>Close</div>
                <br />
                <InputBase
                    autoFocus
                    placeholder={'Type a new note...'}
                    multiline
                    rowsMax={1000}
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    fullWidth
                />
            </div>
        )
    }
}

export default AddNewNote
