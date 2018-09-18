//Importing in the necessary items
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {

  //Creating the routes
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
