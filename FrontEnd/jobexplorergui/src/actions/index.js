import axios from 'axios';
import * as constants from '../constants'
import history from '../History'
import JobService from "../services/jobService";
import AuthService from "../services/authService";
let baseURL = "http://127.0.0.1:8000";

const jobService = new JobService();
const authService = new AuthService();

/**
 * LOGIN METHOD
 * @param dispatch
 * @param username
 * @param password
 */
export const login = (dispatch, username, password) => {
    dispatch(authStart());
    authService.login(username, password)
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            dispatch(authSuccess(token));
            // history.push("/");
        })
        .catch(err => {
            dispatch(authFail(err))
        })
};

/**
 * AUTHENTICATION
 */
export const authStart = () => {
    return {
        type: constants.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: constants.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: constants.AUTH_FAIL,
        error: error
    }
}

/**
 * LOGOUT METHOD
 */
export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: constants.AUTH_LOGOUT
    };
}

/**
 * REGISTER METHOD
 * @param dispatch 
 * @param username 
 * @param email 
 * @param password1 
 * @param password2 
 */
export const register = (dispatch, username, email, password1, password2) => {
    dispatch(authStart());
    authService.register(username, email, password1, password2)
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            dispatch(authSuccess(token));
            history.push('/login');
        })
        .catch(err => {
            dispatch(authFail(err))
        })
}

/**
 * SEARCH JOB METHOD
 */

export const searchJobsByKeyword = (dispatch, jobTitle) => {

    jobService.searchJobByJobName(jobTitle)
        .then(jobs =>
            dispatch({
                type: constants.SEARCH_JOB,
                jobs: jobs
            })
        )
};

/**
 * HELPER METHOD FOR SEARCH JOB
 */
export const searchTextChanged = (dispatch, searchText) => {
    dispatch({
        type: constants.SEARCH_TEXT_CHANGED,
        searchText: searchText
    })
};

/**
 * JOB DETAILS METHOD
 */
export const getJobDetails = (dispatch, jobId) => {
    jobService.getJobDetails(jobId)
        .then(job =>
            dispatch({
                type: constants.JOB_DETAILS,
                job: job
            }))
};