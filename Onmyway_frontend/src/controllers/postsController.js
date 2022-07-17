import axios from 'axios'

const addPost = async (data) => {
    try {
        let res = await axios({
            url: `/post/new`,
            method: "POST",
            data: data,
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const getPost = async () => {
    try {
        let res = await axios({
            url: `/post/`,
            method: "GET",
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const joinPost = async (id) => {
    try {
        let res = await axios({
            url: `/post/join/${ id }`,
            method: "POST",
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

export { addPost, getPost }