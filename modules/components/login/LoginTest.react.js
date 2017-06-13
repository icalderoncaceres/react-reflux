/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */


//import react components
import React from 'react';
import Reflux from 'reflux';

//Import info from react pages
import SessionActions from '../../actions/user/SessionActions';
import SessionStore from '../../stores/user/SessionStore';

//Class
class LoginTest extends Reflux.Component {
  //Constructor
  constructor(props) {
    //Call parent
    super(props);

    //Stores
    this.stores = [SessionStore];
  }

  //Do login
  _doLogin() {
    SessionActions.logIn();
  }

  //Logout
  _doLogout() {
    SessionActions.logOut();
  }


  //render
  render() {
    return (
      <div>
        
        <button onClick={this._doLogout.bind(this)}>Log Out</button>

      </div>
    );
  }
}

//
export default LoginTest;
