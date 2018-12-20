import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from './constants';

export const addUser = () => ({
  type: CREATE_USER
})

export const addUserSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  data,
})

export const addUserFail = (error) => ({
  type: CREATE_USER_FAIL,
  error,
})
