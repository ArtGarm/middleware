import { takeEvery , put , call } from 'redux-saga/effects'

function fetchDog ( headers , payload ) {

    let bodyData = '';
    Object.keys(payload).forEach( (item , index ) =>{
        if ( index === 0 ) {
            bodyData += item + '=' + payload[item]
        } else {
            bodyData += "&" + item + '=' + payload[item]
        }        
    })

    let url = headers.url
   
    if ( headers.method === "GET" ){
        url += '?' + bodyData;
        bodyData = '';
    }

    console.log( bodyData )

    return fetch( 
        url,  
        { 
            headers : !!headers.headers ? headers.headers : '',
            method: !!headers.method ? headers.method : "POST" ,
            body : bodyData
        }
    ).then( response => response.json() )
    .then( response => response.value )
}

function  takeOnlyWithUrl ( action ) {
    if( !!action.fetch ){
        return true; 
    } else {
        return false
    }
}

function* actionListening( action , state ) {

    let updateParams = { ...action }
    delete updateParams.fetch
    delete updateParams.type

    try {
        yield put({ type: `${action.type}_REQUEST` , ...updateParams  });
        const response = yield call(fetchDog , action.fetch , action.payload );     
        yield put({ type: `${action.type}_SUCCESS`, ...updateParams  , response });

    } catch (error) {
        yield put({  type: `${action.type}_ERROR`, ...updateParams , error });
    }

}

export const takeAllElements = [
    takeEvery( takeOnlyWithUrl , actionListening )
] 