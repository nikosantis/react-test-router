import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const HolaNinja = () => (
  <h1>Hola Ninja</h1>
)

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path='/'
        exact
        component={Home}
      />
      <Route
        path='/hola'
        exact
        sensitive
        render={Hola}
      />
      <Route
        path='/hola/ninja'
        exact
        component={HolaNinja}
      />
      <Route
        path='/arrow'
        exact
        component={() => (<h1>Testendo Arrow Function en Router</h1>)}
      />
      <Route
        path='/productos'
        exact
        strict
        component={Productos}
      />
      <Route
        path='/productos2'
        exact
      >
        <Productos />
      </Route>
      <Route
        path='/productos3'
        exact
      >
        {({ match }) => {
          if (!match) {
            return (
              <div>
                *** woops no coincide con productos
              </div>
            )
          }
          return (
            <Productos />
          )
        }}
      </Route>
    </BrowserRouter>
  )
}

export default App
