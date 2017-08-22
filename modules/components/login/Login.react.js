/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */
import React from 'react';
import Reflux from 'reflux';
import Cookies from 'react-cookie';
import Is from 'is_js';

//Import info from react pages
import SessionActions from '../../actions/user/SessionActions';
import SessionStore from '../../stores/user/SessionStore';

//Import manually
import AlertSimple from '../recurrent/AlertSimple.react';

//Class
class Login extends Reflux.Component {
  //Constructor
  constructor(props) {
    //Call parent
    super(props);

    this.state = {
      email: '',
      pass: ''
    }
    //Stores
    this.stores = [SessionStore];

    //Handle events
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  //componentDidMount
  componentDidMount() {
    // setTimeout(() => {
    //   $('#main_overlay').fadeOut();
    //   console.log('shingate');
    // }, 1000);
  }

  //Input change input
  _handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  //Handle Submit
  _handleSubmit(e) {
    //prevent Submit form
    e.preventDefault();

    //Verify pass and userData
    if (this.state.email != '' && this.state.pass != '') {
      //get info to login
      SessionActions.logIn(this.state.email, this.state.pass, this.props.history);
    } else {
      //Modify state
      this.setState({code: 999});
    }
  }

  //Component after mount
  componentDidMount() {
    //Cookies
    var acc_one = Cookies.load('access-one');
    var acc_two = Cookies.load('access-two');

    if (Is.not.undefined(acc_one) && Is.not.undefined(acc_two)) {
      //call login again
      SessionActions.logIn(acc_one, acc_two, this.props.history);
    }

  }

  //Render
  render() {

    var acc_one = Cookies.load('access-one');
    var acc_two = Cookies.load('access-two');
    if (Is.undefined(acc_one) && Is.undefined(acc_two)) {

      var info_state = this.state.code;

      var _alert;

      switch (this.state.code) {
        case 999: //When fields aren't exists
          _alert = (<AlertSimple type="danger" text="User and Password are required."/>);
          break;
        case 2: //When password is incorrect
          _alert = (<AlertSimple type="danger" text="Incorrect User or Password."/>);
          break;
        case 3: //Wher server Fails
          _alert = (<AlertSimple type="danger" text="Someting went wrong, please try again."/>);
          break;
        case 4: //When user and pass aren't exists
          _alert = (<AlertSimple type="danger" text="User o email doesn't exists"/>);
          break;
        default:

      }

      return (
        <div className="login-box">
          <div className="login-logo">
            <a>
              <img src="src/img/logo_service.png"/>
            </a>
          </div>

          <div className="login-box-body container-login">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={this._handleSubmit}>
              <div className="form-group has-feedback thumbnail">
                <img src="src/img/user.png" alt="TrueXperience"/>
              </div>
              <div className="form-group has-feedback">
                <input type="text" className="form-control" placeholder="Email" name="email" onChange={this._handleInputChange.bind(this)}/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" name="pass" onChange={this._handleInputChange.bind(this)}/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                {_alert}
              </div>
              <div className="row">
                {/* <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox"/>
                      Remember Me
                    </label>
                  </div>
                </div> */}

                <div className="col-xs-12">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Log In</button>
                </div>

              </div>
            </form>

            <a href="#">I forgot my password</a><br/>

          </div>
        </div>
      );
    } else {
      return (
        <span></span>
      );
    }
  }

}
//Export default
export default Login;
