/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */

//Import react dependencies
import React from 'react';
import Reflux from 'reflux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'react-cookie';
import Is from 'is_js';

//files manually
import MenuNav from './MenuNav.react';
import MainHeader from './MainHeader.react';

//Routes
import Test from "../Test.react";
//Import stores and actions
import SessionStore from "../../stores/user/SessionStore";
import SessionActions from "../../actions/user/SessionActions";

//Class
class MainPanel extends Reflux.Component {
  //main
  constructor(props) {
    //Call parents
    super(props);

    //Make Stores
    this.stores = [SessionStore];
  }

  //Render
  render() {

    //Return app
    return (
      <div>
        <MainHeader></MainHeader>
        <MenuNav></MenuNav>

        <div className="content-wrapper">
          <Route path="/test" component={Test}></Route>

          <div className="clearfix"></div>

        </div>

        <div className="clearfix"></div>
      </div>
    );

  }
}

//Export default
export default MainPanel;