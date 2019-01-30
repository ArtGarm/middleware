import { takeEvery , put } from 'redux-saga/effects'


function* workerSagaSuccess( action ) {
    try {
        yield put({ type: "API_CALL_SUCCESS_END", joke : action.response });
    
    } catch (error) {
        yield put({ type: "API_CALL_ERROR_END", error });
    }
}

function* workerSagaError( action ) {
    try {
        yield put({ type: "API_CALL_ERROR_END", error : action.error , payload : action.payload });
    
    } catch (error) {
        yield put({ type: "API_CALL_ERROR_END", error , payload : action.payload });
    }
}



export const callApi = [
    takeEvery( "API_CALL_SUCCESS" , workerSagaSuccess ) ,
    takeEvery( "API_CALL_ERROR" , workerSagaError )
]