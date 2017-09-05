import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Signin from './auth/signin';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" render={() => <div>Page Landing</div>} />
        <Route path="/signin" component={Signin} />

      </div>
    );
  }
}

export default App;
