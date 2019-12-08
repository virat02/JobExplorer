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
            history.push("/");
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

export const searchJobs = (dispatch, language, jobType, isSponsorshipAvailable, location) => {

    jobService.searchJobs(language, jobType, isSponsorshipAvailable, location)
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
export const locationTextChanged = (dispatch, newLocationText) => {
    dispatch({
        type: constants.LOCATION_TEXT_CHANGED,
        locationText: newLocationText
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

/**
 * METHOD TO LIKE A JOB
 */
export const likeJob = (dispatch, jobId, username) =>

    jobService.checkIfUserLikesJob(username, jobId)
        .then(bool =>
            !bool ?
                jobService.likeJob(jobId, username)
                    .then(() =>
                        dispatch({
                            type: constants.SET_LIKED_ALERT,
                            message: "Liked the job!"
                        }))
                :

                dispatch({
                    type: constants.SET_ALREADY_LIKED_ALERT,
                    message: "You already like the job!"
                })

        );

/**
 * METHOD TO GET JOBS LIKED
 */
export const getJobsLiked = (dispatch, username) => {
    jobService.getJobsLiked(username)
        .then(jobsLiked =>
            dispatch({
                type: constants.GET_JOBS_LIKED,
                jobsLiked: jobsLiked
            })
        )
};

/**
 * DISLIKE A JOB
 */
export const dislikeJob = (dispatch, jobId, username) => {
    jobService.dislikeJob(jobId, username)
        .then(() => {
            dispatch({
                type: constants.SET_DISLIKE_JOB_ALERT,
                message: "Disliked job!"
            });

            return getJobsLiked(dispatch, username);
        }
        )
};

/**
 * METHOD TO SET JOB LIKE PILL ACTIVE
 */
export const activeJobLikePill = dispatch =>
    dispatch({
        type: constants.ACTIVATE_JOB_LIKE_PILL,
        setJobLikePill: true
    });
