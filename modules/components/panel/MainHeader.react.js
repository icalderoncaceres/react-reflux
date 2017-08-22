/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

import React from 'react';
import Reflux from 'reflux';
//manually
import SessionStore from "../../stores/user/SessionStore";
import SessionActions from "../../actions/user/SessionActions";

import {Route, Link, Redirect} from 'react-router-dom';

/* create class */
class MainHeader extends Reflux.Component {
  //Call parent
  constructor(props) {
    //Super props
    super(props);
    this.stores = [SessionStore];
  }

  render() {
    return (

      <header className="main-header">
        <a href="index2.html" className="logo">
          {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
          <span className="logo-mini">
            <b>Tr</b>Sr</span>
          {/* <!-- logo for regular state and mobile devices --> */}
          <span className="logo-lg">
            {/* <b>Admin</b>LTE */}
            <img src="http://127.0.0.1:3200/src/img/logo_service.png" className="img-responsive"/>
          </span>
        </a>
        {/* <!-- Header Navbar: style can be found in header.less --> */}
        <nav className="navbar navbar-static-top">
          {/* <!-- Sidebar toggle button--> */}
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* <!-- Messages: style can be found in dropdown.less--> */}

              {/* <!-- Notifications: style can be found in dropdown.less --> */}

              {/* <!-- User Account: style can be found in dropdown.less --> */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="http://127.0.0.1:3200/src/dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  {/* <!-- User image --> */}
                  <li className="user-header">
                    <img src="http://127.0.0.1:3200/src/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>

                  {/* <!-- Menu Footer--> */}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* <!-- Control Sidebar Toggle Button --> */}
              {/* <li>
                <a href="#" data-toggle="control-sidebar">
                  <i className="fa fa-gears"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
//Main header
export default MainHeader;
