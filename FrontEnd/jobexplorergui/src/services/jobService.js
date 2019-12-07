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
    searchJobByJobName = jobName =>
        fetch(baseURL + "/api/jobs" + jobName)
            .then(response => response.json());

    //Gets the details for a particular job
    getJobDetails = jobId =>
        fetch(baseURL + "/api/jobs/" + jobId)
            .then(response => response.json());

    //Like a job
    likeJob = (jobId, username) =>
        axios.post(baseURL + "/api/like/user/" + username + "/job/" + jobId);

    //Dislike the job
    dislikeJob = (jobId, username) =>
        axios.delete(baseURL + "/api/like/user/" + username + "/job/" + jobId);
}