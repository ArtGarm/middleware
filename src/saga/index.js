import { all } from "redux-saga/effects"
import  { callApi } from './call/call'
import { apiCreate } from './api/api'
import { callFilter } from './filter/filter'

export function* watcherSaga() {

    yield all([
        ...apiCreate,
        ...callApi,
        ...callFilter
    ])

}


