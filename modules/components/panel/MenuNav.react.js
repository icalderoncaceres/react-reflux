/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

import React from 'react';
import Reflux from 'reflux';
import {Route, Link, Redirect} from 'react-router-dom';

//Import stores and actions
import SessionStore from "../../stores/user/SessionStore";
import SessionActions from "../../actions/user/SessionActions";

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
      <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
          {/* <!-- Sidebar user panel --> */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="http://127.0.0.1:3200/src/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              {/* <a href="#">
                <i className="fa fa-circle text-success"></i>
                Online</a> */}
            </div>
          </div>
          {/* <!-- search form --> */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
          {/* <!-- /.search form --> */}
          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul className="sidebar-menu">
            <li>
              <Link to="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="header">REPORTS</li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-adn"></i>
                <span>Administrator</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <Link to="/administrator/user">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  User
                  </Link>
                </li>
                {/* <li>
                  <Link to="/administrator/edituser">
                  <i className="fa fa-user"></i>
                  Edit User
                  </Link>
                </li> */}
                <li>
                  <Link to="/administrator/configuration">
                  <i className="fa fa-cogs"></i>
                  Configuration
                  </Link>
                </li>
              </ul>
            </li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-headphones"></i>
                <span>Audios</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <Link to="/audio/callanalytics">
                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                    Call Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/audio/callindicators">
                    <i className="fa fa-pie-chart" aria-hidden="true"></i>
                    Call Indicators
                  </Link>
                </li>
                <li>
                  <Link to="/audio/comparision-tool">
                    <i className="fa fa-wrench" aria-hidden="true"></i>
                    Comparison Tool
                  </Link>
                </li>
                <li>
                  <Link to="/audio/agents">
                    <i className="fa fa-user-md" aria-hidden="true"></i>
                    Agents
                  </Link>
                </li>
                <li>
                  <Link to="/audio/customers">
                    <i className="fa fa-circle-o"></i>
                    Customers
                  </Link>
                </li>
                <li>
                  <Link to="/audio/productservices">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    Products and Services
                  </Link>
                </li>

              </ul>
            </li>

            <li className="header">More</li>
            <li>
              <a href="#" onClick={this._doLogout.bind(this)}>
                <i className="fa fa-sign-out text-red"></i>
                <span >Sign Out</span>
              </a>
            </li>

          </ul>
        </section>
        {/* <!-- /.sidebar --> */}
      </aside>
    );
  }

}

//export route of
export default MenuNav;
