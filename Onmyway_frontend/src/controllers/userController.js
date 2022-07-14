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