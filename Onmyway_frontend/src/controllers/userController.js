import axios from 'axios'

const updateImage = async (data) => {
    try {
        let res = await axios({
            url: `/user/image`,
            method: "PATCH",
            data: data,
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const updateUserInfo = async (data) => {
    try {
        let res = await axios({
            url: `/user/`,
            method: "PATCH",
            data: data,
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const getUserReviews = async (id) => {
    try {
        let res = await axios({
            url: `/review/user/${ id }`,
            method: "GET",
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

const addNewReview = async (data, id) => {
    try {
        let res = await axios({
            url: `/review/new/${ id }`,
            method: "POST",
            data: data
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

export { updateImage, updateUserInfo, getUserReviews, addNewReview }