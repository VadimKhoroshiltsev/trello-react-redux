'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

require('styles//UserPanel.sass');

class UserPanelComponent extends React.Component {
  render() {
    return (
      <div className="userpanel-component">
        <RaisedButton>Login</RaisedButton>
        <RaisedButton>Logout</RaisedButton>
      </div>
    );
  }
}

UserPanelComponent.displayName = 'UserPanelComponent';

// Uncomment properties you need
// UserPanelComponent.propTypes = {};
// UserPanelComponent.defaultProps = {};

export default UserPanelComponent;
