import React, { FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import MainPage from 'pages/'

const App:FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact
          path='/'>
          <MainPage />
        </Route>
        <Route exact
          path='/general'>
          <MainPage />
        </Route>
        <Route exact
          path='/business'>
          <MainPage />
        </Route>
        <Route exact
          path='/health'>
          <MainPage />
        </Route>
        <Route exact
          path='/science'>
          <MainPage />
        </Route>
        <Route exact
          path='/sports'>
          <MainPage />
        </Route>
        <Route exact
          path='/technology'>
          <MainPage />
        </Route>
        <Route>
          <div>400 m8</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
