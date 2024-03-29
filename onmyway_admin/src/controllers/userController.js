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

const banUser = async (id) => {
    try {
        let res = await axios({
            url: `/admin/ban/${ id }`,
            method: "POST",
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const unbanUser = async (id) => {
    try {
        let res = await axios({
            url: `/admin/unban/${ id }`,
            method: "POST",
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

export { login, me, getUsers, unbanUser, banUser }