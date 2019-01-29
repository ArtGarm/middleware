import { takeEvery , put } from 'redux-saga/effects'

function* workerEventSaga (){

    // console.log( store )

    try{
        console.log('sfgsdf')
        yield put( { type: "AND_ITS_DIE" } );

    } catch ( error ) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

export const apiCreate = [
    takeEvery( "SEND_SOME_EVENT" , workerEventSaga  )
]