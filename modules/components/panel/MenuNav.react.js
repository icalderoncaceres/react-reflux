/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

/* create class */
class MenuNav extends React.Component {

  //Call parent
  constructor(props) {
    //Super props
    super(props);
  }

  //Renderk
  render() {

    //Returns
    return(
      <aside className="col-md-3 col-xs-10 col-sm-10">
        amenu left
      </aside>
    );
  }

}

//export route of
export default MenuNav;
