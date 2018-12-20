import { takeEvery , put } from 'redux-saga/effects';
import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from './constants';
import { addUserSuccess } from './actions';


function* action(action) {
  yield put(addUserSuccess(action));
}

export default function* userSaga() {
  yield takeEvery(CREATE_USER, action);
}
