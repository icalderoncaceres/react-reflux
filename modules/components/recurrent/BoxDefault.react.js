/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */

//import react
import React from 'react';

//class
class BoxDefault extends React.Component {
  //props
  constructor(props) {
    super(props);
  }

  //render
  render() {
    return (
      <div className={"box box-" + this.props.type} id={this.props.id}>
        <div className="box-header with-border">
          <h3 className="box-title">{this.props.title}</h3>
        </div>
        {/* <!-- /.box-header --> */}
        <div className="box-body">
          {this.props.children}
        </div>

        <div className="overlay" style={{display: 'none'}}>
          <i className="fa fa-refresh fa-spin"></i>
        </div>
      </div>
    );
  }
}
//ERxtends
export default BoxDefault;
