import * as types from './actionTypes';
import moduleApi from '../api/modulesMockAPI';

export function loadModulesSuccess(modules) {
  return {type: types.LOAD_MODULES_SUCCESS, modules};
}

export function loadModules() {
  return function (dispatch) {
    return moduleApi.getAllModules().then(modules => {
      dispatch(loadModulesSuccess(modules));
    }).catch(error => {
      throw(error);
    });
  };
}
