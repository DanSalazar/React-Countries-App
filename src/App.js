import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home/index'
import Detail from './Pages/Detail/index'
import { GlobalStyles } from './globalStyles'
import { ThemeProvider } from 'styled-components'

function App() {
  const [isLight, setLight] = useState(true)

  return (
    <Router>
      <ThemeProvider theme={{ isLight, setLight }}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:name' component={Detail} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
