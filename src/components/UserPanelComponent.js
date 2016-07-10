'use strict';

import * as User from '../data/user';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

require('styles//UserPanel.sass');

class UserPanelComponent extends React.Component {
  componentWillMount(){
    if(!this.props.user.id) {
        User.getUser().then(user=>{ this.props.actions.setUser(user)});
    }
  }

  render() {
    return (
      <div className="userpanel-component">
        Welcome {this.props.user.fullName}
        <RaisedButton onClick={this.logoutHandler.bind(this)}>Logout</RaisedButton>
      </div>
    );
  }

  logoutHandler() {
    User.logout();
    this.props.actions.logout();
  }
}

UserPanelComponent.displayName = 'UserPanelComponent';

// Uncomment properties you need
// UserPanelComponent.propTypes = {};
// UserPanelComponent.defaultProps = {};

export default UserPanelComponent;
