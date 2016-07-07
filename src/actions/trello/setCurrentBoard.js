import {SET_CURRENT_BOARD} from './../const';

module.exports = function(board) {
  return { type: SET_CURRENT_BOARD, board };
};
