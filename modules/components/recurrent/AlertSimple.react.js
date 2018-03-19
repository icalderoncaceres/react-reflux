/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */

//imprt dependencies
import React from 'react';

//create class
class AlertSimple extends React.Component {

  //Super constructor
  constructor(props) {
    //call parent
    super(props);
  }

  //Render props
  render() {
    return (
      <div className={"custom-alt alert alert-" + this.props.type} role="alert">
        <b>
          <i className="icon fa fa-info"></i>
          Alert!
        </b> &nbsp;
        {this.props.text}
      </div>
    )
  }
}

//Export variable
export default AlertSimple;
