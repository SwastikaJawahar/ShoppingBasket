import {take, put, call, fork} from 'redux-saga/effects';
import {userActions} from '../features/UserApi/UserSlice';
import {APIHelper} from '../helpers';

const {request, success, failure, logout} = userActions;

function callPostRequest(url, data, header) {
  return APIHelper.post(url, data, header);
}
function callDeleteRequest(url, header) {
  return APIHelper.post(url, header);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;
      const {url, data, header, requestType} = payload;
      if (requestType === 'Logout') {
        response = yield call(callDeleteRequest, url, header);
        yield put(logout());
      } else {
        response = yield call(callPostRequest, url, data);
        yield put(success(response));
      }
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
