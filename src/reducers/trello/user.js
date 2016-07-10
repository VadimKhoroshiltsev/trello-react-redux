/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

const APP_KEY = 'd7d9c4e602d6063cd3eee7d5203bd673';

import Immutable from 'seamless-immutable';
import * as actionNames from '../../actions/const';

module.exports = function(state = Immutable({
  id: undefined,
  fullName: '',
  token: undefined,
  appKey: APP_KEY
}), action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case actionNames.SET_TOKEN: {
      return Immutable({
        ...state,
        token: action.token
      })
    };
    case actionNames.SET_USER: {
      return Immutable({
        ...state,
        id: action.user.id,
        fullName: action.user.fullName
      })
    };
    case actionNames.LOGOUT: {
      return Immutable({
        ...state,
        id: undefined,
        fullName: '',
        token: undefined
      })
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};
