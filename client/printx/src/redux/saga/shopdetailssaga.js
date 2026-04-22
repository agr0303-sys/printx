// shopDetailsSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_SHOP_DETAILS_REQUEST,
  fetchShopDetailsSuccess,
  fetchShopDetailsFailure,
} from '../actions/shopdetailsaction';
import API_BASE_URL from '../../apiConfig';

// function* fetchShopDetails(action) {
//   try {
//     console.log("saga in action by action ",action.payload)
    
//     // const response = yield fetch(`${API_BASE_URL}printx/api/v1/menu/getmenufromshopid`, {
//       const response = yield call(fetch, `${API_BASE_URL}printx/api/v1/menu/getmenufromshopid`, {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         shopId: "65db725dd8c29be3d2442a4a",
//       }),
//     });
//     console.log("dfd ",response)
//     if (!response.ok) {
//       // Handle non-successful response (e.g., show an error message)
//       yield put(fetchShopDetailsFailure(new Error(`HTTP error! Status: ${response.status}`)));
//       return;
//     }

//     const data = yield response.json();

//     if (data.success) {
//       yield put(fetchShopDetailsSuccess(data.menu));
//     } else {
//       yield put(fetchShopDetailsFailure(new Error('Failed to fetch shop details')));
//     }
//   } catch (error) {
//     yield put(fetchShopDetailsFailure(error));
//   }
// }

function* fetchShopDetails(action) {
  try {
    console.log("1. Saga: Inside fetchShopDetails, payload:", action.payload);
    
    const apiUrl = `${API_BASE_URL}printx/api/v1/menu/getmenufromshopid`;
    const requestBody = {
      shopId: action.payload, // Update with action.payload if needed
    };

    console.log("2. Saga: API URL:", apiUrl);
    console.log("3. Saga: Request Body:", requestBody);

    const response = yield call(fetch, apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log("4. Saga: Fetch Response:", response);

    if (!response.ok) {
      console.error(`5. Saga: HTTP error! Status: ${response.status}`);
      yield put(fetchShopDetailsFailure(new Error(`HTTP error! Status: ${response.status}`)));
      return;
    }

    const data = yield response.json();

    console.log("6. Saga: Response Data:", data.menu);

    if (data.success) {
      yield put(fetchShopDetailsSuccess(data.menu));
    } else {
      console.error("7. Saga: Failed to fetch shop details");
      yield put(fetchShopDetailsFailure(new Error('Failed to fetch shop details')));
    }
  } catch (error) {
    console.error("8. Saga: Error in fetchShopDetails", error);
    yield put(fetchShopDetailsFailure(error));
  }
}


function* shopDetailsSaga() {
  yield takeEvery(FETCH_SHOP_DETAILS_REQUEST, fetchShopDetails);
}

export default shopDetailsSaga;
