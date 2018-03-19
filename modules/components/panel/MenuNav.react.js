/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
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
    this.state={
      options:[
        {id:0,title:'react-addons-css-transition-group',url:'/',iconClass:'fa fa-user',options:[]},
        {id:1,title:'react-addons-shallow-compare',url:'/',iconClass:'fa fa-user',options:[]},
        {id:2,title:'react-addons-update',url:'/',iconClass:'fa fa-user',options:[]},
        {id:3,title:'react-bootstrap-table',url:'/',iconClass:'fa fa-user',options:[]},
        {id:4,title:'react-cookie',url:'/',iconClass:'fa fa-user',options:[]},
        {id:5,title:'react-dates',url:'/react-dates',iconClass:'far fa-calendar-alt',options:[{id:0,title:'CalendarDay',url:'calendarDay'}]},
        {id:6,title:'react-dom',url:'/',iconClass:'fa fa-user',options:[]},
        {id:7,title:'react-dom-factories',url:'/',iconClass:'fa fa-user',options:[]},
        {id:8,title:'react-input-autosize',url:'/',iconClass:'fa fa-user',options:[]},
        {id:9,title:'react-modal',url:'/',iconClass:'fa fa-user',options:[]},
        {id:10,title:'react-moment-prototypes',iconClass:'fa fa-user',url:'/',options:[]},
        {id:11,title:'react-portal',url:'/',iconClass:'fa fa-user',options:[]},
        {id:12,title:'react-router',url:'/',iconClass:'fa fa-user',options:[]},
        {id:13,title:'react-router-dom',url:'/',iconClass:'fa fa-user',options:[]},
        {id:14,title:'react-select',url:'/',iconClass:'fa fa-user',options:[]}
      ]
    }
    this.stores = [SessionStore];    
  }
  //Renderk
  render() {
    let options=this.state.options.map((data,i)=>{
        let suboptions="";
        if(data.options.length>0){
          suboptions=data.options.map((data2,j)=>{
            return(
              <li key={"submenu-" + data2.id}>
                <Link to={data.url + data2.url}>
                    <i className={data.iconClass} aria-hidden="true"></i>
                    &nbsp;{data2.title}
                </Link>
              </li>
            );
          });
        }
        return(
          <li className="treeview" key={"menu-" + data.id}>
             <Link to={data.url}>
               <i className={data.iconClass}></i>
               <span> {data.title}</span>
               <span className="pull-right-container">
                 <i className="fa fa-angle-left pull-right"></i>
               </span>
             </Link>
             <ul className="treeview-menu">
                {suboptions}
              </ul>
            </li>
        );
    });
    //Returns
    return (
      <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
          {/* <!-- Sidebar user panel --> */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="/src/img/fotoivan.jpg" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Iván Calderon</p>
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
            {options}

            <li className="header">More</li>
            <li>
              <a href="#" >
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
