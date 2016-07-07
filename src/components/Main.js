require('normalize-css');
require('styles/App.sass');

import React from 'react';
import Board from './BoardComponent';
import * as trello from '../data';
import { List, ListItem } from 'material-ui/List';

//const trelloKey = '145ab72d8820e386341eda162214b61a';

class AppComponent extends React.Component {
  componentWillMount() {
    let firstBoard = trello.getCurrentBoard();

    this.props.actions.setCurrentBoard(firstBoard);
    this.props.actions.setCurrentList(firstBoard.lists[0].id);
  }

  render() {
    return (
      <div className="app">
        <Board actions={this.props.actions} board={this.props.board} list={this.props.list} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
