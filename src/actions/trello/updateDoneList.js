import {UPDATE_DONE_LIST} from './../const';

module.exports = function(doneList) {
  return { type: UPDATE_DONE_LIST, doneList };
};
