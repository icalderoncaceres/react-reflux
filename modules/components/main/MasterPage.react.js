/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */
//Import react components
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Panel from "../panel/MainPanel.react";

//Create class
class MasterPage extends React.Component {
  constructor(props) {
    super(props);
  }
  //render
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Panel}></Route>
        </div>
      </Router>
    )
  }
}

export default MasterPage;
