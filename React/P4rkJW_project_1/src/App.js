import React, { Component } from 'react';
import './css/email_auth.css';
import reactDOM from 'react-dom'

class App extends Component{
  render()
  {
    return (
        <div className="email">
        <form className="login-form">
          <p className="login-text">
            <h1>Hello~</h1>
          </p>
          <input type="email" className="login-username" autoFocus="true" required="true" placeholder="Email"/>
          <input type="password" className="login-password" required="true" placeholder="Password"/>
          <input type="submit" name="Login" value="Login" className="login-submit"/>
        </form>
        </div>
    );
  }
}

function createMarkup(){
    return {__html : 'a'};
}

function MyComponent(){
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}

export default App;
