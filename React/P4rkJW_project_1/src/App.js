import React, { Component } from 'react';
import './css/email_auth.css';
import reactDOM from 'react-dom'


class App extends Component{
    static defaultProps = {
        title : "P4rkJW Email Auth"
    };

    state = {
        content : "Input Your ID/PW",
        display : 'none'
    };

    AuthEmail(){
        this.setState({
            content: "Auth Your E-mail",
            display : 'block'
        });
    }

  render()
  {
    return (
        <div className="email">
        <form className="login-form">
          <p className="login-text">
              <h2>{this.props.title}</h2>
            <h6>{this.state.content}</h6>
          </p>
          <input type="email" className="login-username" autoFocus="true" required="true" placeholder="Email"/>
          <input type="password" className="login-password" required="true" placeholder="Password"/>
            <div style= {{display: `${ this.state.display }`}}><input type="text"  className="login-password" placeholder="Input Your Auth Code"/></div>
          <input type="submit" name="Login" value="Login" onClick={this.AuthEmail.bind(this)} className="login-submit"/>
        </form>
        </div>
    );
  }
}


export default App;
