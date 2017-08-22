/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
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
import PrivateRoute from "../recurrent/PrivateRoute.react";

//Routes
import Test from "../Test.react";
// import AudioMain from "../audios/AudioMain.react";
// import AdministratorMain from "../administrator/AdministratorMain.react";

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

  //Component after mount
  componentDidMount() {
    //Cookies
    var acc_one = Cookies.load('access-one');
    var acc_two = Cookies.load('access-two');

    if (Is.not.undefined(acc_one) && Is.not.undefined(acc_two)) {
      //call login again
      SessionActions.logIn(acc_one, acc_two);
    }

  }

  //Render
  render() {

    //Return app
    return (
      <div>
        <MainHeader></MainHeader>
        <MenuNav></MenuNav>

        <div className="content-wrapper">
          {/* agents */}

          {/* <Searchable/> */}
          {/* <PrivateRoute path="/audio" component={AudioMain}></PrivateRoute> */}
          {/* <PrivateRoute path="/administrator" component={AdministratorMain}></PrivateRoute> */}
          <PrivateRoute path="/test" component={Test}></PrivateRoute>

          {/* <section className="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>

          <section className="content">
          </section> */}
          <div className="clearfix"></div>

        </div>

        <div className="clearfix"></div>

        {/* <div className="overlay" id="main_overlay">
          <i className="fa fa-refresh fa-spin"></i>
        </div> */}
      </div>
    );

  }
}

//Export default
export default MainPanel;
