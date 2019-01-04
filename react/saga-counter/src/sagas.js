import { put, takeEvery, all } from 'redux-saga/effects'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* hellowSaga() {
  console.log('Hello Sagas')
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementASYNC)
}

export function* incrementASYNC() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}


export default function* rootSaga() {
  yield all([
    hellowSaga(),
    watchIncrementAsync()
  ])
}
