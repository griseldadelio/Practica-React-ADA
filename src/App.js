import React from 'react'
import { PageProps, PageStates } from './screens'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/props" component={PageProps} />
        <Route path="/" component={PageStates} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;