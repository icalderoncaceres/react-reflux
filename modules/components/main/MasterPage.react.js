/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

//Import react components
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//components manually
import PrivateRoute from "../recurrent/PrivateRoute.react";

//Login
import Login from "../login/Login.react";
import Panel from "../panel/MainPanel.react";

//Create class
class MasterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  //components
  componentDidMount() {
    //Info
    // $(document).ajaxStart(() => {
    //   $('#main_overlay').fadeIn();
    // });
    //
    // $(document).ajaxStop(() => {
    //   $('#main_overlay').fadeOut();
    // });
  }

  //render
  render() {
    return (
      <Router>
        <div>
          {/* login rater*/}
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/" component={Panel}></PrivateRoute>

          {/*print header

          <Header/>

          <MasterContainer/>*/}
         {/* <Footer/> */}

        </div>
      </Router>
    )
  }
}

export default MasterPage;
