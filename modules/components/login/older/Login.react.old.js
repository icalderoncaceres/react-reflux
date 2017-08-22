/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

//import react components
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

  //render
  render() {

    var acc_one = Cookies.load('achccess-one');
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

        <div className="container">
          <div className="col-sm-8 col-md-5 center-block c-center container-login">
            <div className="thumbnail center-block c-center">
              <form className="col-md-8 center-block c-center text-center" onSubmit={this._handleSubmit}>
                <div className="form-group">
                  <h3>CLIENT</h3>
                </div>
                <div className="form-group">
                  <img src="src/img/user.png" alt="TrueXperience"/>
                </div>

                <div className="form-group">
                  {_alert}
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <input type="text" className="form-control" placeholder="Email" name="email" onChange={this._handleInputChange.bind(this)}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="pass" onChange={this._handleInputChange.bind(this)}/>
                </div>
                <div className="form-group">
                  <a href="">Did you forget your password?</a>
                </div>
                <button type="submit" className="btn btn-info btn-lg">Login</button>
              </form>
            </div>

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

//
export default Login;
