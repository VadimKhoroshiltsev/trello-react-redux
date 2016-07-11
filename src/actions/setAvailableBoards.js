import {SET_AVAILABLE_BOARDS} from './const';

module.exports = function(boards) {
  return { type: SET_AVAILABLE_BOARDS, boards };
};
