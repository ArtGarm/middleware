const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const SEND_SOME_EVENT = "SEND_SOME_EVENT"
const AND_ITS_DIE = "AND_ITS_DIE"

const FILTER_ELEMENTS = "FILTER_ELEMENTS"

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  notFilteredDog : null,
  error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, dog: action.dog , notFilteredDog: action.dog };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error }
        case SEND_SOME_EVENT:
            return { ...state, fetching: false, dog: null, error: action.error };
        case AND_ITS_DIE : 
            return { ...state, fetching: true, dog: null, error: action.error };
        case FILTER_ELEMENTS : {
            var filterData = [];
            state.notFilteredDog.forEach( item => {
                if ( item.title.indexOf( action.payload ) !== -1 ) {
                    filterData[filterData.length] = item
                }
            });
            return { ...state, dog: filterData };
        }
        default:
            return state;
    }
}