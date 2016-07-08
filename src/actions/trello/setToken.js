import {SET_TOKEN} from '../const';

module.exports = function(token) {
  return { type: SET_TOKEN, token };
};
