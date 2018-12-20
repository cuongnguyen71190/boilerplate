import { fromJS } from 'immutable';
import { CREATE_USER, CREATE_USER_SUCCESS } from './constants';

export const initialState = fromJS({
	value: ''
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return state.set('user', 111);
    default:
      return state;
  }
}

export default userReducer;
