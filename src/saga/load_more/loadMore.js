import { takeEvery , put } from 'redux-saga/effects'

function* loadMore( action , state ) {
    console.log( action )
    try {
        yield put({ type: "LOAD_MORE_SUCCESS_END", more : action.response });    
    } catch (error) {
        yield put({ type: "LOAD_MORE_ERROR_END", error });
    }
}

function* loadMoreError( action , state ) {
    try {
        yield put({ type: "LOAD_MORE_ERROR_END", error : action.error });    
    } catch (error) {
        yield put({ type: "LOAD_MORE_ERROR_END", error });
    } 
}

export const loadMoreElements = [
    takeEvery( "LOAD_MORE_SUCCESS" , loadMore ) ,
    takeEvery( "LOAD_MORE_ERROR" , loadMoreError )
] 