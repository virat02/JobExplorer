import axios from 'axios';

let singleton = null;
let baseURL = "http://127.0.0.1:8000";

export default class AuthService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
    }

    login = (username, password) =>
        axios.post(baseURL + '/rest-auth/login/', {
            username: username,
            password: password
        })

    register = (username, email, password1, password2) =>
        axios.post(baseURL + '/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
}