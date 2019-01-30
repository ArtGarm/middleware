const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS_END = "API_CALL_SUCCESS_END";
const API_CALL_ERROR_END = "API_CALL_ERROR_END";

const LOAD_MORE_REQUEST = "LOAD_MORE_REQUEST"
const LOAD_MORE_SUCCESS_END = "LOAD_MORE_SUCCESS_END"
const LOAD_MORE_ERROR_END = "LOAD_MORE_ERROR_END"

const SUBMIT_LOGIN_FORM_REQUEST = "SUBMIT_LOGIN_FORM_REQUEST"
const SUBMIT_LOGIN_FORM_SUCCESS_END = "SUBMIT_LOGIN_FORM_SUCCESS_END"
const SUBMIT_LOGIN_FORM_ERROR_END = "SUBMIT_LOGIN_FORM_ERROR_END"

// reducer with initial state
const initialState = {
  fetching: false,
  joke: null,
  notFilteredDog : null,
  error: null,
  login : false,
  user : {}
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS_END:
            return { ...state, fetching: false, joke: action.joke , notFilteredJoke: action.joke };
        case API_CALL_ERROR_END:
            return { ...state, fetching: false, joke: null, error: action.error }
        case LOAD_MORE_REQUEST : 
            return { ...state, fetching: true };        
        case LOAD_MORE_SUCCESS_END : 
            return { ...state, fetching: false, joke :  [ ...state.joke , ...action.more ] };
        case LOAD_MORE_ERROR_END:
            return { ...state, fetching: false, error: action.error }

        case SUBMIT_LOGIN_FORM_REQUEST:
            return { ...state, fetching: true }
        case SUBMIT_LOGIN_FORM_SUCCESS_END:
            return { ...state, fetching: false, login : true , user : action.more }
        case SUBMIT_LOGIN_FORM_ERROR_END:
            return { ...state, fetching: false, error: action.error , login : false  }
            
        default:
            return state;
    }
}