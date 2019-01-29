import { takeEvery , put , call } from 'redux-saga/effects'

function filterStoreElement( state ){
    console.log( state )
}

function* filterElements( action , state ) {
    console.log( state )
    try {
        const response = yield call(filterStoreElement);
        const dog = response;
        yield put({ type: "API_CALL_SUCCESS", dog });
    
    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

export const callFilter = [
    takeEvery( "FILTER_ELEMENTS_NOT_NOW" , filterElements )
] 