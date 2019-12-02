let singleton = null;
let jobs = {};
let baseURL = "http://127.0.0.1:8000";

export default class JobService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
        this.jobs = jobs;
    }

    //retrieves all jobs
    searchJobByJobName = jobName =>
        fetch(baseURL + "/api/search/jobs?query=" + jobName)
            .then(response => response.json());

    //Gets the details for a particular movie
    getJobDetails = jobId =>
        fetch(baseURL + "/api/jobs/" + jobId)
            .then(response => response.json()); s

}