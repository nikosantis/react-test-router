import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

import './App.css'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <div>
    <h1>Productos</h1>
    <Link to='/productos/empresa1'>Empresa 1</Link>
    <Link to='/productos/empresa2'>Empresa 2</Link>
  </div>
)

const Home = (props) => {
  return (
    <h1>Home</h1>
  )
}

const HolaNinja = () => (
  <h1>Hola Ninja</h1>
)

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'orangered'
}

const Navigation = () => (
  <nav style={navStyles}>
    <NavLink
      to='/'
      exact
      activeStyle={NavActive}
    >
      Home
    </NavLink>
    <NavLink
      to='/hola'
      activeClassName='navActive'
    >
    Hola
    </NavLink>
    <NavLink
      to='/productos'
      activeStyle={NavActive}
    >
      Productos
    </NavLink>
  </nav>
)

const ProductosCategoria = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h1>Categoría: {match.params.categoria}</h1>
      {
        match.params.id
          ? (
            <h2>id: {match.params.id}</h2>
          )
          : ''
      }
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route
        path='/'
        exact
        render={Home}
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
        render={HolaNinja}
      />
      <Route
        path='/productos'
        exact
        render={Productos}
      />
      <Route
        path='/productos/:categoria/:id?'
        render={ProductosCategoria}
      />
    </BrowserRouter>
  )
}

export default App
