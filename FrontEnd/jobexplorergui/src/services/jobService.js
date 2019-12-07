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

    //Gets the details for a particular movie
    getJobDetails = jobId =>
        fetch(baseURL + "/api/jobs/" + jobId)
            .then(response => response.json()); s

}