/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */


/* Import react components */
import React from 'react';


/*className*/
class HeaderMain extends React.Component {
  constructor(props) {
    super(props)
  }


  //Render all app
  render(){

    //Return all html
    return(
      <header className="main-header">
        <div className="container main-container">
          <span className="animated bounceInRight text-header col-md-10 col-xs-12 col-sm-12 c-center center-block">
            WELCOME TO THE <strong>TRUESERVICE</strong>
          </span>
          <span className="animated bounceInLeft text-header col-md-9 col-xs-9 col-sm-12 c-center center-block">
            <strong>experience</strong>
          </span>

          <span className="animated bounceInRight text-header text-second col-md-9 col-xs-9 col-sm-12 c-center center-block">
            Meet your client
          </span>
        </div>

        <div className="clearfix"></div>
      </header>


    );
  }
}

//export unique className
export default HeaderMain;
