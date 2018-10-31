import React from 'react'
import radium from 'radium'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import MobilePage from 'layouts/MobilePage'

import Menu from './Menu'

import { Home } from 'features/home'
import { Tasks } from 'features/tasks'
import { Notes } from 'features/notes'
import { Profile } from 'features/profile'


/**
 * Component
 */

const mapState = (state, ctx) => {
    return {
        route: ctx.match.params[0],
    }
}

const Dashboard = (props) => {
    return (
        <MobilePage>
            <MobilePage.Body>
                <Route path={'/home'} component={Home}/>
                <Route path={'/tasks'} component={Tasks}/>
                <Route path={'/notes'} component={Notes}/>
                <Route path={'/profile'} component={Profile}/>
            </MobilePage.Body>
            <MobilePage.Footer>
                <Menu {...props} />
            </MobilePage.Footer>
        </MobilePage>
    )
}


/**
 *  Decorators & Exports
 */

const ConnectedDashboard = connect(mapState)(Dashboard)
const StyledDashboard = radium(ConnectedDashboard)
export default StyledDashboard
