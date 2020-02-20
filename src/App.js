import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => (
  <h1>Home</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const Playlist = () => (
  <h1>Playlist</h1>
)

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={Home} />
        <Route path='/videos' render={Playlist} />
        <Route path='/videos' render={Videos} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
