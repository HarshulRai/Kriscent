import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../constants/actionTypes';



export const fetchUserSuccess = (user) => {

  return {

    type: FETCH_USER_SUCCESS,

    payload: user

  };

};



export const fetchUserFailure = (error) => {

  return {

    type: FETCH_USER_FAILURE,

    payload: error

  };

};
