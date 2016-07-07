/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import Immutable from 'seamless-immutable';
import * as actionNames from '../../actions/const';

const initialState = {};

module.exports = function(state = Immutable({
  id: undefined,
  name: undefined,
  cards: []
}), action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);z
  switch(action.type) {
    case actionNames.SET_CURRENT_LIST: {
      return Immutable({
        ...state,
        ...action.list
      });
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
