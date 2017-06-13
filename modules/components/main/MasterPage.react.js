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
import Header from './HeaderMain.react';
import Footer from './FooterMain.react';
import MasterContainer from './MasterContainer.react';

//Create class
class MasterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          {/*print header*/}
          <Header/>

          <MasterContainer />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default MasterPage;
