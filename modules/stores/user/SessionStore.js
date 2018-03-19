/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */

//Import react an reflux components
import React from 'react';
import Reflux from 'reflux';
import Cookie from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Is from 'is_js';

//Import actions
import SessionActions from "../../actions/user/SessionActions";

//class
class SessionStore extends Reflux.Store {
  /*Constructor and call parent*/
  constructor() {
    //call super
    super();

    //Form list
    this.state = {
      isLogged: false,
      userData: {},
      code: 0
    };

    //Listenables
    this.listenables = SessionActions;
  }

  /*funciotn on send login*/

}

//Export info react
export default SessionStore;
