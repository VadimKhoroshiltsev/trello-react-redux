import {SET_ACTIVE_BOARD} from './const';

module.exports = function(board) {
  return { type: SET_ACTIVE_BOARD, board };
};
