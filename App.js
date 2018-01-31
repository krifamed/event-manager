import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './Components/Login';
import Register from './Components/Register';
import EventOwner from './Components/EventOwner';
import EventPage from './Components/EventPage';


export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key='root'>
          <Scene
            component={Login}
            hideNavBar={true}
            initial={true}
            key='Login'
            title='Login'
          />
          <Scene
            component={Register}
            hideNavBar={true}
            key='Register'
            title='Register'
          />
          <Scene
            component={EventOwner}
            hideNavBar={true}
            key='EventOwner'
            title='Event Owner'
          />
          <Scene
            component={EventPage}
            hideNavBar={true}
            key='EventPage'
            title='Event Page'
          />
        </Scene>
      </Router>
    );
  }
}
