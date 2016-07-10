require('normalize-css');
require('styles/App.sass');

import React from 'react';
import Board from './BoardComponent';
import UserPanel from './UserPanelComponent';
import LoginForm from './LoginFormComponent';
import SettingsPage from './SettingsPageComponent';
import * as trello from '../data';
import { List, ListItem } from 'material-ui/List';

class AppComponent extends React.Component {
  componentWillMount() {
    let firstBoard = trello.getCurrentBoard();
    this.props.actions.setCurrentBoard(firstBoard);
  }

  render() {
    return this.props.user.token ? this.renderBoard() : this.renderLoginForm();
  }

  renderBoard(){
    return (
      <div className="app">
        <UserPanel actions={this.props.actions} user={this.props.user} />
        <Board actions={this.props.actions} board={this.props.board} list={this.props.list} />
        <SettingsPage actions={this.props.actions} settings={this.props.settings} />
      </div>
    );
  }

  renderLoginForm(){
    return (
      <div className="app">
        <LoginForm actions={this.props.actions} user={this.props.user}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
