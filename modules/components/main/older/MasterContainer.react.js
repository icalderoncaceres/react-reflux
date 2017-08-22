/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

//Import components react
import React from 'react';
import Reflux from 'reflux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'react-cookie';
import Is from 'is_js';

//Import recurrents
import PrivateRoute from "../recurrent/PrivateRoute.react";

//Components manually
import Test from "../Test.react";
import Login from "../login/Login.react";
import LoginTest from "../login/LoginTest.react";
import Panel from "../panel/MainPanel.react";

//Import stores and actions
import SessionStore from "../../stores/user/SessionStore";
import SessionActions from "../../actions/user/SessionActions";

//class
class MasterContainer extends Reflux.Component {
  /*Master Constructor*/
  constructor(props) {
    //Call parent
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

  //Render applications
  render() {

    //Return
    return (
      <section className="main-page container-fluid">

        <div className="col-md-12 main-container">

          <HeaderContainer sessionData={this.state.userData}/> {/*Routes*/}
          {/* <Route path="/login" component={Login}></Route> */}
          <Route path="/logintest" component={LoginTest}></Route>

          {/*private routes*/}
          <PrivateRoute path="/" component={Panel}></PrivateRoute>

        </div>
      </section>
    );
  }
}

/* Class Header Main page */
class HeaderContainer extends React.Component {
  //main paremt
  constructor(props) {
    //Call parent
    super(props);

  }

  //Renderizar
  render() {
    var props = this.props.sessionData;
    var _company;
    if(Is.not.undefined(props.companyLogo)){
      _company = (
        <div className="col-md-3 pull-right">
          <img src={global.mediaUri + props.companyLogo} alt="icon logo service" className="pull-right img-responsive"/>
        </div>
      );
    }

    return (
      <div className="container-fluid header-container">
        <div className="col-md-6">
          <img src="src/img/logo_service.png" alt="icon logo service"/>
        </div>
        {_company}
        <div className="col-md-12">
          <hr className="hr"/>
        </div>
      </div>
    )
  }
}

//Export class
export default MasterContainer;
