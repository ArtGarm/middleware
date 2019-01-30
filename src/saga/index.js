import { all  } from "redux-saga/effects"
import  { callApi } from './call/call'
import { apiCreate } from './api/api'
import { callFilter } from './filter/filter'
import { loadMoreElements } from './load_more/loadMore'
import { takeAllElements } from './all/takeAllElements'
import { submitLoginForm } from './login/login'

export function* watcherSaga( ) {

    //console.log( action , state )
    yield all([
        ...takeAllElements,
        ...loadMoreElements,
        ...apiCreate,
        ...callApi,
        ...callFilter,
        ...submitLoginForm
    ])

}

