// rootSaga.js
import { all } from 'redux-saga/effects';
import shopSaga from './sagas';
import shopDetailsSaga from './saga//shopdetailssaga';

function* rootSaga() {
  yield all([
    shopSaga(),
    shopDetailsSaga(),
    // Add more sagas here if needed
  ]);
}

export default rootSaga;
