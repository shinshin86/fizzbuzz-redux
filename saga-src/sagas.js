import { take, fork, select } from 'redux-saga/effects';
import { INCREMENT, increment } from './actions';

function* handleIncrement() {
  while(true) {
    yield take(INCREMENT);
    const state = yield select();
    if(state.counter === 100)
      console.log(state.fzlist.join('\n'));
  }
}

export default function* rootSaga() {
  yield fork(handleIncrement);
}
