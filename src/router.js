import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import CreateProfile from './Components/CreateProfile/CreateProfile';
import Browse from './Components/Browse/Browse';
import Matches from './Components/Matches/Matches';
import Messages from './Components/Messages/Messages';

export default (
  <Switch>

    <Route
      component={Landing}
      exact
      path=''
    />

    <Route
      component={CreateProfile}
      exact
      path='/create-profile'
    />

    <Route
      component={Browse}
      exact
      path='/browse/'
    />

    <Route
      component={Matches}
      exact
      path='/matches/'
    />

    <Route
      component={Messages}
      path='/messages/:id'
    />

  </Switch>
);