'use strict';

import React from 'react';
import {List, ListItem} from 'material-ui/List';

require('styles//List.sass');

class ListComponent extends React.Component {
  render() {
    return (
      <List>
        {this.props.list.cards.map(this.renderCard.bind(this))}
      </List>
    );
  }

  renderCard(card) {
    return <ListItem primaryText={card.name} secondaryText={card.desc} onClick={this.handleListItemClick.bind(this, card)}/>
  }

  handleListItemClick(card) {
    this.props.onListItemClick(this.props.list, card);
    //alert(card.name + ' from ' + this.props.list.name + " list");
  }
}

ListComponent.displayName = 'ListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
