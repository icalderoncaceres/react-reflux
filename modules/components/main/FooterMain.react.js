/**
 * Copyright (c) 2017, ivandario2010@gmail.com
 *
 */


//Impotr react components
import React from 'react';

//class
class FooterMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer-ts col-md-12" >
				    <div className="col-md-12" >
				      <div className="col-md-6">
				        <div className="footer-list">
				          <h4 >Contact Us</h4>
				          <ul >
				            <li><strong>Address:</strong> Carrera 14 No. 94A - 24 Bogotá, Colombia</li>
				            <li><strong>Phone Number:</strong> (+57 1) 616 95 00 - 623 31 85</li>
				            <li><strong>Email:</strong> info@truexperience.co</li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-md-6 text-right">
				          <a href="/">
				            <img src="src/img/logo_principal.png" alt="TrueXperience"/>
				          </a>

				      </div>
				    </div>
				    <div className="col-md-12" >
				    	<hr />
				    </div>
				    <div className="copyright-section">
				      <div className="col-md-12" >
				        <div className="col-md-6 black-color">
				            <strong>Todos los derechos reservados <span id="year">2017 ®</span></strong>
				        </div>
				        <div className="col-md-6 text-right black-color">
				            <span className="version">Version 2.0</span>
				        </div>
				      </div>
				    </div>
				</footer>
    );
  }
}

//Export class
export default FooterMain;
