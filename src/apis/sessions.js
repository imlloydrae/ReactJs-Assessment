import { loginSuccess, loginError } from '../actions/sessions';
import { registerSuccess,  registerError } from '../actions/register';
import { parseJSON } from './utils';
import API from './CONFIG';

export function login(userData, cb) {
    console.log(userData);
    return dispatch => 
        fetch(API.BASE + '/api/login', {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": userData.username,
                'email': userData.email,
                "password": userData.password,
            }),
        }).then(response => {
            console.log(response)
            if(response.ok) {
                const object = Object.assign(userData, { isLoggedIn: parseJSON(response)});
                dispatch(loginSuccess(object));
                cb();
            }
        })
            .catch(error => {
                console.log('request failed', error);
                dispatch(loginError(error));
            });
}

export function signup(userData) {
    return dispatch => 
        fetch(API.BASE + '/api/register?email='+ userData.email + '&password=' + userData.password, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300 && response.ok) {
                dispatch(registerSuccess(userData));
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                dispatch(loginError(error));
                throw error;
            }
        })
            .catch(error => {console.log('Request failed', error); });
}