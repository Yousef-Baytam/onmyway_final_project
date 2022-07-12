import axios from 'axios'
import { url } from '../constants/vars'
import storage from "../storage/asyncStorage";

const addPost = async (data) => {
    try {
        const token = await storage.load({ key: 'token' })
        let res = await axios({
            url: `${ url }/post/new`,
            method: "POST",
            data: data,
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

export { addPost }