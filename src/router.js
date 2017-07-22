import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import EditProfile from './Components/EditProfile/EditProfile';
import Browse from './Components/Browse/Browse';
import Matches from './Components/Matches/Matches';
import Messages from './Components/Messages/Messages';

export default (
  <Switch>

    <Route
      component={Landing}
      exact
      path='/'
    />

    <Route
      component={EditProfile}
      exact
      path='/edit-profile'
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
      path='/messages/'
    />

  </Switch>
);