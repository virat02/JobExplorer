let singleton = null;
let baseURL = "http://127.0.0.1:8000";

export default class JobService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
    }

    //Gets all users existing on the database
    getUsers = username => {
        if (username !== "") {
            return fetch(baseURL + "/api/user?username=" + username)
                .then(response => response.json());
        }
        return fetch(baseURL + "/api/user")
            .then(response => response.json());
    };
}