import React from 'react'
import radium from 'radium'

import MobilePage from 'layouts/MobilePage'

import Menu from './Menu'


/**
 * Component
 */

const data = () => {
    const array = []
    for (let i = 0; i < 100; i++) {
        array.push(i)
    }

    return array
}

const Dashboard = () => (
    <MobilePage>
        <MobilePage.Body>
            {data().map(item => (<p key={item}>{item}</p>))}
        </MobilePage.Body>
        <MobilePage.Footer>
            <Menu />
        </MobilePage.Footer>
    </MobilePage>
)


/**
 *  Decorators & Exports
 */

const StyledDashboard = radium(Dashboard)
export default StyledDashboard
