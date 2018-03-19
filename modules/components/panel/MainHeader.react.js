/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
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
        <a href="mailto:ivandario2010@gmail.com" className="logo">
          {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
          <span className="logo-mini">
            <b>Tr</b>Sr</span>
          {/* <!-- logo for regular state and mobile devices --> */}
          <span className="logo-lg">
            {/* <b>Admin</b>LTE */}
            <img src="/src/img/fotoivan.jpg" className="img-responsive"/>
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
                  <img src="/src/img/fotoivan.jpg" className="user-image" alt="User Image"/>
                  <span className="hidden-xs">Iván Calderon</span>
                </a>
                <ul className="dropdown-menu">
                  {/* <!-- User image --> */}
                  <li className="user-header">
                    <img src="/src/img/fotoivan.jpg" className="img-circle" alt="User Image"/>

                    <p>
                      Iván Calderon - Web Developer
                      <small>ivandario2010@gmail.com</small>
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
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
//Main header
export default MainHeader;
