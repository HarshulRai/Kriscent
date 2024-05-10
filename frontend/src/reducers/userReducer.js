import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../constants/actionTypes';



const initialState = {

  user: null,

  error: ''

};



const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_USER_SUCCESS:

      return {

        ...state,

        user: action.payload,

        error: ''

      };

    case FETCH_USER_FAILURE:

      return {

        ...state,

        user: null,

        error: action.payload

      };

    default:

      return state;

  }

};



export default userReducer;
