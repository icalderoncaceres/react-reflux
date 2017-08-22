/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

import React from 'react';
import Reflux from 'reflux';
//Import stores and actions
import SessionStore from "../../stores/user/SessionStore";
import SessionActions from "../../actions/user/SessionActions";

import {Route, Link, Redirect} from 'react-router-dom';

/* create class */
class MenuNav extends Reflux.Component {

  //Call parent
  constructor(props) {
    //Super props
    super(props);
    this.stores = [SessionStore];
  }
  _doLogout() {
    SessionActions.logOut();
  }
  //Renderk
  render() {
    var props = this.state.userData;
    //Returns
    return (
      <aside className="col-md-3 col-xs-10 col-sm-10 text-center">
        <div className="user-image c-center center-block">
          {/* <img src={global.mediaUri + props.companyLogo} alt="icon logo service" className=""/>
            */}
          <img src={global.mediaUri + 'img/profile.png'} alt="icon logo service" className="c-center center-block"/>
        </div>
        <div className="text-center name-user">
          <label>User</label>
        </div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-primary">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="" aria-expanded="true" aria-controls="collapseOne">
                  Reports
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
              </div>
            </div>
          </div>
          <div className="panel panel-primary">
            <div className="panel-heading active" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Audios
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <ul className="nav nav-pills nav-stacked">
                  <li >
                    <Link to="/test">Call Analytics</Link>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <a href="#">Call Indicators</a>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <a href="#">Comparison Tool</a>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <Link to="/agents">Agents</Link>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <a href="#">Customers</a>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <a href="#">Products and Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-primary">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Administrator
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <ul className="nav nav-pills nav-stacked ">
                  <li >
                    <a href="#">Create User</a>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <a href="#">Edit User</a>
                  </li>
                  <li role="separator" className="divider">
                    <div className="col-md-12 c-center center-block"><hr/></div>
                  </li>
                  <li >
                    <a href="#">Configuration</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingFour">
              <h4 className="panel-title">
                <a onClick={this._doLogout.bind(this)} className="log-out">Log Out</a>
              </h4>
            </div>
          </div>
        </div>

      </aside>
    );
  }

}

//export route of
export default MenuNav;
