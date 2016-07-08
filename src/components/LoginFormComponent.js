'use strict';
require('styles//LoginForm.sass');

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Trello = window.Trello;
const LocalStorage = window.localStorage;
const Location = window.location;

class LoginFormComponent extends React.Component {
  componentWillMount(){
    let tokenHashRegEx = /token/;
    Trello.setKey(this.props.user.appKey);
    if(LocalStorage.trello_token || tokenHashRegEx.test(Location.hash)){
      this.trelloAuthorize();
    }
  }

  render() {
    return (
      <div className="loginform-component">
        <RaisedButton label="Authorization with trello" primary={true} onClick={this.authorize.bind(this)} />
      </div>
    );
  }

  authorize(){
    this.trelloAuthorize();
  }

  trelloAuthorize(){
    Trello.authorize({
      name: "Trello Helper Extension",
      type: "redirect",
      expiration: "never",
      interactive: true,
      scope: {read: true, write: false},
      success: function(){
        this.props.actions.setToken(Trello.token());
      }.bind(this),
      error: function () {
        alert("Failed to authorize with Trello.");
      }
    });
  }
}

LoginFormComponent.displayName = 'LoginFormComponent';

// Uncomment properties you need
// LoginFormComponent.propTypes = {};
// LoginFormComponent.defaultProps = {};

export default LoginFormComponent;
