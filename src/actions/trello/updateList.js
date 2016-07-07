import {UPDATE_LIST} from './../const';

module.exports = function(list) {
  return { type: UPDATE_LIST, list };
};
