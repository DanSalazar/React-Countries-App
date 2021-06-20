import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Components/Nav/Nav'
import { CountryProvider } from './CountriesContext/countryContext'
import Home from './Pages/Home/index';
import Detail from './Pages/Detail/index'
import { GlobalStyles } from './globalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  const [isLight, setLight] = useState(true);

  return (
    <Router>
      <CountryProvider>
        <ThemeProvider theme={{ isLight, setLight }}>
          <GlobalStyles />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:name" component={Detail} />
          </Switch>
        </ThemeProvider>
      </CountryProvider>
    </Router>
  );
}

export default App;
