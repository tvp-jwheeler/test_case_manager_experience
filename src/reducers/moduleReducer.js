import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moduleReducer(state = initialState.modules, action) {
  switch(action.type) {
    case types.LOAD_MODULES_SUCCESS:
      return action.modules;
    default:
      return state;
  }
}
