import { takeEvery , put } from 'redux-saga/effects'

function* loginSuccess( action , state ) {
    console.log( action )

    let letItBeResponse = {
        name : action.payload.name,
        role : "Administrator"
    }

    try {
        
        yield put({ type: "SUBMIT_LOGIN_FORM_SUCCESS_END", more : letItBeResponse });  
        yield put({ 
            type: "API_CALL" , 
            payload: { foo : 'bar' },
            fetch : {
                url : 'http://api.icndb.com/jokes/random/10',
                method : 'POST',
                headers : { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
            }             
        })

    } catch (error) {
        yield put({ type: "SUBMIT_LOGIN_FORM_ERROR_END", error });
    }
}

function* loginError( action , state ) {
    try {
        yield put({ type: "SUBMIT_LOGIN_FORM_ERROR_END", error : action.error });    
    } catch (error) {
        yield put({ type: "SUBMIT_LOGIN_FORM_ERROR_END", error });
    } 
}

export const submitLoginForm = [
    takeEvery( "SUBMIT_LOGIN_FORM_SUCCESS" , loginSuccess ) ,
    takeEvery( "SUBMIT_LOGIN_FORM_ERROR" , loginError )
] 