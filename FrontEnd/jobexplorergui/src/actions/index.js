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
export const likeJob = (dispatch, jobId, token) =>

    jobService.likeJob(jobId, token)
        .then(() => {
            dispatch({
                type: constants.SET_LIKE_JOB_ALERT,
                message: "Liked the job!"
            });

            dispatch({
                type: constants.JOB_LIKED,
                isLiked: true
            })
        })
        .catch(() =>
            dispatch({
                type: constants.SET_ALREADY_LIKED_JOB_ALERT,
                message: "You already like this job!"
            }));

/**
 * METHOD TO GET JOBS LIKED
 */
export const getJobsLiked = (dispatch, token) =>
    jobService.getJobsLiked(token)
        .then(jobs =>
            dispatch({
                type: constants.GET_JOBS_LIKED,
                jobsLiked: jobs
            }));

/**
 * METHOD TO REMOVE LIKED JOB FROM LIST
 * @param dispatch 
 * @param token 
 */
export const removeLikedJob = (dispatch, jobId, token) =>
    jobService.removeLikedJob(jobId, token)
        .then(jobs => {

            dispatch({
                type: constants.REMOVED_LIKED_JOB_FROM_LIST_ALERT,
                message: "Removed liked job from list"
            });

            return getJobsLiked(dispatch, token);
        })
        .catch(() =>
            dispatch({
                type: constants.SET_CANNOT_REMOVE_LIKED_JOB_ALERT,
                message: "You cannot unlike this job!"
            }));

/**
 * DISLIKE A JOB
 */
export const dislikeJob = (dispatch, jobId, token) =>
    jobService.dislikeJob(jobId, token)
        .then(() => {
            dispatch({
                type: constants.SET_DISLIKE_JOB_ALERT,
                message: "Disliked the job!"
            });

            dispatch({
                type: constants.JOB_DISLIKED,
                isDisliked: true
            })
        })
        .catch(() =>
            dispatch({
                type: constants.SET_ALREADY_DISLIKED_JOB_ALERT,
                message: "You already dislike this job!"
            }));

/**
 * METHOD TO GET JOBS DISLIKED
 */
export const getJobsDisliked = (dispatch, token) =>
    jobService.getJobsDisliked(token)
        .then(jobs =>
            dispatch({
                type: constants.GET_JOBS_DISLIKED,
                jobsDisliked: jobs
            })
        );

/**
 * METHOD TO REMOVE LIKED JOB FROM LIST
 * @param dispatch 
 * @param token 
 */
export const removeDislikedJob = (dispatch, jobId, token) =>
    jobService.removeDislikedJob(jobId, token)
        .then(jobs => {

            dispatch({
                type: constants.REMOVED_DISLIKED_JOB_FROM_LIST_ALERT,
                message: "Removed disliked job from list"
            });

            return getJobsDisliked(dispatch, token);

        })
        .catch(() =>
            dispatch({
                type: constants.SET_CANNOT_REMOVE_DISLIKED_JOB_ALERT,
                message: "You cannot un-dislike this job!"
            }));
/**
 * METHOD TO BOOKMARK A JOB
 */
export const bookmarkJob = (dispatch, jobId, token) =>

    jobService.bookmarkJob(jobId, token)
        .then(() => {
            dispatch({
                type: constants.SET_BOOKMARK_JOB_ALERT,
                message: "Bookmarked the job!"
            });

            dispatch({
                type: constants.JOB_BOOKMARKED,
                isBookmarked: true
            })
        })
        .catch(() =>
            dispatch({
                type: constants.SET_ALREADY_BOOKMARKED_JOB_ALERT,
                message: "You already have bookmarked this job!"
            }));

/**
 * METHOD TO GET JOBS BOOKMARKED
 */
export const getJobsBookmarked = (dispatch, token) =>
    jobService.getJobsBookmarked(token)
        .then(jobs =>
            dispatch({
                type: constants.GET_JOBS_BOOKMARKED,
                jobsBookmarked: jobs
            })
        );

/**
 * METHOD TO UNBOOKMARK A JOB
 */
export const unbookmarkJob = (dispatch, jobId, token) =>

    jobService.unbookmarkJob(jobId, token)
        .then(jobs => {

            dispatch({
                type: constants.REMOVED_BOOKMARKED_JOB_FROM_LIST_ALERT,
                message: "Un-bookmarked the job"
            });

            return getJobsBookmarked(dispatch, token);

        })
        .catch(() =>
            dispatch({
                type: constants.SET_CANNOT_BOOKMARK_JOB_ALERT,
                message: "You cannot unbookmark a job without first bookmarking it!"
            }));

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

export const deactivateAllPills = dispatch =>
    dispatch({
        type: constants.DEACTIVATE_ALL_PILLS,
        jobsLikedPill: false,
        jobsDislikedPill: false,
        jobsBookmarkedPill: false
    })
