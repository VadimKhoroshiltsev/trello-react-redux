/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'seamless-immutable';
import * as actionNames from '../../actions/const';

const initialState = {};

module.exports = function (state = Immutable({
  id: undefined,
  name: undefined,
  currentListId: undefined,
  lists: []
}), action) {
  switch (action.type) {
    case actionNames.SET_CURRENT_BOARD:
    {
      return Immutable({
        ...state,
        ...action.board
      });
    }
    case actionNames.SET_CURRENT_LIST:
    {
      return Immutable({
        ...state,
        currentListId: action.list.id
      });
    }
    case actionNames.UPDATE_LIST:
    {
      return Immutable({
        ...state,
        lists: state.lists.map((currentList) => currentList.id === action.list.id ? action.list : currentList)
      })
    }
    case actionNames.UPDATE_DONE_LIST:
    {
      return Immutable({
        ...state,
        doneList: action.doneList
      })
    }
    default:
    {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
