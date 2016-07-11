import {SET_ACTIVE_BOARD_ID} from './const';

module.exports = function(boardId) {
  return { type: SET_ACTIVE_BOARD_ID, boardId };
};
