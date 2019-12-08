import * as constants from '../constants'
import history from '../History'
import JobService from "../services/jobService";
import AuthService from "../services/authService";

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
export const logout = dispatch => {
    localStorage.removeItem('token');
    dispatch({
        type: constants.AUTH_LOGOUT
    });
    history.push("/");
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
            history.push('/');
        })
        .catch(err => {
            dispatch(authFail(err))
        })
}

/**
 * SEARCH JOB METHOD
 */

export const searchJobs = (dispatch, newSearchText, language, jobType, isSponsorshipAvailable, location) => {

    jobService.searchJobs(newSearchText.length !== 0 ? '?search=' + newSearchText : '',
        language, jobType, isSponsorshipAvailable, location)
        .then(jobs =>
            dispatch({
                type: constants.SEARCH_JOB,
                jobs: jobs
            })
        )
};

/**
 * HELPER METHODS FOR SEARCH JOB
 */
export const locationTextChanged = (dispatch, newLocationText) => {
    dispatch({
        type: constants.LOCATION_TEXT_CHANGED,
        locationText: newLocationText
    })
};

export const searchTextChanged = (dispatch, newSearchText) => {
    dispatch({
        type: constants.SEARCH_TEXT_CHANGED,
        searchText: newSearchText
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

    jobService.likeJob(jobId, username)
        .then(() =>
            dispatch({
                type: constants.SET_LIKE_JOB_ALERT,
                message: "Liked the job!"
            }))
        .catch(() =>
            dispatch({
                type: constants.SET_ALREADY_LIKED_JOB_ALERT,
                message: "You already like this job!"
            }));

/**
 * METHOD TO GET JOBS LIKED
 */
export const getJobsLiked = dispatch => {
    jobService.getJobsLiked()
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
export const dislikeJob = (dispatch, jobId) => {
    jobService.dislikeJob(jobId)
        .then(() =>
            dispatch({
                type: constants.SET_DISLIKE_JOB_ALERT,
                message: "Disliked the job!"
            }))
        .catch(() =>
            dispatch({
                type: constants.SET_ALREADY_DISLIKED_JOB_ALERT,
                message: "You already dislike this job!"
            }));


    return getJobsLiked(dispatch);
}

/**
 * METHOD TO GET JOBS DISLIKED
 */
export const getJobsDisliked = dispatch => {
    jobService.getJobsDisliked()
        .then(jobsDisliked =>
            dispatch({
                type: constants.GET_JOBS_DISLIKED,
                jobsDisliked: jobsDisliked
            })
        )
};

/**
 * METHOD TO BOOKMARK A JOB
 */
export const bookmarkJob = (dispatch, jobId, username) =>

    jobService.bookmarkJob(jobId, username)
        .then(() =>
            dispatch({
                type: constants.SET_BOOKMARK_JOB_ALERT,
                message: "Bookmarked the job!"
            }))
        .catch(() =>
            dispatch({
                type: constants.SET_ALREADY_BOOKMARKED_JOB_ALERT,
                message: "You already have bookmarked this job!"
            }));

/**
 * METHOD TO UNBOOKMARK A JOB
 */
export const unbookmarkJob = (dispatch, jobId) =>

    jobService.unbookmarkJob(jobId)
        .then(() =>
            dispatch({
                type: constants.SET_UNBOOKMARK_JOB_ALERT,
                message: "Un-bookmarked the job!"
            }))
        .catch(() =>
            dispatch({
                type: constants.SET_CANNOT_BOOKMARK_JOB_ALERT,
                message: "You cannot unbookmark a job without first bookmarking it!"
            }));

/**
 * METHOD TO GET JOBS BOOKMARKED
 */
export const getJobsBookmarked = dispatch => {
    jobService.getJobsBookmarked()
        .then(jobsBookmarked =>
            dispatch({
                type: constants.GET_JOBS_BOOKMARKED,
                jobsBookmarked: jobsBookmarked
            })
        )
};

/**
 * METHOD TO SET JOBS LIKED PILL ACTIVE
 */
export const activateJobsLikedPill = dispatch =>
    dispatch({
        type: constants.ACTIVATE_JOBS_LIKED_PILL,
        jobsLikedPill: true
    });

/**
 * METHOD TO SET JOBS DISLIKED PILL ACTIVE
 */
export const activateJobsDislikedPill = dispatch =>
    dispatch({
        type: constants.ACTIVATE_JOBS_DISLIKED_PILL,
        jobsDislikedPill: true
    });

/**
 * METHOD TO SET JOBS BOOKMARKED PILL ACTIVE
 */
export const activateJobsBookmarkedPill = dispatch =>
    dispatch({
        type: constants.ACTIVATE_JOBS_BOOKMARKED_PILL,
        jobsBookmarkedPill: true
    });
