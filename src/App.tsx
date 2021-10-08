import React, { FC, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import MainPage from 'pages/'
import { Context } from 'hooks/useBookmarks'
import { INewsArticle } from 'constants/newsItem'
import Fof from 'pages/404'


const App:FC = () => {
  const [cache, setCache] = useState<INewsArticle[]>([])
  const toggleCached = (arg:INewsArticle) => {
    if (cache.find(x => x.title === arg.title)) {
      setCache(prev => prev.filter(x => x.title !== arg.title))
    } else {
      const newItem:INewsArticle = { ...arg, bookmarked: true }

      setCache(prev => [...prev, newItem])
    }
  }

  return (
    <Router>
      <Context.Provider value={{ cache, toggleCacheElement: toggleCached }}>
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
            path='/favorites'>
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
            <Fof />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  )
}

export default App
