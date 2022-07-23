import axios from 'axios'
import { url } from '../constants/vars'

const login = async (data) => {
    try {
        let res = await axios({
            url: `/login`,
            method: "POST",
            data: data
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const me = async (token) => {
    try {
        let res = await axios({
            url: `/me`,
            method: "GET",
            headers: {
                Authorization: `bearer ${ token }`
            }
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const register = async (data) => {
    try {
        let res = await axios({
            url: `/register`,
            method: "POST",
            data: data
        })
        return res.data
    }
    catch (e) {
        alert(e.response.data);
    }
}

export { login, me, register }