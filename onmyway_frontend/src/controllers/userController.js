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

const updateReview = async (data, id) => {
    try {
        let res = await axios({
            url: `/review/update/${ id }`,
            method: "PATCH",
            data: data
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

const getUsers = async (ids) => {
    try {
        let res = await axios({
            url: `/user`,
            method: "POST",
            data: ids
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

const reportUser = async (id, data) => {
    try {
        let res = await axios({
            url: `/user/report/${ id }`,
            method: "POST",
            data: data
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

const storeNotificationToken = async (id, token) => {
    try {
        let res = await axios({
            url: `/user/${ id }/${ token }`,
            method: "POST",
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

const getJoinedPosts = async () => {
    try {
        let res = await axios({
            url: `/post/user/joinedPosts`,
            method: "GET",
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

const blockUser = async (id) => {
    try {
        let res = await axios({
            url: `/user/block/${ id }`,
            method: "PATCH",
        })
        return res.data.results
    }
    catch (e) {
        console.log(e);
    }
}

export {
    updateImage, updateUserInfo, getUserReviews, addNewReview,
    updateReview, getUsers, reportUser, storeNotificationToken, getJoinedPosts, blockUser
}