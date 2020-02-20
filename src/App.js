import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css'

const Home = () => (
  <h1>Home</h1>
)

const Perfil = () => {
  return isAuth
    ? <h1>Bienvenido a tu perfil</h1>
    : (
      <Redirect
        // to='/login'
        to={{
          pathname: '/login',
          state: {
            message: 'Debes de hacer login para acceder a tu perfil'
          }
        }}
      />
    )
}

const isAuth = false

const Login = ({ location }) => {
  if (location.state) {
    return <h2>{location.state.message}</h2>
  }

  return <h2>Login</h2>
}

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='active'>Login</NavLink>
  </nav>
)

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/perfil' render={Perfil} />
      <Route path='/login' render={Login} />
      <Redirect from='/p' to='/perfil' />
    </BrowserRouter>
  )
}

export default App
