import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

const Home = () => (
  <h1>Home</h1>
)

const Perfil = () => {
  return <h1>Perfil</h1>
}

const Login = () => {
  return <h1>Login</h1>
}

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='active'>Login</NavLink>
  </nav>
)

const NavegacionImperativa = ({ history }) => {
  console.log(history)

  return (
    <div>
      <button onClick={history.goBack}>
        Atras
      </button>

      <button onClick={history.goForward}>
        Adelante
      </button>

      <button onClick={() => {
        history.go(2)
      }}
      >
        Go 2
      </button>

      <button onClick={() => {
        history.push('/perfil')
      }}
      >
        go Perfil
      </button>

      <button onClick={() => {
        history.replace('/perfil')
      }}
      >
        go Perfil
      </button>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route render={NavegacionImperativa} />
      <Route path='/' exact render={Home} />
      <Route path='/perfil' render={Perfil} />
      <Route path='/login' render={Login} />
    </BrowserRouter>
  )
}

export default App
