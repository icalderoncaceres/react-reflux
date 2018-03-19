/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */

import React from 'react';
import Is from 'is_js';

//class
class PanelHeader extends React.Component {
  //Props
  constructor(props) {
    super(props);
  }

  render() {
    var _varSplit;
    var _infoPath = this.props.pathInfo;
    if (Is.not.undefined(_infoPath)) {
      _varSplit = _infoPath.split('/');
    } else {
      _varSplit = ['asd', 'Administrator', 'Config']
    }

    return (
      <section className="content-header">
        <h1>{_varSplit[2]}
          <small>{_varSplit[1]}</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-dashboard"></i>
              Home</a>
          </li>
          <li className="active">{_varSplit[1]}</li>
        </ol>
      </section>
    );
  }
}
//export
export default PanelHeader;
