/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import SvgIcon from '@material-ui/core/SvgIcon'

import icons from '../lib/dashboard-icons'

const mapState = (props, ctx) => {
    return {}
}

const mapDispatch = (dispatch, { history }) => {
    return {
        routeTo: (route) => history.push(`/${route}`),
    }
}

class Menu extends React.PureComponent {
    state = {
        page: this.props.route,
    }

    handleChange = (event, value) => {
        this.setState({ page: value })
        this.props.routeTo(value)
    }

    getIcon = (value) => {
        return this.state.page !== value
            ? <SvgIcon children={<path d={icons[value].outlined} />} />
            : <SvgIcon children={<path d={icons[value].default} />} />
    }

    render () {
        return (
            <div>
                <BottomNavigation value={this.state.page} onChange={this.handleChange}>
                    <BottomNavigationAction label="Home" value="home" icon={this.getIcon('home')} />
                    <BottomNavigationAction label="Notes" value="notes" icon={this.getIcon('notes')} />
                    <BottomNavigationAction label="Tasks" value="tasks" icon={this.getIcon('tasks')} />
                    <BottomNavigationAction label="Profile" value="profile" icon={this.getIcon('profile')} />
                </BottomNavigation>
            </div>
        )
    }
}

const RoutedMenu = withRouter(Menu)
export default connect(mapState, mapDispatch)(RoutedMenu)
