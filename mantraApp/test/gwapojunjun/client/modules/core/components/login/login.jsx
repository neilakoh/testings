import React from 'react';
import { User } from './validation.js';

class Login extends React.Component {

  render() {
    return (
      <div className='top-space-xsm-5'>
        <div className="login-wrapper">
          <ul className="nav nav-tabs">
            <li className="active"><a data-toggle="tab" href="#login"><span className="icon"><i className="fa fa-unlock" aria-hidden="true"></i>&nbsp;<b>Login</b></span></a></li>
            <li><a data-toggle="tab" href="#register"><span className="icon"><i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;<b>Register</b></span></a></li>
          </ul>

          <div className="tab-content">

              <div id="login" className="tab-pane fade in active">
                <div className="form-group">
                  <label for="loginUsername">Username</label>
                  <input type="text" className="form-control" id="validateUsername" onChange={this.unameValidate.bind(this)} ref="loginUsername" name="loginUsername" placeholder="Enter Username"/>
                  <div id="usernameError"></div>
                </div>
                <div className="form-group">
                  <label for="loginPassword">Password</label>
                  <input type="password" className="form-control" id="validatePassword" onChange={this.upassValidate.bind(this)} ref="loginPassword" name="loginPassword" placeholder="Enter Password"/>
                  <div id="passwordError"></div>
                </div>
                <button type="button" onClick={this.login.bind(this)} className="btn btn-info register">LOGIN</button>
              </div>

              <div id="register" className="tab-pane fade">
                <div className="form-group">
                  <label for="regUsername">Username</label>
                  <input type="text" className="form-control" ref="regUsername" name="regUsername" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                  <label for="regEmail">Email</label>
                  <input type="email" className="form-control" ref="regEmail" name="regEmail" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                  <label for="regPassword">Password</label>
                  <input type="password" className="form-control" ref="regPassword" name="regPassword" placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                  <label for="regConfPassword">Confirm Password</label>
                  <input type="password" className="form-control" ref="regConfPassword" name="regConfPassword" placeholder="Enter Password"/>
                </div>
                <button type="button" onClick={this.register.bind(this)} className="btn btn-info register">REGISTER</button>
              </div>

          </div>
        </div>
      </div>
    );
  }

  unameValidate() {
    const {loginUsername} = this.refs;
    var users = new User();
    users.set('username', loginUsername.value);
    if (users.validateUsername() !== true) {
      document.getElementById('validateUsername').style.border = '1px solid red';
      document.getElementById('usernameError').style.color = 'red';
      document.getElementById('usernameError').innerHTML = users.validateUsername();
    } else {
      document.getElementById('validateUsername').style.border = '1px solid green';
      document.getElementById('usernameError').style.color = 'green';
      document.getElementById('usernameError').innerHTML = 'Good';
    }
  }

  upassValidate() {
    const {loginPassword} = this.refs;
    var users = new User();
    users.set('password', loginPassword.value);
    if (users.validatePassword() !== true) {
      document.getElementById('validatePassword').style.border = '1px solid red';
      document.getElementById('passwordError').style.color = 'red';
      document.getElementById('passwordError').innerHTML = users.validatePassword();
    } else {
      document.getElementById('validatePassword').style.border = '1px solid green';
      document.getElementById('passwordError').style.color = 'green';
      document.getElementById('passwordError').innerHTML = 'Good';
    }
  }

  login() {
    const {login} = this.props;
    const {loginUsername, loginPassword} = this.refs;
    var users = new User();
    users.set('username', loginUsername.value);
    users.set('password', loginPassword.value);
    if (users.validateUsername() === true || users.validatePassword() === true) {
      login(loginUsername.value, loginPassword.value);
    } else {
      document.getElementById('validateUsername').style.border = '1px solid red';
      document.getElementById('usernameError').style.color = 'red';
      document.getElementById('usernameError').innerHTML = 'Username should not be empty';
      document.getElementById('validatePassword').style.border = '1px solid red';
      document.getElementById('passwordError').style.color = 'red';
      document.getElementById('passwordError').innerHTML = 'Password should not be empty';
    }
  }

  register() {
    const {register} = this.props;
    const {regUsername, regEmail, regPassword, regConfPassword} = this.refs;
    register(regUsername.value, regEmail.value, regPassword.value, regConfPassword.value);
  }
}

export default Login;
