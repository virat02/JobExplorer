import * as constants from '../constants'

const defaultState = {
    isLoading: false
};

const SearchReducer = (state = defaultState, action) => {

    switch (action.type) {

        case constants.SEARCH_JOB_START_LOADING:
        case constants.SEARCH_JOB_STOP_LOADING:
            return { ...state, isLoading: action.isLoading };

        default:
            return state;
    }
};

export default SearchReducer;