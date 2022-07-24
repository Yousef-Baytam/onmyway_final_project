import axios from 'axios'

const getReports = async (data) => {
    try {
        let res = await axios({
            url: `/admin/reports`,
            method: "GET",
            data: data
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

export { getReports }