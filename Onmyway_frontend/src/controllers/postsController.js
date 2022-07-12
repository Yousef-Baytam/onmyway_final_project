import axios from 'axios'
import { url } from '../constants/vars'

const addPost = async (data) => {
    try {
        let res = await axios({
            url: `${ url }/post/new`,
            method: "POST",
            data: data
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

export { addPost }