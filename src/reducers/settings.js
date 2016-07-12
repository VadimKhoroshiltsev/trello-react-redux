/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'seamless-immutable';
import * as actionNames from '../actions/const';
const initialState = {};

module.exports = function(state = new Immutable({
  opened: false,
  boards: [],
  activeBoard: undefined,
  activeLists: [],
  todoListId: undefined
}), action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case actionNames.SHOW_SETTINGS_PAGE: {
      return new Immutable({
        ...state,
        opened: true
      });
    }
    case actionNames.HIDE_SETTINGS_PAGE: {
      return new Immutable({
        ...state,
        opened: false
      });
    }
    case actionNames.SET_AVAILABLE_BOARDS: {
      return new Immutable({
        ...state,
        boards: action.boards
      })
    }
    case actionNames.SET_ACTIVE_BOARD: {
      return new Immutable({
        ...state,
        activeBoard: action.board
      })
    }
    case actionNames.SET_ACTIVE_LISTS: {
      return new Immutable({
        ...state,
        activeLists: action.lists
      })
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};
