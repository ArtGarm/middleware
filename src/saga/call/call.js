import { takeEvery , put , call } from 'redux-saga/effects'

function fetchDog () {
    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
}

function* workerSaga( action ) {
    console.log( 'Call' )
    try {
        const response = yield call(fetchDog);
        const dog = response;
        yield put({ type: "API_CALL_SUCCESS", dog });
    
    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

export const callApi = [
    takeEvery( "API_CALL_REQUEST" , workerSaga )
]