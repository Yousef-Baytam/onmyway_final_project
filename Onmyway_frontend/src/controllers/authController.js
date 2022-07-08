const handleLogin = async (username, password) => {
    try {
        let res = await axios({
            url: "http://127.0.0.1:777/login",
            method: "POST",
            data: {
                "username": username,
                "password": password
            },
        })
        console.log(res)
    }
    catch (e) {
        console.log(e);
    }
}

export { handleLogin }