import axios from 'axios'
import { url } from '../constants/vars'

const login = async (data) => {
    try {
        let res = await axios({
            url: `${ url }/login`,
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
            url: `${ url }/me`,
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

export { login }