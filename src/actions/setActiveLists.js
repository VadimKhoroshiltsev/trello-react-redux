import {SET_ACTIVE_LISTS} from './const';

module.exports = function(lists) {
  return { type: SET_ACTIVE_LISTS, lists };
};
