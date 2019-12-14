import axios from 'axios';

let singleton = null;
let baseURL = "http://127.0.0.1:8000";

export default class JobService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
    }

    //retrieves all jobs
    searchJobs = (searchText, language, jobType, isSponsorshipAvailable, location) =>

        axios.get(baseURL + '/api/jobs/' + searchText, {
            params: {
                language: language,
                type: jobType,
                sponsorship_available: isSponsorshipAvailable,
                location: location
            }
        })
            .then((response) => response.data);



    //Gets the details for a particular job
    getJobDetails = jobId =>
        axios.get(baseURL + "/api/jobs/" + jobId)
            .then(response => response.data);

    //Like a job, needs Authentication
    likeJob = (jobId, token) =>
        axios.post(baseURL + "/api/like/",
            //data
            {
                job: jobId
            },
            //headers
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token
                }
            })
            .then(response => response.data);

    //Get Liked Jobs, needs Authentication
    getJobsLiked = token =>
        axios.get(baseURL + "/api/likedJobs/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            }
        })
            .then(response => response.data);

    //Remove liked job, needs Authenticaton
    removeLikedJob = (jobId, token) =>
        axios.delete(baseURL + "/api/like/" + jobId + "/",
            //headers
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token
                }
            })
            .then(response => response.data);

    //Dislike the job, needs Authentication
    dislikeJob = (jobId, token) =>
        axios.post(baseURL + "/api/dislike/",
            //data
            {
                job: jobId
            },
            //headers
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token
                }
            })
            .then(response => response.data);


    //Get Disliked Jobs, needs Authentication
    getJobsDisliked = token =>
        axios.get(baseURL + "/api/dislikedJobs/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            }
        })
            .then(response => response.data);

    //Remove disliked job, needs Authenticaton
    removeDislikedJob = (jobId, token) =>
        axios.delete(baseURL + "/api/dislike/" + jobId + "/",
            //headers
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token
                }
            })
            .then(response => response.data);

    //Bookmark the job, needs Authentication
    bookmarkJob = (jobId, token) =>
        axios.post(baseURL + "/api/bookmark/",
            //data
            {
                job: jobId
            },
            //headers
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token
                }
            })
            .then(response => response.data);

    //Get Bookmarked Jobs, needs Authentication
    getJobsBookmarked = token =>
        axios.get(baseURL + "/api/bookmarkedJobs/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            }
        })
            .then(response => response.data);

    //Remove bookmarked job, needs Authenticaton
    unbookmarkJob = (jobId, token) =>
        axios.delete(baseURL + "/api/bookmark/" + jobId + "/",
            //headers
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token
                }
            })
            .then(response => response.data);
}