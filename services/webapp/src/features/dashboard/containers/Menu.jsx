/* eslint-disable */
import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import SvgIcon from '@material-ui/core/SvgIcon'

const icons = {
    profile: {
        outlined: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z',
        default: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    },
    home: {
        outlined: 'M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z',
        default: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    },
    notes: {
        default: 'M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z',
        outlined: 'M16 4H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z',
    },
    tasks: {
        outline: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z',
        default: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    },
}

class Menu extends React.PureComponent {
    state = {
        page: 'home',
    }

    handleChange = (event, value) => {
        this.setState({ page: value })
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

export default Menu
