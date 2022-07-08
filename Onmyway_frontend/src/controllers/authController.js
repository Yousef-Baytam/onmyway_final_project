import axios from 'axios'

const handleLogin = async (data) => {
    console.log(data)
    try {
        let res = await axios({
            url: "http://192.168.0.100:777/login",
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