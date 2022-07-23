import axios from 'axios'

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

const getUsers = async () => {
    try {
        let res = await axios({
            url: `/admin/users`,
            method: "GET",
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

export { login, me, getUsers }