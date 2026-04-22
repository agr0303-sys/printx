import { takeEvery, put } from "redux-saga/effects";
import { SHOP_LIST, SET_SHOP_LIST, SET_LOADING } from "./constant.js";
import API_BASE_URL from "../apiConfig.js";
function* getShops() {
  yield put({ type: SET_LOADING, loading: true });
  try {
    let data = yield fetch(
      `${API_BASE_URL}printx/api/v1/fetchdata/sendshops`
    );
    data = yield data.json();
    console.warn("action is called", data);
    data = data.printShops;
    yield put({ type: SET_SHOP_LIST, data });
  } catch (error) {
    // Handle error if any
    console.error("Error fetching shops:", error);
  }
  yield put({ type: SET_LOADING, loading: false });
}

function* shopSaga() {
  yield takeEvery(SHOP_LIST, getShops);
}

export default shopSaga;
