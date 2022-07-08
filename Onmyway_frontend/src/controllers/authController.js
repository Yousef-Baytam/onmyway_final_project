import axios from 'axios'
import { url } from '../constants/vars'

const handleLogin = async (data) => {
    try {
        let res = await axios({
            url: `${ url }/login`,
            method: "POST",
            data: data
        })
        console.log(res.data)
    }
    catch (e) {
        console.log(e);
    }
}

export { handleLogin }