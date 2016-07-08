'use strict';

import React from 'react';
import List from './ListComponent';
import { Tabs, Tab } from 'material-ui/Tabs';

require('styles//Board.sass');

class BoardComponent extends React.Component {
  render() {
    return (
      <div className="board-component">
        <h1>Board name: {this.props.board.name}</h1>
        <Tabs value={this.props.board.currentListId}>
          {this.props.board.lists.map(this.renderList.bind(this))}
        </Tabs>
      </div>
    );
  }

  renderList(list) {
    return (
      <Tab
        label={list.name}
        value={list.id}
        onClick={this.handleListItemClick.bind(this, list)}
      >
        <List list={list} actions={this.props.actions} onListItemClick={this.listItemClickHandler.bind(this)}></List>
      </Tab>
    );
  }

  handleListItemClick(list) {
    this.props.actions.setCurrentList(list);
  }

  listItemClickHandler(list, card) {
    this.previousBoardState = Object.assign({}, this.props.board);

    let newList = Object.assign({}, list);
    newList.cards = newList.cards.filter((currentCard) => currentCard.id !== card.id);
    this.props.actions.updateList(newList);

    let doneList = Object.assign({}, this.props.board.doneList);
    doneList.cards = doneList.cards.concat(card);
    this.props.actions.updateDoneList(doneList);

  }
}

BoardComponent.displayName = 'BoardComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default BoardComponent;
