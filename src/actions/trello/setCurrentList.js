import {SET_CURRENT_LIST} from './../const';

module.exports = function(list) {
  return { type: SET_CURRENT_LIST, list };
};
