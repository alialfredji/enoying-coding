import React from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import radium from 'radium'

import { Dashboard } from 'features/dashboard'
import { HomePage } from 'features/home-page'

import getStyles from './App.style'
const styles = getStyles()


/**
 * Component
 */

const App = (props) => (
    <div style={styles.wrapper}>
        <Helmet>
            <html lang="en" />
            <title>Enjoying coding</title>
        </Helmet>
        <Route path="/" exact component={HomePage} />
        <Route path="/(home|tasks|notes|profile)" exact component={Dashboard} />
    </div>
)


/**
 *  Decorators & Exports
 */

const StyledApp = radium(App)
export default StyledApp
