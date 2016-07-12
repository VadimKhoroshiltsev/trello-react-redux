/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, board, user, settings} = this.props;
    return (
      <MuiThemeProvider>
        <Main
          actions={actions}
          board={board}
          user={user}
          settings={settings}/>
      </MuiThemeProvider>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  board: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    board: state.board,
    user: state.user,
    settings: state.settings
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    authorization: require('../actions/trello/authorization.js'),
    setCurrentBoard: require('../actions/trello/setCurrentBoard.js'),
    setCurrentList: require('../actions/trello/setCurrentList.js'),
    updateList: require('../actions/trello/updateList.js'),
    updateDoneList: require('../actions/trello/updateDoneList.js'),
    setToken: require('../actions/trello/setToken.js'),
    setUser: require('../actions/trello/setUser.js'),
    logout: require('../actions/trello/logout.js'),
    showSettingsPage: require('../actions/showSettingsPage.js'),
    hideSettingsPage: require('../actions/hideSettingsPage.js'),
    setAvailableBoards: require('../actions/setAvailableBoards.js'),
    setActiveBoard: require('../actions/setActiveBoard.js'),
    setActiveLists: require('../actions/setActiveLists.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
