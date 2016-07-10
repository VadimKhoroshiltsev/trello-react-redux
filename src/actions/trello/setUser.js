import {SET_USER} from './../const';

module.exports = function(user) {
  return { type: SET_USER, user };
};
